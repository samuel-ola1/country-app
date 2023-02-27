import Home from "./page/Home";
import CountryInfo from "./page/CountryInfo";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";

function App() {
  

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="country/:name" element={<CountryInfo/>} />
      </Routes>
      
    </div>
      
  )
}

export default App
