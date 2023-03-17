const FeelsLike = ({ data }) => {
  const temp = data.main ? (data.main.feels_like - 273.15).toFixed(1) : "";
  return (
    <div className="feelslike">
      <p className="bold">{temp}°C</p>
      <p>Feels Like</p>
    </div>
  );
};

export default FeelsLike;
