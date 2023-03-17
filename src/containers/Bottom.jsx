import FeelsLike from "../components/FeelsLike";
import Humidity from "../components/Humidity";
import Wind from "../components/Wind";

const Bottom = ({ data }) => {
  return (
    <div className="bottom">
      <FeelsLike data={data}/>
      <Humidity data={data}/>
      <Wind data={data}/>
    </div>
  );
};

export default Bottom;
