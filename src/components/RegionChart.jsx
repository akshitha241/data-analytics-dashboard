import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function RegionChart() {
  const data = {
    labels: ["North", "South", "East", "West"],

    datasets: [
      {
        data: [35, 25, 20, 20],
        backgroundColor: [
          "#3B82F6",
          "#10B981",
          "#F59E0B",
          "#EF4444",
        ],
      },
    ],
  };

  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "15px",
        boxShadow: "0 4px 12pxrgba(0,0,0,0.08)",
        marginTop: "20px",
      }}
    >
      <h3>Sales by Region</h3>

      <Pie data={data} />
    </div>
  );
}

export default RegionChart;