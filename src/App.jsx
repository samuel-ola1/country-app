import Home from "./page/Home";
import CountryInfo from "./page/CountryInfo";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  
  useEffect(() => {
    if(theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark")
    }
  } , [theme])

  return (
    <div className="bg-bgLight dark:bg-bgDark">
      <Header theme={theme} setTheme={setTheme}/>
      <main className="mx-5 py-10 text-lightText dark:text-darkText">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:name" element={<CountryInfo/>} />
        </Routes>
      </main>
    </div>
      
  )
}

export default App
