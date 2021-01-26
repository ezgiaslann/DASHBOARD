import React from "react";
import { Router, Route, Switch, Link } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import Navbar from "../components/Navbar";
import "./home.jsx";
import Contact from "../components/contact";
import './about.jsx';
import Card from "../components/card";


const App = () => {
  return (
    <Router history={createHistory()}>
      <div className="App">
        <Navbar />
        {/*Switch yapısında yukarıdan aşagıya kadar Route tarayıp sadece tıklanan pathde ki alana gider */}
        <Switch>
          
          <Route path="/card" exact component={Card} />
          <Route path="/contact" exact component={Contact} />
          
          </Switch>
     </div>
      
    </Router>
  );
};
export default App;
