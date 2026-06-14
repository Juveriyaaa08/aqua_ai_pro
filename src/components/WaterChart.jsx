import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function WaterChart() {

  const defaultData = [120, 150, 180, 170, 200, 220];

  const waterData =
    JSON.parse(localStorage.getItem("waterData")) ||
    defaultData;

  const data = {
    labels: waterData.map(
      (_, index) => `Day ${index + 1}`
    ),

    datasets: [
      {
        label: "Water Usage (Liters)",
        data: waterData,
        borderWidth: 3,
        tension: 0.4
      }
    ]
  };

  const options = {
    responsive: true,

    plugins: {
      legend: {
        display: true
      }
    }
  };

  return (
    <div
      style={{
        width: "80%",
        margin: "30px auto",
        background: "white",
        padding: "20px",
        borderRadius: "15px",
        boxShadow: "0 3px 10px rgba(0,0,0,0.15)"
      }}
    >
      <h2>Water Usage Analytics</h2>

      <Line
        data={data}
        options={options}
      />
    </div>
  );
}

export default WaterChart;