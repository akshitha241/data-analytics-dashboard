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
        borderRadius: "10px",
        flex: 1,
      }}
    >
      <h3>Sales by Category</h3>

      <Bar data={data} />
    </div>
  );
}

export default CategoryChart;