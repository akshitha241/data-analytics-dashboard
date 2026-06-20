import sampleData from "../data/sampleData";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

function CategoryChart({ uploadedData }) {
  const data = uploadedData.length ? uploadedData : sampleData;

  const category = {};

  data.forEach((item) => {
    category[item.category] =
      (category[item.category] || 0) + Number(item.sales);
  });

  return (
    <div
      style={{
        flex: 1,
        background: "white",
        padding: "20px",
        borderRadius: "15px",
        boxShadow: "0 4px 12px rgba(0,0,0,.08)",
      }}
    >
      <h3>📊 Sales by Category</h3>

      <Bar
        data={{
          labels: Object.keys(category),
          datasets: [
            {
              label: "Sales",
              data: Object.values(category),
              backgroundColor: [
                "#2563eb",
                "#10b981",
                "#f59e0b",
                "#ef4444",
              ],
            },
          ],
        }}
      />
    </div>
  );
}

export default CategoryChart;