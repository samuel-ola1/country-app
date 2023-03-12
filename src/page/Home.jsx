import React from 'react';

import TextSearch from "../components/TextSearch";
import { useState, useEffect } from 'react';
import Countries from '../components/Countries';
import useDebounce from '../utilities/useDebounce';
import DropDown from '../components/DropDown';

import { fetchAllCountries, fetchByRegion, fetchBySearchEntry } from '../utilities/utilities';

const Home = () => {
  const [text, setText] = useState("Filter by Region");
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");


  const searched = useDebounce(search);

  useEffect(() => {
    const getCountries = async() => {
      setCountries(await fetchAllCountries());
    }
    getCountries();
  },[])

  useEffect(() => {
    const fetchRegion = async () => {
      setCountries(await fetchByRegion(text));
    }
    fetchRegion();
  }, [text])

  useEffect(() => {
    const searchCountries = async () => {
      setCountries(await fetchBySearchEntry(searched))
    }
    searchCountries()
  },[searched])

  return (
    <div className="flex flex-col gap-12 px-5">
      <div className="flex flex-col gap-12 md:justify-between md:flex-row md:items-center">
       <TextSearch search={search}  setSearch={setSearch} />
       <DropDown text={text} setText={setText} />
      </div>
      
      <Countries countries={countries} />
    </div>
  )
}

export default Home;