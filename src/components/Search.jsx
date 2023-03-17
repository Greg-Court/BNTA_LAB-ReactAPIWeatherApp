const Search = ({ location, setLocation, searchLocation }) => {
  return (
    <div className="search">
      <input
        type="text"
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        placeholder="Enter Location"
        onKeyDown={searchLocation}
      />
    </div>
  );
};

export default Search;
