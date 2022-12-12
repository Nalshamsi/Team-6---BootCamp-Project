import React from 'react';
import Box from '@mui/material/Box';
import { Redirect, Route } from 'react-router-dom';
import Navbar from './Navbar';
import { UserContext } from './UserContext';
import Footer from './Footer';


function GuestLayoutRoute(props) {

    const {loggedIn} = UserContext;

    if (loggedIn === false) {
        return (
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}>
                <Navbar {...props}/>
                <Route path={props.path} exact={props.exact} component={props.component} />
                <Footer/>
            </Box>
        )
    } else {
        return (
            <Redirect to={'/'} />
        )
    }
}

export default GuestLayoutRoute;