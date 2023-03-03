import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CountryInfo = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const fetchCountryData = async () => {
      let countryData;

      const response = await fetch(`http://localhost:3500/countries`)
      countryData = await response.json();
      countryData = countryData.filter((country) => country.name === name);
      console.log(countryData[0]);
      setCountry(countryData[0]);
    }

    fetchCountryData();
  }
  , [name]);

  if(!country) return (
    <h1>Loading...</h1>
  )


  return (
    <div>
      <Link><span><FontAwesomeIcon icon={faArrowLeft} /></span>Back</Link>
      <div>
        <div className='flex flex-row gap-2'>
          <div>
            {console.log(country.name)}
            {/* <img src={country.flags.svg} alt="" /> */}
          </div>
          <div>
            <div>
              <h1>{country.name}</h1>

              <h3>Native Name: {country.nativeName}</h3>
              <h3>Population: {country.population}</h3>
              <h3>Region: {country.region}</h3>
              <h3>Sub Region: {country.subregion}</h3>
              <h3>Capital: {country.capital}</h3>
            </div>

            <div>
              {/* <h3>Top Level Domain: {country.topLevelDomain}</h3> */}
              {/* <h3>Currencies: {country.currencies[0].name}</h3> */}
              <h3>Languages: {country.languages}</h3>
            </div>
            
          </div>
        </div>
      </div>

    </div>
  )
}

export default CountryInfo;