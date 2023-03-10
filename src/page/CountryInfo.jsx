import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react';
import { getCountryDetail,fetchAllCountries } from '../utilities/utilities';

const CountryInfo = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountries = async() => {
      setCountries(await fetchAllCountries());
    }
    getCountries();
    console.log(countries)
  },[])

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
        <div className='flex flex-col gap-2'>
          <div>
            <img src={country[0].flags.svg} alt="" />
          </div>
          <div>
            {console.log(country[0].borders)}
            <div>
              <h1>{country[0].name.common}</h1>

              {country[0]?.name?.nativeName?.nld?.common.length ? (
                  <h3>Native Name: {country[0]?.name?.nativeName?.nld?.common}</h3>         
              ): null}
              <h3>Population: {country[0]?.population.toLocaleString()}</h3>
              <h3>Region: {country[0].region}</h3>
              <h3>Sub Region: {country[0].subregion}</h3>
              <h3>Capital: {country[0].capital}</h3>
            </div>

            <div>
              <h3>Top Level Domain: {country.topLevelDomain}</h3>
              <h3>Currencies: {country[0]?.currencies[Object.keys(country[0]?.currencies)[0]].name}</h3>
              <h3>Languages: {Object.values(country[0]?.languages).map((language, index) => (
                <span key={index} className="">{language}</span>
              ))}</h3>
            </div>
            <div>
                {
                  country[0].borders.length ? 
                    <div>
                      <h3>Border Countries: </h3> Border Countries: {
                        country[0].borders?.map((border) => (
                      <span>{border}</span>
                      ))
                     }
                    </div>
                  : null
                
                }
            
            </div>
          </div>
        </div>

        <div>
          
        </div>
      </div>

    </div>
  )
}

export default CountryInfo;