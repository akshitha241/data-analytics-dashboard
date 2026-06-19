import sampleData from "../data/sampleData";

function DataTable() {
  return (
    <div
      style={{
        marginTop: "20px",
        background: "white",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h3>Sales Data</h3>

      <table border="1" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Month</th>
            <th>Category</th>
          </tr>
        </thead>

        <tbody>
          {sampleData.map((item) => (
            <tr key={item.id}>
              <td>{item.month}</td>
              <td>{item.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;