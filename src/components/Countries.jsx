import React from 'react'
import CountryCard from './CountryCard'

const Countries = ({ countries }) => {


  return (
    <div>
      {
        countries.map((country, id) => <CountryCard country={country} id={id} />) 
      }
    </div>
  )
}

export default Countries