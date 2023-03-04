import axios from "axios";

export const fetchAllCountries = async () =>  {
    const response = await axios('https://restcountries.com/v3.1/all');
    const data = await response.data
    return data
}