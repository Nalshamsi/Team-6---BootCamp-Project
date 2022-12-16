import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import RegistrationScreen from './RegistrationScreen';
import LayoutRoute from './LayoutRoute';
import GuestLayoutRoute from './GuestLayoutRoute';
import AboutScreen from './ActivitiesScreen';
import { Login } from '@mui/icons-material';
import LoginS from './LoginS'
import RegisterS from './RegisterS';
import ActivitiesScreen from './ActivitiesScreen';


function App() {
    return(
        <BrowserRouter>
            <Switch>
                <LayoutRoute path="/" exact={true} component={HomeScreen} />
                <LayoutRoute path="/activity" exact={true} component={ActivitiesScreen} />
                <GuestLayoutRoute path="/login" exact={true} component={LoginS} />
                <GuestLayoutRoute path="/register" exact={true} component={RegisterS} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;
