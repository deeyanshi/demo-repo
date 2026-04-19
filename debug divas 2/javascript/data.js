const materials = [

  // 🧱 WALL MATERIALS
  { name: "Fly Ash Brick", type: "Wall", carbon: 120, cost: 200, suitableFor: ["House","Apartments","School","Hospital"] },
  { name: "AAC Block", type: "Wall", carbon: 90, cost: 250, suitableFor: ["House","Apartments","Office","Hospital"] },
  { name: "Clay Brick", type: "Wall", carbon: 150, cost: 180, suitableFor: ["House","Villa"] },
  { name: "Rammed Earth", type: "Wall", carbon: 40, cost: 220, suitableFor: ["Eco Home","Green Building"] },
  { name: "Hempcrete", type: "Wall", carbon: 30, cost: 350, suitableFor: ["Eco Home","Green Building"] },
  { name: "Compressed Earth Block", type: "Wall", carbon: 50, cost: 210, suitableFor: ["Eco Home","House"] },

  // 🏗️ STRUCTURE MATERIALS
  { name: "Concrete", type: "Structure", carbon: 180, cost: 300, suitableFor: ["Apartments","Office","Mall","Hospital"] },
  { name: "Recycled Steel", type: "Structure", carbon: 200, cost: 400, suitableFor: ["Office","Mall","Warehouse","Factory"] },
  { name: "Timber", type: "Structure", carbon: 80, cost: 450, suitableFor: ["House","Villa","Green Building"] },
  { name: "Bamboo", type: "Structure", carbon: 50, cost: 300, suitableFor: ["Eco Home","Green Building","House"] },
  { name: "Cross Laminated Timber (CLT)", type: "Structure", carbon: 70, cost: 500, suitableFor: ["Green Building","Office"] },

  // 🏠 ROOF MATERIALS
  { name: "Concrete Roof", type: "Roof", carbon: 160, cost: 300, suitableFor: ["House","Apartments","Office"] },
  { name: "Metal Roofing", type: "Roof", carbon: 140, cost: 280, suitableFor: ["Warehouse","Factory","House"] },
  { name: "Green Roof", type: "Roof", carbon: 60, cost: 450, suitableFor: ["Green Building","Office"] },
  { name: "Clay Tiles", type: "Roof", carbon: 100, cost: 260, suitableFor: ["House","Villa"] },

  // 🏢 EXTERIOR / FACADE
  { name: "Glass Facade", type: "Exterior", carbon: 220, cost: 500, suitableFor: ["Office","Mall"] },
  { name: "Aluminium Cladding", type: "Exterior", carbon: 210, cost: 480, suitableFor: ["Office","Mall"] },
  { name: "Stone Cladding", type: "Exterior", carbon: 130, cost: 350, suitableFor: ["Villa","House","Hotel"] },

  // 🧊 INSULATION MATERIALS
  { name: "Mineral Wool", type: "Insulation", carbon: 110, cost: 200, suitableFor: ["Office","Hospital","Apartments"] },
  { name: "Cellulose Insulation", type: "Insulation", carbon: 60, cost: 220, suitableFor: ["Eco Home","Green Building"] },
  { name: "Polyurethane Foam", type: "Insulation", carbon: 150, cost: 250, suitableFor: ["Warehouse","Factory"] },

  // 🎨 FINISHING MATERIALS
  { name: "Low VOC Paint", type: "Finish", carbon: 20, cost: 150, suitableFor: ["House","Office","School"] },
  { name: "Ceramic Tiles", type: "Finish", carbon: 90, cost: 200, suitableFor: ["House","Apartments","Hospital"] },
  { name: "Marble Flooring", type: "Finish", carbon: 140, cost: 500, suitableFor: ["Villa","Hotel"] },
  { name: "Wood Flooring", type: "Finish", carbon: 80, cost: 450, suitableFor: ["House","Villa"] },

  // 🌱 ADVANCED SUSTAINABLE
  { name: "Recycled Plastic Panels", type: "Wall", carbon: 35, cost: 240, suitableFor: ["Eco Home","Green Building"] },
  { name: "Solar Panels", type: "Energy", carbon: 50, cost: 600, suitableFor: ["House","Office","Green Building"] },
  { name: "Cool Roof Coating", type: "Roof", carbon: 40, cost: 180, suitableFor: ["House","Office"] }
];