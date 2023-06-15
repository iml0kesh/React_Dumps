import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';
import Colors from './components/Colors';
import Countries from './components/Countries';
import "bootstrap/dist/css/bootstrap.css";


function App() {

  let [data, setData] = useState([]);
  let [data1, setData1] = useState([]);

  const fetchData = async () => {
    try {
      let url = "https://reqres.in/api/unknown";
      const response = await axios.get(url);
      setData(response.data.data);
    } catch (error){
      console.error("Error fetching Data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData1 = async () => {
    try {
      let url1 = "https://restcountries.com/v3.1/all";
      const response1 = await axios.get(url1);
      setData1(response1.data);
    } catch (error) {
      console.error("Error fetching Data:", error);
    }
  }

  useEffect(() => {
    fetchData1();
  }, []);

  return (
    <div>
      <h1>Task 1 , Task 2</h1>
      {data.map((record, index) => {
        return (
          
          <Colors
            color={record.color}
            id={record.id}
            name={record.name}
            year={record.year}
            value={record.pantone_value}
          />
       )
      })} 
      
      <h1>Assiginement 2</h1>
      {data1.map((record1, index1) => {
        return (
          <Countries
            name={record1.name.official}
            flag={record1.flag}
          />
        )
      })}
    </div>
  );
}

export default App;
