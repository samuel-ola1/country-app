import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react';
import { getCountryDetail } from '../utilities/utilities';

const CountryInfo = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const fetchCountryData = async (name) => {
      setCountry(await getCountryDetail(name));
    }

    fetchCountryData(name);
  }, [name]);

  if(!country.length) return (
    <div className='text-2xl font-semibold h-screen'>loading....</div>
  )
  
  return (
    <div className='flex flex-col gap-16 md:flex-col px-4 md:px-0 md:h-[72.6vh] lg-[73.3vh]'>
      <Link to="/" className='shadow-xl px-8 py-2 rounded-md bg-bgLight dark:bg-darkTextInput w-fit'>
        <FontAwesomeIcon icon={faArrowLeft} />
        <span>Back</span>
      </Link>
      <div>
        <div className='flex flex-row gap-2'>
          <div>
            <img src={country[0].flags.svg} alt="" />
          </div>
          <div>
            <div>
              <h1>{country.name}</h1>

              <h3>Native Name: {country.nativeName}</h3>
              <h3>Population: {country[0]?.population}</h3>
              <h3>Region: {country.region}</h3>
              <h3>Sub Region: {country.subregion}</h3>
              <h3>Capital: {country.capital}</h3>
            </div>

            <div>
              <h3>Top Level Domain: {country.topLevelDomain}</h3>
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