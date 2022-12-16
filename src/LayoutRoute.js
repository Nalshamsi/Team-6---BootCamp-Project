import React from 'react';
import Box from '@mui/material/Box';
import { Route } from 'react-router-dom';
import Navbar from './Navbar';


function LayoutRoute(props) {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}>
            <Navbar {...props}/>
            <Route path={props.path} exact={props.exact} component={props.component} />
        </Box>
    )
}

export default LayoutRoute;