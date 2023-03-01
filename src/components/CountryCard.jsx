import React from 'react';
import { Link } from 'react-router-dom';

const CountryCard = ({country, id}) => {

  return (
    <Link to={`/country/${country.name}`}>
        <div id={id} className="flex flex-col">
          <div><img src={country.flags.svg} alt="" /></div>
          <h3>{country.name}</h3>
          <h4>{country.population}</h4>
          <h4>{country.region}</h4>
          <h4>{country.capital}</h4>
        </div>
    </Link>
    
  )
}

export default CountryCard