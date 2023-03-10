import React from 'react';
import { Link } from 'react-router-dom';

const CountryCard = ({name, population, capital, region, imgUrl}) => {

  return (
    <Link to={`/country/${name}`} className="bg-bgLight dark:bg-darkInputText h-[20rem] w-[15rem] shadow-xl flex flex-col block justify-stretch" >
          <div className=""><img className="w-[100%]" src={imgUrl} alt="" /></div>
          <div>
            <h3>{name}</h3>
            <h4>{population}</h4>
            <h4>{region}</h4>
            <h4>{capital}</h4>
          </div>
    </Link>
  )
}

export default CountryCard