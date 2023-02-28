import React from 'react';

import Menu from "../components/Menu";
import { useState, useEffect } from 'react';
import Countries from '../components/Countries';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState("all");

  useEffect(() => {
    const fetchCountryData = async () => {
      let countryData = [];

      if(region === "all") {
        const response = await fetch("http://localhost:3500/countries")
        countryData = await response.json();
      } else {
        const response = await fetch(`http://localhost:3500/countries/${region}`)
        countryData = await response.json();
      }

      setCountries(countryData);
    }

    fetchCountryData();
  }
  , [])

  return (
    <div>
      <Menu setCountries={setCountries} />
      <Countries countries={countries} />
    </div>
  )
}

export default Home;