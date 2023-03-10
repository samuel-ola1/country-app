import React from 'react';
import CountryCard from './CountryCard';
import numeral from 'numeral';

const Countries = ({ countries }) => {
  

  return (
    <div className="flex flex-col justify-center items-center gap-5 md:grid md:grid-cols-2 md:mx-auto md:justify-items-center md:align-items-center md:gap-x-[2rem] md:gap-y-[3rem] tablet:grid-cols-3 lg:grid-cols-4">
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
// md:grid mx-0 gap-10 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-5

export default Countries