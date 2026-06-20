function FilterBar({
  filters,
  setFilters,
  data,
}) {
  const months = [...new Set(data.map((i) => i.month))];
  const categories = [...new Set(data.map((i) => i.category))];
  const regions = [...new Set(data.map((i) => i.region))];

  const selectStyle = {
    width: "190px",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #d1d5db",
    background: "#fff",
    boxShadow: "0 2px 6px rgba(0,0,0,.05)",
    cursor: "pointer",
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "18px",
        marginBottom: "25px",
        flexWrap: "wrap",
      }}
    >
      <select
        style={selectStyle}
        value={filters.month}
        onChange={(e) =>
          setFilters({
            ...filters,
            month: e.target.value,
          })
        }
      >
        <option value="">📅 All Months</option>

        {months.map((month) => (
          <option key={month}>{month}</option>
        ))}
      </select>

      <select
        style={selectStyle}
        value={filters.category}
        onChange={(e) =>
          setFilters({
            ...filters,
            category: e.target.value,
          })
        }
      >
        <option value="">📦 All Categories</option>

        {categories.map((category) => (
          <option key={category}>
            {category}
          </option>
        ))}
      </select>

      <select
        style={selectStyle}
        value={filters.region}
        onChange={(e) =>
          setFilters({
            ...filters,
            region: e.target.value,
          })
        }
      >
        <option value="">🌍 All Regions</option>

        {regions.map((region) => (
          <option key={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FilterBar;