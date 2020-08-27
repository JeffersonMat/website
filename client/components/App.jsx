import React from 'react'
import { HashRouter as Router} from "react-router-dom"


import NavBar from './NavBar/NavBar'
import WhoIam from './WhoIam'
import Experiences from './Experiences'
import Portfolio from './Portfolio';
import Contact from './Contact'

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
   
        
        <WhoIam />
        <Experiences />
        <Portfolio />
        <Contact/>
        
        
       
        </Router>
    </>
  )
}

export default App
