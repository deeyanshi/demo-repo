let chartInstance = null;

function calculate() {
  const budget = document.getElementById("budget").value;
  const carbon = document.getElementById("carbon").value;

  let best = null;

  materials.forEach(m => {
    if (m.cost <= budget && m.carbon <= carbon) {
      if (!best || m.carbon < best.carbon) {
        best = m;
      }
    }
  });

  let result = best
    ? `🏆 Best: ${best.name}`
    : "No material found";

  document.getElementById("result").innerHTML = result;

  showChart();
}

function showChart() {
  const labels = materials.map(m => m.name);
  const carbonData = materials.map(m => m.carbon);

  if (chartInstance) chartInstance.destroy();

  chartInstance = new Chart(document.getElementById("chart"), {
    type: "bar",
    data: {
      labels: labels,
      datasets: [{ label: "Carbon", data: carbonData }]
    }
  });
}

function goBack() {
  window.location.href = "options.html";
}