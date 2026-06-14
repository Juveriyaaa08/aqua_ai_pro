import { useState } from "react";
import Navbar from "../components/Navbar";
import WaterChart from "../components/WaterChart";

function Dashboard() {

  const [usage, setUsage] = useState("");

  const waterData =
    JSON.parse(localStorage.getItem("waterData")) ||
    [120, 150, 180, 170, 200, 220];

  // Save Data
  const saveUsage = () => {
    if (!usage) return;

    const updated = [...waterData, Number(usage)];

    localStorage.setItem("waterData", JSON.stringify(updated));

    setUsage("");
    window.location.reload();
  };

  // Basic Stats
  const today = waterData[waterData.length - 1];

  const total = waterData.reduce((a, b) => a + b, 0);

  const avg = total / waterData.length;

  // Prediction (AI style)
  const last3 = waterData.slice(-3);

  const prediction = Math.round(
    (avg + last3.reduce((a, b) => a + b, 0) / last3.length) / 2
  );

  // Efficiency Score
  const efficiency = Math.max(
    0,
    Math.min(100, Math.round(120 - avg))
  );

  // Sustainability Grade
  const grade =
    avg < 100
      ? "A+ 🌱"
      : avg < 150
      ? "A 👍"
      : avg < 200
      ? "B ⚠"
      : avg < 250
      ? "C ❌"
      : "D 🔴";

  // Trend
  const last7 = waterData.slice(-7);

  const trend =
    last7[last7.length - 1] - last7[0];

  const trendStatus =
    trend > 0
      ? "📈 Increasing Usage"
      : trend < 0
      ? "📉 Decreasing Usage"
      : "➖ Stable Usage";

  // Cost estimation
  const costPerLiter = 0.05;

  const estimatedCost = Math.round(total * costPerLiter);

  // Risk level
  const risk =
    avg > 200
      ? "High Water Usage ⚠"
      : avg < 80
      ? "Low Usage / Possible Drought ⚠"
      : "Balanced Usage ✅";

  // Smart insight
  const insight =
    today > avg * 1.5
      ? "⚠ Possible leakage or unusual spike detected"
      : today < avg * 0.5
      ? "⚠ Very low usage today"
      : "✅ Usage is stable and efficient";

  // Alerts
  const alerts = [];

  if (avg > 200) alerts.push("⚠ High water consumption detected");
  if (today > avg * 1.5) alerts.push("⚠ Possible leakage detected");
  if (avg < 80) alerts.push("🌱 Excellent water saving behavior");

  return (
    <>
      <Navbar />

      <div className="dashboard">

        <h1>💧 Aqua AI Smart Dashboard</h1>

        {/* INPUT */}
        <div className="input-section">

          <input
            type="number"
            placeholder="Enter today's water usage (L)"
            value={usage}
            onChange={(e) => setUsage(e.target.value)}
          />

          <button onClick={saveUsage}>
            Add Data
          </button>
        </div>

        {/* BASIC CARDS */}
        <div className="cards">

          <div className="card">
            <h3>Today's Usage</h3>
            <p>{today} L</p>
          </div>

          <div className="card">
            <h3>Total Usage</h3>
            <p>{total} L</p>
          </div>

          <div className="card">
            <h3>Average Usage</h3>
            <p>{avg.toFixed(1)} L</p>
          </div>

          <div className="card">
            <h3>AI Prediction</h3>
            <p>{prediction} L</p>
          </div>

          <div className="card">
            <h3>Efficiency</h3>
            <p>{efficiency}/100</p>
          </div>

          <div className="card">
            <h3>Risk Level</h3>
            <p>{risk}</p>
          </div>

        </div>

        {/* INSIGHT */}
        <div className="insight-box">
          <h2>🧠 Smart Insight</h2>
          <p>{insight}</p>
        </div>

        {/* ADVANCED SECTION */}
        <div className="advanced-box">

          <h2>📊 Advanced Analytics</h2>

          <div className="advanced-grid">

            <div className="adv-card">
              <h3>Trend</h3>
              <p>{trendStatus}</p>
            </div>

            <div className="adv-card">
              <h3>Estimated Cost</h3>
              <p>₹ {estimatedCost}</p>
            </div>

            <div className="adv-card">
              <h3>Grade</h3>
              <p>{grade}</p>
            </div>

          </div>

          <div className="alert-box">

            <h3>🔔 Smart Alerts</h3>

            {alerts.length === 0 ? (
              <p>✅ No alerts — usage is normal</p>
            ) : (
              alerts.map((a, i) => (
                <p key={i}>{a}</p>
              ))
            )}

          </div>

        </div>

        {/* CHART */}
        <WaterChart />

      </div>
    </>
  );
}

export default Dashboard;