import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
function App() {
  const [userData, setUserData] = useState([]);
  const [search, setSearch] = useState([]);

  const nameSearchHandler = async (event) => {
    setSearch([]);
    await fetch("/requestData", {
      method: "POST",
      body: JSON.stringify(event.target.value),
    })
      .then((res) => res.json())
      .then((data) => {
        for (const key in data) {
          setSearch((prevState) => [...prevState, data[key]]);
        }
      });
  };
  
  useEffect(() => {
    setUserData([]);
    fetch("/loadusers")
<<<<<<< HEAD
      .then((response) => response.json())
      .then((data) => {
        for (const key in data) {
          setUserData((prevState) => [...prevState, data[key]]); //add data remaining
        }
      });
  }, []);
=======
    .then((response) => response.json())
    .then((data) => {
      for (const key in data) {
        setUserData((prevState) => [...prevState ,data[key]]); //add data remaining
      }
    });
  },[])
>>>>>>> d100e9caf22d19087ee2a47bb76395b0282e1781

  return (
    <div className="App">
      <p>
        <b>
          <u>Available Users</u>
        </b>
      </p>
      {userData.map((obj) => (
        <p>{obj.FirstName}</p>
      ))}
      <form>
        <input
          type="text"
          placeholder="Enter Name..."
          onChange={nameSearchHandler}
        ></input>
      </form>
      <div>
        {search.map((obj) => (
          <p>{obj.FirstName}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
