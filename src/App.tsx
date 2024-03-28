
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Offer from "./comps/pages/offer";
import Home from "./comps/pages/home";
import Header1 from "./comps/sections/header1";
import Login from "./comps/sections/login";
import Signup from "./comps/sections/signup";
import { useStoreBool } from "./stores/storeBool";


function App() {
  
  const isLoginOpened = useStoreBool(state=>state.isLoginOpened)
  const isSignupOpened = useStoreBool(state=>state.isSignupOpened)

  return (
    <Router>
      <Header1/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {isLoginOpened ? <Login/> : null}
      {isSignupOpened ? <Signup/> : null}
    </Router>
  )
}

export default App;