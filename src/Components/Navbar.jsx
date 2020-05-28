import React from 'react';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import User from './User';
import Dealer from './Dealer';
import Customer from './Customer';
import Movies from './movies';
import Login from './Login';
function navbar() {


    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to='/' className="navbar-brand">Navbar</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to='/user' class="nav-link" >Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/customer' class="nav-link">Features</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/dealer' class="nav-link" >Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/Login' class="nav-link" >Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* <Switch> */}
                <Route exact path='/' component={Movies} />
                <Route path='/user' component={User} />
                <Route path='/login' component={Login} />


                <Route path='/customer' component={Customer} />
                <Route path='/dealer' component={Dealer} />
            {/* </Switch> */}
        </Router>
    )





}

export default navbar;