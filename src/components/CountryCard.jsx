import React from 'react';
import { Link } from 'react-router-dom';

const CountryCard = ({name, population, capital, region, imgUrl}) => {

  return (
    <Link to={`/country/${name}`} className="bg-bgLight dark:bg-darkInputText h-[24-rem] w-[15rem] shadow-xl" >
        <div className="flex flex-col">
          <div><img src={imgUrl} alt="" /></div>
          <div>
            <h3>{name}</h3>
            <h4>{population}</h4>
            <h4>{region}</h4>
            <h4>{capital}</h4>
          </div>
        </div>
    </Link>
  )
}

export default CountryCard