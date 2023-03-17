const Wind = ({ data }) => {
  const wind = data.main ? data.wind.speed.toFixed(1) : "";
  return (
    <div className="wind">
      <p className="bold">{wind}mph</p>
      <p>Wind Speed</p>
    </div>
  );
};

export default Wind;
