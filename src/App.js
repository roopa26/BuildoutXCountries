import logo from './logo.svg';
import './App.css';
import CountryCard from './components/Card/CountryCard';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [countryData, setCountryData] = useState([]);

  const endpoint = "https://restcountries.com/v3.1/all";

  useEffect(()=>{
    const fetchDataAndLog = async () => {
      try {
          const res = await fetchData();
          setCountryData(res);
      } catch (error) {
          console.error(error);
      }
  };

  fetchDataAndLog();
  },[]);

  const fetchData =async ()=>{
    try{
      const response = await fetch(endpoint);
      return await response.json();
    }
    catch(ex){
      console.log(ex);
    }
  }

  return (
    <div className='wrap'>
      {countryData.map((item)=>(
         <CountryCard id={item.name.common} countryFlag={item.flags.png} altName={item.flags.alt} countryName={item.name.official}/>   
      ))}
    </div>
  );
}

export default App;
