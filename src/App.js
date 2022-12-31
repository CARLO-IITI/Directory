import "./App.css";
import { useState } from "react";
import {data} from "./data";
import Table from 'react-bootstrap/Table';import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [show, setshow] = useState(false);
  const [name, setname] = useState("");
  const [names, setnames] = useState([]);

  const trigger = () => {
    setshow(true)
    const b = data.filter((item) => item.name.toLowerCase().includes(name.toLowerCase()))
    console.log(b)
    setnames(b);
  };

  const TableDiv = () => {
    return (
      <Table striped bordered hover style={{margin: 60, width: "95vw"}}>
        <thead><td>S. no.</td><td>Name</td><td>Telephone Number</td><td>Address</td></thead>
        <tbody>{names.map((name,idx) => {
          return (
            <tr>
            <td>{idx+1}</td>
              <td>{name.name}</td>
              <td>{name.phone}</td>
              <td>{name.address}</td>
            </tr>
          );
        })}</tbody>
      </Table>
    );
  };

  return (
    <div className="App">
      <div className="nav">
        <button>Telephone Number Search</button>
        <button>Company Search</button>
        <button onClick={()=>{setshow(false)}}>Name Search</button>
        <button>Change Number Search</button>
      </div>
      {!show ? (
        <div className="main">
          <h1>Search by Name</h1>
          <br />
          <div className="a">
            <p>Name</p>
            <input type="text" onChange={(e) => {setname(e.target.value)}} />
          </div>
          <button type="submit" onClick={trigger}>
            Search
          </button>
        </div>
      ) : (
        <div className="main">
        <TableDiv /></div>
      )}
    </div>
  );
}

export default App;
