const Temperature = ({ data }) => {
  const temp = data.main ? (data.main.temp - 273.15).toFixed(1) : "";
  return (
    <div className="temperature">
      <h1>{temp}</h1>
    </div>
  );
};

export default Temperature;
