import { useState, useEffect } from "react";
import Bottom from "./containers/Bottom";
import Top from "./containers/Top";
import Search from "./components/Search";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("London");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=2a5fc8700ac4999876b8a269b7b773b8`;

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        // throws an Error object with the status text of the response as the error message
        // response.statusText is an inbuilt property of the Response object
        // if error is thrown, jumps to nearest catch block
        throw new Error(response.statusText);
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      alert(`Error fetching data: ${error.message}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const searchLocation = async (event) => {
    if (event.key === "Enter") {
      fetchData();
    }
  };

  return (
    <div className="App">
      <Search
        location={location}
        setLocation={setLocation}
        searchLocation={searchLocation}
      />
      <div className="main-container">
        <Top data={data} />
        <Bottom data={data} />
      </div>
    </div>
  );
}

export default App;
