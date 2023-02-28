import React from 'react'

const CountryCard = ({country, id}) => {

  return (
    <div id={id}>{country.name} {id}</div>
  )
}

export default CountryCard