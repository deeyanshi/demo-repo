function getScore(mat) {
  // Lower is better
  return mat.carbon * 0.6 + mat.cost * 0.4;
}

function calculate() {
  let budget = parseFloat(document.getElementById("budget").value);
  let carbonLimit = parseFloat(document.getElementById("carbonLimit").value);
  let buildingType = document.getElementById("buildingType").value;

  if (!budget || !carbonLimit) {
    document.getElementById("result").innerHTML = "⚠️ Enter valid inputs.";
    return;
  }

  // Step 1: Filter valid materials
  let filtered = materials.filter(mat =>
    mat.cost <= budget &&
    mat.carbon <= carbonLimit &&
    mat.suitableFor.includes(buildingType)
  );

  if (filtered.length === 0) {
    document.getElementById("result").innerHTML = "❌ No materials match.";
    return;
  }

  // Step 2: Rank best material
  filtered.sort((a, b) => getScore(a) - getScore(b));
  let best = filtered[0];

  // Step 3: Best combination (Wall + Structure + Roof)
  let bestWall = filtered
    .filter(m => m.type === "Wall")
    .sort((a, b) => getScore(a) - getScore(b))[0];

  let bestStructure = filtered
    .filter(m => m.type === "Structure")
    .sort((a, b) => getScore(a) - getScore(b))[0];

  let bestRoof = filtered
    .filter(m => m.type === "Roof")
    .sort((a, b) => getScore(a) - getScore(b))[0];

  // Step 4: Output
  let result = `
    ⭐ <b>Best Overall Material</b><br>
    ${best.name}<br>
    Type: ${best.type}<br>
    Carbon: ${best.carbon}<br>
    Cost: ₹${best.cost}<br><br>

    🧱 <b>Best Combination</b><br>
    ${bestWall ? "Wall: " + bestWall.name + "<br>" : ""}
    ${bestStructure ? "Structure: " + bestStructure.name + "<br>" : ""}
    ${bestRoof ? "Roof: " + bestRoof.name + "<br>" : ""}
  `;

  document.getElementById("result").innerHTML = result;
}

/* BUBBLES */
function createBubbles() {
  for (let i = 0; i < 30; i++) {
    let bubble = document.createElement("div");
    bubble.classList.add("bubble");

    let size = Math.random() * 20 + 10;
    bubble.style.width = size + "px";
    bubble.style.height = size + "px";

    bubble.style.left = Math.random() * 100 + "vw";
    bubble.style.animationDuration = (5 + Math.random() * 5) + "s";

    document.body.appendChild(bubble);
  }
}

createBubbles();