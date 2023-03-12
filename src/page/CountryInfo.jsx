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
    // console.log(countries)
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
    <div className='flex flex-col gap-9 mx-3 h-screen'>
      <Link to="/" className='shadow-xl px-8 py-2 rounded-md bg-bgLight dark:bg-bgDark w-fit text-center'>
        <FontAwesomeIcon icon={faArrowLeft} />
        <span className="pl-2">Back</span>
      </Link>
      
        <div className='flex flex-col gap-2 tablet:flex-row tablet:gap-4'>
          <div className=' tablet:w-[50%]'>
            <img className=" object-cover" src={country[0].flags.svg} alt="" />
          </div>

          <div className="flex flex-col gap-3">
            
            <div className="tablet:flex justify-center items-center gap-2 ">
              <div className='mt-5'>
                <div>
                  <h1 className="font-bold text-3xl my-4">{country[0].name.common}</h1>
                </div>

                {country[0]?.name?.nativeName?.nld?.common.length ? (
                    <div><span className="font-semibold">Native Name: </span><span> {country[0]?.name?.nativeName?.nld?.common}</span></div>        
                ): null}
                <div><span className="font-semibold">Population: </span><span>{country[0]?.population.toLocaleString()}</span></div>
                <div><span className="font-semibold">Region:</span> <span>{country[0].region}</span></div>
                <div><span className="font-semibold">Sub Region: </span><span> {country[0].subregion}</span></div>
                <div><span className="font-semibold">Capital: </span><span>{country[0].capital}</span></div>
              </div>

              <div>
                <div><span className="font-semibold">Top Level Domain: </span><span>{country[0].topLevelDomain}</span></div>
                <div><span className="font-semibold">Currencies: </span><span>{country[0]?.currencies[Object.keys(country[0]?.currencies)[0]].name}</span></div>
                <div>
                  <span className="font-semibold">Languages: </span> {Object.values(country[0]?.languages).map((language, index) => (
                      <span key={index} className="">{language}, </span>
                    ))}
                </div>
              </div>
            </div>
            

                {
                  country[0]?.borders.length ? 
                    <div className="">
                      <div className="font-semibold">Border Countries: </div>
                      <div className="flex flex-wrap gap-2">{
                         country[0].borders?.map((border, index) => (
                          <span className="px-5 shadow-xl bg-bgLight py-2 rounded-md dark:bg-bgDark" key={index}>{border} </span>
                            ))}
                      </div>
                    </div>
                  : null
                
                }
          </div>
        </div>

    </div>
  )
}

export default CountryInfo;