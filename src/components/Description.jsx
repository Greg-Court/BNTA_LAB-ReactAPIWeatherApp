import React from "react";

const Description = ({ data }) => {
  const weatherDescription = data.weather ? data.weather[0].main : "";

  return (
    <div className="description">
      <p>{weatherDescription}</p>
    </div>
  );
};

export default Description;
