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

function SalesChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],

    datasets: [
      {
        label: "Sales",
        data: [12000, 15000, 9000, 17000, 14000, 11000],
        borderColor: "blue",
        backgroundColor: "rgba(0,0,255,0.2)",
        tension: 0.4,
      },
    ],
  };

  return (
    <div
      style={{
        marginTop: "30px",
        background: "white",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h2>Monthly Sales Trend</h2>

      <Line data={data} />
    </div>
  );
}

export default SalesChart;