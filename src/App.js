import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ClientPage from "./Components/ClientPage";
import Login from "./Components/Login";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="bodyColor">
                    <Switch>
                        <Route exact path='/' component={Login}/>
                        <Route path='/client' component={ClientPage}/>
                    </Switch>
                </div >
            </Router>
        )
    }
}

export default App;