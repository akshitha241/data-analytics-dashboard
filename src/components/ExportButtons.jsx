import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

function ExportButtons({ data }) {
  const exportCSV = () => {
    const headers = ["Month", "Category", "Region", "Sales", "Profit"];

    const rows = data.map((item) => [
      item.month,
      item.category,
      item.region,
      item.sales,
      item.profit,
    ]);

    const csvContent = [headers.join(","), ...rows.map((row) => row.join(","))].join("\n");

    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "sales_report.csv";
    link.click();
  };

  const exportPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Sales Report", 14, 20);

    autoTable(doc, {
      head: [["Month", "Category", "Region", "Sales", "Profit"]],
      body: data.map((item) => [
        item.month,
        item.category,
        item.region,
        item.sales,
        item.profit,
      ]),
      startY: 30,
    });

    doc.save("sales_report.pdf");
  };

  const buttonStyle = {
    padding: "12px 22px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    color: "white",
    fontWeight: "600",
    fontSize: "15px",
    transition: "0.3s",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "15px",
        marginBottom: "25px",
        flexWrap: "wrap",
      }}
    >
      <button
        onClick={exportCSV}
        style={{
          ...buttonStyle,
          background: "#2563eb",
        }}
      >
        📤 Export CSV
      </button>

      <button
        onClick={exportPDF}
        style={{
          ...buttonStyle,
          background: "#10b981",
        }}
      >
        📄 Export PDF
      </button>
    </div>
  );
}

export default ExportButtons;