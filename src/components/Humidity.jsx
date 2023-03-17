const Humidity = ({ data }) => {
  const humidity = data.main ? data.main.humidity : "";
  return (
    <div className="humidity">
      <p className="bold">{humidity}%</p>
      <p>Humidity</p>
    </div>
  );
};

export default Humidity;
