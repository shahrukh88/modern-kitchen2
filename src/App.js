
// importing components from react-router-dom package
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  } from "react-router-dom";
  import React from 'react';

  // import Home component
  import Home from "./components/mainpage/MainPage";
  // import About component
import Platinum from "./components/platinum/Platinum";

  // import ContactUs component
  
  function App() {
  return (
    <>
     <Router>
      <Switch>
      <Route exact path="/" component={Home} />
        
      <Route path="/platinum" component={Platinum} />
        
      <Redirect to="/" />
      </Switch>
    </Router>
    </>
  );
  }
  
  export default App;
  