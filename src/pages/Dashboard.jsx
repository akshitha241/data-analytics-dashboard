import { useState } from "react";

import sampleData from "../data/sampleData";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import UploadCSV from "../components/UploadCSV";
import FilterBar from "../components/FilterBar";
import ExportButtons from "../components/ExportButtons";
import KPICards from "../components/KPICards";
import SalesChart from "../components/SalesChart";
import CategoryChart from "../components/CategoryChart";
import RegionChart from "../components/RegionChart";
import ProfitChart from "../components/ProfitChart";
import DataTable from "../components/DataTable";

function Dashboard() {
  const [uploadedData, setUploadedData] = useState([]);

  const [filters, setFilters] = useState({
    month: "",
    category: "",
    region: "",
  });

  const data = uploadedData.length > 0 ? uploadedData : sampleData;

  const filteredData = data.filter((item) => {
    return (
      (filters.month === "" || item.month === filters.month) &&
      (filters.category === "" || item.category === filters.category) &&
      (filters.region === "" || item.region === filters.region)
    );
  });

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div
        style={{
          flex: 1,
          padding: "30px",
          background: "#eef3f8",
          minHeight: "100vh",
        }}
      >
        <div id="top">
          <Navbar />
        </div>

        <div id="upload">
          <UploadCSV setUploadedData={setUploadedData} />
        </div>

        <FilterBar filters={filters} setFilters={setFilters} data={data} />

        <ExportButtons data={filteredData} />

        <KPICards uploadedData={filteredData} />

        <div id="sales">
          <SalesChart uploadedData={filteredData} />
        </div>

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "20px",
            flexWrap: "wrap",
          }}
        >
          <div id="category" style={{ flex: 1, minWidth: "350px" }}>
            <CategoryChart uploadedData={filteredData} />
          </div>

          <div id="region" style={{ flex: 1, minWidth: "350px" }}>
            <RegionChart uploadedData={filteredData} />
          </div>
        </div>

        <div id="profit">
          <ProfitChart uploadedData={filteredData} />
        </div>

        <div id="table">
          <DataTable uploadedData={filteredData} />
        </div>

        <footer
          style={{
            marginTop: "40px",
            textAlign: "center",
            color: "#64748b",
            padding: "20px",
            fontSize: "15px",
          }}
        >
          © 2026 Business Intelligence Dashboard | Built with React & Chart.js
        </footer>
      </div>
    </div>
  );
}

export default Dashboard;