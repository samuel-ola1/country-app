import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faMoon as faLightMoon } from "@fortawesome/free-regular-svg-icons";

<FontAwesomeIcon icon="fa-regular fa-moon" />
const Header = ( {theme, setTheme} ) => {
  const toggleMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };


  return (
    <header className="bg-bgLight shadow-3xl dark:shadow-2xl dark:bg-bgDarkHeader flex justify-between items-center px-2 md:px-24 py-6">
      <div><h2 className="font-extrabold text-xl md:text-2xl text-lightText dark:text-darkText">Where in the world?</h2></div>
      <div onClick={toggleMode} className="cursor-pointer">
        { theme === "dark" ? (
          <div className="flex gap-2 items-center text-darkText">
            <FontAwesomeIcon icon={faMoon} />
            <span className="font-semibold ">Dark Mode</span>
          </div>
        ) : (
          <div className="flex gap-2 items-center text-lightText">
            <FontAwesomeIcon icon={faLightMoon} />
            <span className="font-semibold ">Light Mode</span>
          </div>
        )
          
        }

      </div>
    </header>
  )
}

export default Header