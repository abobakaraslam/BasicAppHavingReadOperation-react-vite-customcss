// File: App.jsx located in src folder
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [successValue, setsuccessValue] = useState("");
  const [dataArray, setdataArray] = useState([]);

const getDataFromApi = async () =>{

  let myEndpoint = "http://localhost:5000/user/all-user/";
  let myData = await fetch(myEndpoint);
  //console.log("received Data: ", myData);
  let parsedData = await myData.json(); /* Must wait for myData.json */
  console.log("parsed received Data: ", parsedData);

  let successData = parsedData.success;
  console.log("successData: ", successData);
  setsuccessValue(successData);

  let getDataFetch = parsedData.getData;
  console.log("getDataFetch: ", getDataFetch);
  setdataArray(getDataFetch);

}

  useEffect(() => {
    getDataFromApi();
    
  }, []);

  return (
    <div>
      <h1 style={{textAlign: "center"}}>Basic application<br />for<br />Fetching API</h1>
      <p><b>Success State: </b>{successValue}</p>
      <h3>Data from Database</h3>
      {dataArray.map((element, index)=>{
        return (
            <div key={index}>
              <p><u> Row {index} in the Database</u></p>
              <p><b>Email: </b> {element.email} <br/></p>
              <p style={{marginBottom: "50px"}}><b>Name: </b> {element.fname}</p>
            </div>
          );
      })}
    </div>
  );
}
 
export default App;