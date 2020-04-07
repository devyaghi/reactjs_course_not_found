import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Route,BrowserRouter as Router,Switch} from 'react-router-dom'
import Home from "./Home";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import NotFound from "./NotFound";

const router_rule=(
    <Router>
        <div>

        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={AboutUs}/>
        <Route path="/contact" component={ContactUs}/>
        <Route  component={NotFound}/>
        </Switch>

        </div>
    </Router>

)


ReactDOM.render(

    router_rule
 ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
