import React from 'react'
import CountryCard from './CountryCard'

const Countries = ({ countries }) => {


  return (
    <div className="grid grid-cols-4 gap-5">
      {
        countries.map((country, id) => <CountryCard country={country} key={id} />)
      }
    </div>
  )
}

export default Countries