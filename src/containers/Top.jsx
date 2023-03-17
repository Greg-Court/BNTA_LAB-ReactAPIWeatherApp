import Temperature from "../components/Temperature";
import Location from "../components/Location";
import Description from "../components/Description";

const Top = ({ data }) => {
  return (
    <div className="top">
      <Location data={data} />
      <Temperature data={data} />
      <Description data={data} />
    </div>
  );
};

export default Top;
