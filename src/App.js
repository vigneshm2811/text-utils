// import logo from './logo.svg';firstrt './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar'
import FormState from './components/FormState'
import AboutToggle from './components/AboutToggle'
import AlertMsg from './components/AlertMsg';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";




function App() {
  const [themeMode, setthemeMode] = useState()

  let darkColor = {
    color: 'white',
    backgroundColor: '#101113',
    boxShadow: '0px 0px 10px 0 rgba(241, 113, 8, 0.856)'
    // minHeight: '100vh'
  }
  const [darkSwitch, setDarkswitch] = useState()
  const [alerts, setAlerts] = useState(null)
  const showAlert = (message, types) => {
    setAlerts({
      msg: message,
      type: types,
    })
    setTimeout(() => {
      setAlerts()
    }, 1500);
  }

  const toggleBtn = (event) => {
    if (event.target.checked) {
      document.body.style.backgroundColor = "#101113"
      setthemeMode("darkMode")
      setDarkswitch(darkColor)
      showAlert("Dark Mode Enabled", "success")
    }
    else {
      document.body.style.backgroundColor = "white"
      setthemeMode("lightMode")
      setDarkswitch()
      showAlert("Light Mode Enabled", "success")

    }
  }

  return (
    <Router>

    <div className={`${themeMode}`}>
      <Navbar title="monsters. " home="Home" mode={themeMode} toggle={toggleBtn} />
      <AlertMsg alert={alerts} />


      <div className="sample">
{/* react Router dom version 6.21.3 */}
        <Routes>
          <Route exact path="/" element={<FormState mode={darkSwitch} showAlert={showAlert} />} />
          <Route exact path="/about" element={<AboutToggle mode={darkSwitch} />} />
          <Route exact path="/contact"/>
        </Routes>

        {/* <AboutToggle mode={darkSwitch}/> */}
      </div>
    </div>
    </Router>
  )
}

export default App;
