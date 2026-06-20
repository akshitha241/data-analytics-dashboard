import sampleData from "../data/sampleData";

function DataTable({ uploadedData }) {
  const data =
    uploadedData && uploadedData.length > 0
      ? uploadedData
      : sampleData;

  return (
    <div
      style={{
        background: "#fff",
        padding: "25px",
        borderRadius: "18px",
        marginTop: "25px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
        overflowX: "auto",
      }}
    >
      <h2
        style={{
          color: "#1e3a8a",
          marginBottom: "20px",
        }}
      >
        📋 Sales Records
      </h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          minWidth: "700px",
        }}
      >
        <thead>
          <tr
            style={{
              background: "#2563eb",
              color: "white",
            }}
          >
            <th style={{ padding: "12px" }}>Month</th>
            <th style={{ padding: "12px" }}>Category</th>
            <th style={{ padding: "12px" }}>Region</th>
            <th style={{ padding: "12px" }}>Sales</th>
            <th style={{ padding: "12px" }}>Profit</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#f8fafc")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "white")
              }
              style={{
                transition: "0.2s",
              }}
            >
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid #eee",
                }}
              >
                {item.month}
              </td>

              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid #eee",
                }}
              >
                {item.category}
              </td>

              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid #eee",
                }}
              >
                {item.region}
              </td>

              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid #eee",
                }}
              >
                ₹{Number(item.sales).toLocaleString()}
              </td>

              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid #eee",
                }}
              >
                ₹{Number(item.profit).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p
        style={{
          marginTop: "20px",
          color: "#64748b",
        }}
      >
        Total Records: <strong>{data.length}</strong>
      </p>
    </div>
  );
}

export default DataTable;