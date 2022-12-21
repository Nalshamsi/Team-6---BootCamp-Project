import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import LayoutRoute from './LayoutRoute';
import GuestLayoutRoute from './GuestLayoutRoute';
import PrivateLayoutRoute from './PrivateLayoutRoute';
import LoginS from './LoginS'
import RegisterS from './RegisterS';
import ActivitiesScreen from './ActivitiesScreen';
import AboutS from './AboutS';
import ProfileScreen from './ProfileScreen';


function App() {


    return(
        <BrowserRouter>
            <Switch>
                <LayoutRoute path="/" exact={true} component={HomeScreen} />
                <LayoutRoute path="/about" exact={true} component={AboutS} />
                <LayoutRoute path="/activity" exact={true} component={ActivitiesScreen} />
                <GuestLayoutRoute path="/login" exact={true} component={LoginS} />
                <GuestLayoutRoute path="/register" exact={true} component={RegisterS} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;
