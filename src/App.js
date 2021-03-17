import React from 'react';
import Home from './Home';
import Property from './Property';
import Header from './Header';
import PropertyListing from './PropertyListing';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <div>
        <Router>
            <div>
            <Header />
            </div>
                <Switch>

                <Route path="/property-listing">
            <PropertyListing />
                </Route>
                <Route path="/property">
            <Property />
                </Route>

                <Route path="/">
            <Home />
                </Route>



                </Switch>

            <div>
                { /* footer */}
            </div>
        
        </Router>

        </div>
    )
}

export default App
