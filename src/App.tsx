
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Offer from "./comps/pages/offer";
import Home from "./comps/pages/home";
import Header1 from "./comps/sections/header1";
import { useEffect, useState } from "react";
import { fetchAxios } from "./libs/axios";
import { Toffers } from "./libs/types";


function App() {
  
  const [offers, setOffers] = useState<Toffers>()
  
  const fetchOffers = async () => {
    const url = import.meta.env.VITE_urlOffers 
    const data = await fetchAxios(url)
    if(data){
      setOffers(data)
    }
  }
  
  useEffect(()=>{
    fetchOffers()
  }, [])  

  if(offers){
    return (
      <Router>
        <Header1/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offer" element={<Offer />} />
        </Routes>
      </Router>
    );
  } else {
    return <p>Loading...</p>
  }

}

export default App;