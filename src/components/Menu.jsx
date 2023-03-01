import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


const Menu = ({ setCountries }) => {
  return (
    <div>
      <div>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input type="search" name="q" className="py-2 text-sm text-white bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search for a country" autoComplete="off" />
      </div>
      <div>
      {/* <label htmlFor="region">Filter by Region</label> */}
        <select name="region" id="region"> 
          <option>Filter by Region</option>
          <option>Africa</option>
          <option>America</option>
          <option>Asia</option>
          <option>Europe</option>
          <option>Oceania</option>
        </select>
      </div>
    </div>
  )
}

export default Menu;