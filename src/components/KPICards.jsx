import sampleData from "../data/sampleData";

function KPICards({ uploadedData }) {
  const data =
    uploadedData && uploadedData.length > 0 ? uploadedData : sampleData;

  const totalSales = data.reduce((sum, item) => sum + Number(item.sales), 0);
  const totalProfit = data.reduce((sum, item) => sum + Number(item.profit), 0);
  const totalOrders = data.length;
  const totalCategories = new Set(data.map((item) => item.category)).size;

  const cards = [
    {
      title: "Total Sales",
      icon: "💰",
      value: `₹${totalSales.toLocaleString()}`,
      color: "#2563eb",
    },
    {
      title: "Total Profit",
      icon: "📈",
      value: `₹${totalProfit.toLocaleString()}`,
      color: "#10b981",
    },
    {
      title: "Orders",
      icon: "📦",
      value: totalOrders,
      color: "#f59e0b",
    },
    {
      title: "Categories",
      icon: "🛒",
      value: totalCategories,
      color: "#ef4444",
    },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "20px",
        marginTop: "20px",
        marginBottom: "20px",
      }}
    >
      {cards.map((card, index) => (
        <div
          key={index}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
          }}
          style={{
            background: "white",
            borderRadius: "18px",
            padding: "25px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            borderLeft: `6px solid ${card.color}`,
            transition: "0.3s",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              fontSize: "28px",
              marginBottom: "10px",
            }}
          >
            {card.icon}
          </div>

          <h4 style={{ color: "#64748b", marginBottom: "10px" }}>
            {card.title}
          </h4>

          <h2 style={{ color: card.color, margin: 0 }}>{card.value}</h2>
        </div>
      ))}
    </div>
  );
}

export default KPICards;