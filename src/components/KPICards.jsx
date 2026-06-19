function KPICards() {
  const cards = [
    { title: "Total Sales", value: "₹1,25,000" },
    { title: "Profit", value: "₹28,500" },
    { title: "Customers", value: "540" },
    { title: "Orders", value: "320" }
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "20px",
        marginTop: "30px"
      }}
    >
      {cards.map((card, index) => (
        <div
          key={index}
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
          }}
        >
          <h3>{card.title}</h3>
          <h2>{card.value}</h2>
        </div>
      ))}
    </div>
  );
}

export default KPICards;