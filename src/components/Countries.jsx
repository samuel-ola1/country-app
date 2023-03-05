import React from 'react';
import CountryCard from './CountryCard';
import numeral from 'numeral';

const Countries = ({ countries }) => {
  

  return (
    <div className="grid mx-0 gap-10 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-5">
      {
        countries.map((country, id) => (
          <CountryCard 
            key={id} 
            name={country.name.common}
            population={numeral(country.population).format("0,000")}
            region={country.region}
            capital={country.capital}
            imgUrl={country.flags.svg}
          />
        ))
      }
    </div>
  )
}

export default Countries