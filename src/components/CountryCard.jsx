import React from 'react';
import { Link } from 'react-router-dom';

const CountryCard = ({name, population, capital, region, imgUrl}) => {

  return (
    <Link to={`/country/${name}`} className="bg-bgLight dark:bg-darkInputText h-[19rem] w-[16rem] shadow-xl flex flex-col dark:bg-bgDarkHeader" >
          <div className="h-[50%]"><img className="w-[100%] h-[100%] object-cover" src={imgUrl} alt="country flag" /></div>
          <div className="px-3">
            <div><h3 className="font-bold py-3 leading-4">{name}</h3></div>
            <div><span className="font-semibold">Population: </span><span>{population}</span></div>
            <div><span className="font-semibold">Region: </span><span>{region}</span></div>
            <div><span className="font-semibold">Capital: </span><span>{capital}</span></div>
          </div>
    </Link>
  )
}

export default CountryCard