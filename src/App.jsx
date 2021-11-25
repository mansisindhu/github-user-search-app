import "./App.css";
import Card from "./components/Card";
import Search from "./components/SearchBar";
import axios from "axios";
import { useState } from "react";

function App() {
  const [userData, setUserData] = useState([]);

  const searchQuery = async (text, setText) => {
    setText("");
    const {data : {items}} = await axios.get(`https://api.github.com/search/users?q=${text}`)
    console.log(items)
    const dataArr = [];
    for (let i = 0; i < Math.min(16, items.length); i++) {
      let el = items[i];
      const {data} = await axios.get(el.url);
      dataArr.push(data)
    }
    setUserData([...dataArr])
  };

  return (
    <div className="App">
      <Search searchQuery={searchQuery} />
      <div className="container">
        <div className="row row-cols-4">
          {userData.map((el) => (
            <div style={{marginTop: "30px"}} key={el.id} className="col">
              <Card data={el} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
