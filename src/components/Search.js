export default function Search({ keyword, handleChange }) {
  return (
    <input
      type="text"
      className="search-input"
      placeholder="Search for a country..."
      value={keyword}
      onChange={handleChange}
    />
  );
}
