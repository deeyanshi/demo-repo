from flask import Flask, request, jsonify, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app) 
@app.route("/")
def home():
    return render_template("css/impact report.css")

# Database of materials (Base costs are in USD, we will convert them below)
materials = {
    "Concrete": {"co2": 0.9, "cost": 120},
    "Steel": {"co2": 1.8, "cost": 200},
    "Recycled Steel": {"co2": 0.4, "cost": 180},
    "Timber": {"co2": 0.1, "cost": 150},
    "Cross-Laminated Timber": {"co2": 0.08, "cost": 160},
    "Bamboo": {"co2": 0.05, "cost": 90},
    "Hempcrete": {"co2": -0.02, "cost": 110}, 
    "Rammed Earth": {"co2": 0.02, "cost": 80}
}

sourcing_multipliers = {
    "Local": {"co2_mult": 1.0, "cost_mult": 0.9},
    "Regional": {"co2_mult": 1.2, "cost_mult": 1.0},
    "Imported": {"co2_mult": 1.6, "cost_mult": 1.4}
}

# Current approximate exchange rate
USD_TO_INR = 83.50 

@app.route('/calculate', methods=['POST'])
def calculate():
    try:
        data = request.json
        area = float(data.get('area', 0))
        material = data.get('material', 'Concrete')
        sourcing = data.get('sourcing', 'Regional')

        mat_data = materials.get(material, materials["Concrete"])
        source_data = sourcing_multipliers.get(sourcing, sourcing_multipliers["Regional"])

        emission_factor = mat_data["co2"] * source_data["co2_mult"]
        
        # Calculate cost and convert to INR
        cost_factor = mat_data["cost"] * source_data["cost_mult"]
        estimated_cost = area * cost_factor * USD_TO_INR

        quantity = area * 10 
        carbon = quantity * emission_factor

        trees_needed = int(max(0, carbon / 21))
        car_miles = int(max(0, carbon / 0.4))

        base_scores = {
            "Hempcrete": 100, "Cross-Laminated Timber": 95, "Bamboo": 95, 
            "Timber": 90, "Rammed Earth": 90, "Recycled Steel": 70, 
            "Concrete": 40, "Steel": 20
        }
        score = base_scores.get(material, 50)
        
        if sourcing == "Local": score += 10
        elif sourcing == "Imported": score -= 15

        if score >= 95: grade_info = {"letter": "A++", "color": "#1abc9c"}
        elif score >= 85: grade_info = {"letter": "A", "color": "#27ae60"}
        elif score >= 70: grade_info = {"letter": "B", "color": "#f1c40f"}
        elif score >= 40: grade_info = {"letter": "C", "color": "#e67e22"}
        else: grade_info = {"letter": "F", "color": "#e74c3c"}

        suggestions = []
        if emission_factor < 0:
            suggestions.append(f"Mind-Blowing! {material} is Carbon Negative. You are actively pulling CO₂ out of the atmosphere!")
        elif material in ["Steel", "Concrete"]:
            suggestions.append(f"Alert: {material} has a severe footprint. Switch to Timber to reduce emissions.")
        else:
            suggestions.append(f"Incredible! {material} is a highly sustainable choice.")

        if sourcing == "Imported":
            suggestions.append("⚠️ Shipping this internationally adds massive carbon. Source locally to drop emissions and costs!")

        chart_data = {k: v["co2"] * source_data["co2_mult"] for k, v in materials.items()}

        return jsonify({
            "status": "success",
            "material": material,
            "sourcing": sourcing,
            "carbon_total": round(carbon, 2),
            "estimated_cost": int(estimated_cost),
            "trees_needed": trees_needed,
            "car_miles": car_miles,
            "grade": grade_info,
            "suggestions": suggestions,
            "all_materials": chart_data
        })
        
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True, port=5000)