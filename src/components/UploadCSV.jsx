import Papa from "papaparse";

function UploadCSV({ setUploadedData }) {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,

      complete: (results) => {
        const formattedData = results.data.map((row, index) => {
          let month = "";

          if (row.Month) {
            month = row.Month;
          } else if (row["Order Date"]) {
            const date = new Date(row["Order Date"]);
            month = date.toLocaleString("default", {
              month: "short",
            });
          }

          return {
            id: index + 1,
            month,
            category: row.Category || "",
            region: row.Region || "",
            sales: Number(row.Sales || 0),
            profit: Number(row.Profit || 0),
          };
        });

        setUploadedData(formattedData);
      },
    });
  };

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "18px",
        padding: "25px",
        marginBottom: "25px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
        border: "1px solid #e5e7eb",
      }}
    >
      <h2
        style={{
          color: "#1e3a8a",
          marginBottom: "10px",
        }}
      >
        📂 Upload Sales Dataset
      </h2>

      <p
        style={{
          color: "#666",
          marginBottom: "20px",
        }}
      >
        Upload your CSV file to analyze Sales, Profit,
        Categories and Regions instantly.
      </p>

      <input
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
        style={{
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            cursor: "pointer",
            background: "#fff",
        }}
      />
    </div>
  );
}

export default UploadCSV;