import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import SalesChart from "./SalesChart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function CategoryChart() {
  const data = {
    labels: ["Electronics", "Furniture", "Office Supplies"],

    datasets: [
      {
        label: "Sales",
        data: [42000, 29000, 20000],
        backgroundColor: [
          "#3B82F6",
          "#10B981",
          "#F59E0B",
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
      <h3>Sales by Category</h3>

      <Bar data={data} />
    </div>
  );
}

export default CategoryChart;