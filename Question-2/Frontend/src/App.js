import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
function App() {

  const [studentData, setStudentData] = useState([]);
  const [isFilterData, setIsFilterData] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  var count = 0;
  
  const filterCSEDataHandler = () => {
    setFilteredData([]);
    const result = studentData.filter((student) => student.branch === "cse");
    setFilteredData((prevState) => [...prevState, ...result]);
    setIsFilterData(true);
  };
  const filterMECHDataHandler = () => {
    setFilteredData([]);
    const result = studentData.filter((student) => student.branch === "mech");
    setFilteredData((prevState) => [...prevState, ...result]);
    setIsFilterData(true);
  };
  const filterCIVILDataHandler = () => {
    setFilteredData([]);
    const result = studentData.filter((student) => student.branch === "civil");
    setFilteredData((prevState) => [...prevState, ...result]);
    setIsFilterData(true);
  };

  useEffect(() => {
    setStudentData([])
    fetch("/getstudents")
      .then((response) => response.json())
      .then((data) => {
        for (const key in data) {
          setStudentData((prevState) => [...prevState, data[key]]);
        }
      });
  }, []);
  useEffect(() => {}, [isFilterData]);
  return (
    <div className="App">
      <button style={{ marginTop: "20px" }} onClick={filterCSEDataHandler}>
        Filter the cse data
      </button>
      <button style={{ marginTop: "20px" }} onClick={filterMECHDataHandler}>
        Filter the mechanical data
      </button>
      <button style={{ marginTop: "20px" }} onClick={filterCIVILDataHandler}>
        Filter the civil data
      </button>
      <p>
        <b>
          <u>Student Details</u>
        </b>
      </p>
      {!isFilterData ? <p>All Students List</p> : ""}
      {isFilterData ? <p>Filtered List</p> : ""}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            {
            !isFilterData
              ? studentData.map((obj) => { count ++; return <th>{count}</th>})
              : filteredData.map((stu) => { count ++;  return<th>{count}</th>})}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">FirstName</th>
            {!isFilterData
              ? studentData.map((obj) => <td>{obj.firstName}</td>)
              : filteredData.map((stu) => <td>{stu.firstName}</td>)}
          </tr>
          <tr>
            <th scope="row">lastName</th>
            {!isFilterData
              ? studentData.map((obj) => <td>{obj.lastName}</td>)
              : filteredData.map((stu) => <td>{stu.lastName}</td>)}
          </tr>
          <tr>
            <th scope="row">Branch</th>
            {!isFilterData
              ? studentData.map((obj) => <td>{obj.branch}</td>)
              : filteredData.map((stu) => <td>{stu.branch}</td>)}
          </tr>
          <tr>
            <th scope="row">Roll No.</th>
            {!isFilterData
              ? studentData.map((obj) => <td>{obj.roll_no}</td>)
              : filteredData.map((stu) => <td>{stu.roll_no}</td>)}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
