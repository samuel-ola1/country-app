import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


const TextSearch = ({ search, setSearch }) => {
  return (
      <form className="w-full flex gap-3 items-center rounded shadow-xl px-6 py-3 bg-bgLight dark:bg-bgDarkHeader md:w-[25vw]">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input value={search} type="text" className="w-full outline-none bg-bgLight dark:bg-bgDarkHeader darktext-[1rem]" placeholder="Search for a country"  onChange={(e) => setSearch(e.target.value)} />
      </form>
  )
}

export default TextSearch;