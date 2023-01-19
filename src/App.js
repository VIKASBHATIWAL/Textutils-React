import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from "./components/Alert"
import About from "./components/About"
import React, { useState } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null)

const showAlert = (message, type)=>{

  setAlert({
    msg: message,
    type:type
  })

  setTimeout(() => {
    setAlert(null)
  }, 3000);
}

  function toggleMode() {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "grey"
      showAlert("Dark mode has been enabled", "success")
      document.title = "Texutils- Dark Mode"

    } else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled", "success")
      document.title = "Texutils- Light Mode"

    }
  }
  return (

    <>
<Router>
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
      <Alert
        alert={alert}
      />
      <div className="container">
      <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Enter text here to analyse" mode={mode} />

          </Route>
        </Switch>
      </div>
</Router>
    </>
  );
}

export default App;
