import { useState, useEffect } from "react";

const useDebounce = (value, delay=500) => {
    const [searchValue, setSearchValue] = useState(value);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSearchValue(value)
        },delay)

        return () => {
            clearTimeout(timeout)
        }
    }, [value, delay])

    return searchValue;
}
 
export default useDebounce;