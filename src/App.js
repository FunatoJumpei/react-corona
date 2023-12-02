import TopPage from './pages/TopPage';
import './App.css';
import countriesJson from "./countries.json";
import {useState} from "react";

function App() {

  const [country,setCountry] = useState("");
  const [countryData,setCountryData] = useState({
    date:"",
    newConfirmed:"",
    totalConfirmed:"",
    newRecovered:"",
    totalRecovered:"",
  });

  const getCountryData = () => {
      fetch(`https://monotein-books.vercel.app/api/corona-tracker/country/${country}`)
      .then(res=>res.json())
      .then(data=>console.log(data[length-1]))
  }

  return (
    <div>  {/*App.cssとの連携は削除*/}
      <TopPage countriesJson={countriesJson} setCountry={setCountry} getCountryData={getCountryData}/>
    </div>
  );
}

export default App;
