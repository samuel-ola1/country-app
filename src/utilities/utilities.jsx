import axios from "axios";

export const fetchAllCountries = async () =>  {
    const response = await axios('https://restcountries.com/v3.1/all');
    const data = await response.data
    return data
 }

export const fetchByRegion = async (countryName) => {
    const response = await axios(`https://restcountries.com/v3.1/subregion/${countryName}`)
    const data = await response.data
    return data
}

export const fetchBySearchEntry = async (name) => {
    const response = await axios(`https://restcountries.com/v3.1/name/${name}`)
    const data = await response.data
    return data
}

export const getCountryDetail = async (name) => {
    const response = await axios(`https://restcountries.com/v3.1/name/${name}?fullText=true`);
    const data = await response.data
    return data;
}