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

function SalesChart({ uploadedData }) {
  const data = uploadedData.length ? uploadedData : sampleData;

  const sales = {};

  data.forEach((item) => {
    sales[item.month] = (sales[item.month] || 0) + Number(item.sales);
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
      <h3>📈 Monthly Sales Trend</h3>

      <Line
        data={{
          labels: Object.keys(sales),
          datasets: [
            {
              label: "Sales",
              data: Object.values(sales),
              borderColor: "#2563eb",
              backgroundColor: "rgba(37,99,235,.2)",
              fill: true,
              tension: 0.4,
            },
          ],
        }}
      />
    </div>
  );
}

export default SalesChart;