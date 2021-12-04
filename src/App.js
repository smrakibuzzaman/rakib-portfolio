import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import ProjectDetails from './components/ProjectDetails/ProjectDetails';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      
     <Router>

<Navigation/>

<Switch>

<Route exact path="/">
<Home/>
</Route>

<Route path="/home">
<Home/>
</Route>

<Route path="/project/:projectId">
<ProjectDetails/>
</Route>

<Route path="*">
<NotFound/>
</Route>

</Switch>

<Footer/>
     </Router>
    </div>
  );
}

export default App;
