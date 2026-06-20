import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
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

function ProfitChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],

    datasets: [
      {
        label: "Profit",
        data: [2500, 3200, 1800, 4200, 3100, 2200],
        borderColor: "#10B981",
        backgroundColor: "rgba(16,185,129,0.2)",
        tension: 0.4,
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
      <h3>Monthly Profit Trend</h3>

      <Line data={data} />
    </div>
  );
}

export default ProfitChart;