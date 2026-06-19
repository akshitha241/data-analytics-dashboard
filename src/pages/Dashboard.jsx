import CategoryChart from "../components/CategoryChart";
import RegionChart from "../components/RegionChart";
import Navbar from "../components/Navbar";
import SalesChart from "../components/SalesChart";
import KPICards from "../components/KPICards";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ padding: "20px", flex: 1, background: "#f5f7fa", minHeight: "100vh", }}>
        <Navbar />
        <h1>📊 Data Analytics Dashboard</h1>

        <p>Welcome to your Business Intelligence Dashboard.</p>

        <KPICards />
        <SalesChart />
        <div
            style={{
                display: "flex",
                gap: "20px",
                marginTop: "20px", 
            }}
        >
            <CategoryChart />
            <RegionChart />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;