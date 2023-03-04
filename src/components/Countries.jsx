import React from 'react';
import CountryCard from './CountryCard';
import numeral from 'numeral';

const Countries = ({ countries }) => {
  

  return (
    <div className="grid gap-10 mx-auto md:mx-0 md:grid-cols-2 lg:grid-cols-4">
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