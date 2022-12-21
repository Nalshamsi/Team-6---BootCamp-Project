import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Navbar from './Navbar.js';
// import Footer from './Footer.js';
import { UserContext } from './UserContext.js';

function PrivateLayoutRoute(props) {

    var { loggedIn } = useContext( UserContext )

    if (loggedIn) { 
        return (
            <React.Fragment>

                <Navbar/>
                <Route 
                    path={props.path} 
                    exact={props.exact} 
                    component={props.component}
                />

            </React.Fragment>
        )
    } else {
        return (
            <Redirect to="/login"/>
        )
    }
}

export default PrivateLayoutRoute;