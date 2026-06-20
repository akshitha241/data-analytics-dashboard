import sampleData from "../data/sampleData";
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

function RegionChart({ uploadedData }) {
  const data = uploadedData.length ? uploadedData : sampleData;

  const region = {};

  data.forEach((item) => {
    region[item.region] =
      (region[item.region] || 0) + Number(item.sales);
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
      <h3>🌍 Sales by Region</h3>

      <Pie
        data={{
          labels: Object.keys(region),
          datasets: [
            {
              data: Object.values(region),
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

export default RegionChart;