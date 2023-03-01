import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CountryInfo = () => {
  const [country, setCountry] = useState("")
  const { name } = useParams();

  useEffect(() => {
    const fetchCountryData = async () => {
      let countryData = "";


      // if(region === "all") {
      //   const response = await fetch("http://localhost:3500/countries")
      //   countryData = await response.json();
      // } else {
      //   const response = await fetch(`http://localhost:3500/countries/${region}`)
      //   countryData = await response.json();
      // }

      // setCountries(countryData);

      const response = await fetch(`http://localhost:3500/countries/${name}`)
      countryData = await response.json();
      setCountry(countryData);
    }

    fetchCountryData();
  }
  , [name]);



  return (
    <div>
      <Link><span><FontAwesomeIcon icon={faArrowLeft} /></span>Back</Link>
      <div>
        {/* <img src={country.flags.svg} /> */}
        {console.log(country)}
      </div>

    </div>
  )
}

export default CountryInfo;