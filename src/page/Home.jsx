import React from 'react';

import Menu from "../components/Menu";
import { useState } from 'react';
import Countries from '../components/Countries';

const Home = () => {
  const [countries, setCountries] = useState([]);


  return (
    <div>
      <Menu setCountries={setCountries} />
      <Countries countries={countries} />
    </div>
  )
}

export default Home;