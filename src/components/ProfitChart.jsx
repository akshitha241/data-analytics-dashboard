import sampleData from "../data/sampleData";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

function ProfitChart({ uploadedData }) {
  const data = uploadedData.length ? uploadedData : sampleData;

  const profit = {};

  data.forEach((item) => {
    profit[item.month] =
      (profit[item.month] || 0) + Number(item.profit);
  });

  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "15px",
        boxShadow: "0 4px 12px rgba(0,0,0,.08)",
        marginTop: "20px",
      }}
    >
      <h3>💰 Monthly Profit Trend</h3>

      <Line
        data={{
          labels: Object.keys(profit),
          datasets: [
            {
              label: "Profit",
              data: Object.values(profit),
              borderColor: "#10b981",
              backgroundColor: "rgba(16,185,129,.2)",
              fill: true,
              tension: 0.4,
            },
          ],
        }}
      />
    </div>
  );
}

export default ProfitChart;