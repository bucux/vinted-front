
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Offer from "./comps/pages/offer";
import Home from "./comps/pages/home";
import Header1 from "./comps/sections/header1";
import Login from "./comps/pages/login";
import Signup from "./comps/pages/signup";
import { useStoreBool } from "./stores/storeBool";
import Cookie from "./comps/sections/cookie";
import Publish from "./comps/pages/publish";

function App() {
  
  const isLoginOpened = useStoreBool(state=>state.isLoginOpened)
  const isSignupOpened = useStoreBool(state=>state.isSignupOpened)

  return (
    <Router>
      <Header1/>
      <Cookie/> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/publish" element={<Publish />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {isLoginOpened ? <Login/> : null}
      {isSignupOpened ? <Signup/> : null}
    </Router>
  )
}

export default App;