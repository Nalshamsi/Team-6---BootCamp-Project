import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import RegistrationScreen from './RegistrationScreen';
import LayoutRoute from './LayoutRoute';
import GuestLayoutRoute from './GuestLayoutRoute';
import SignIn from './SignIn';

function App() {
    return(
        <BrowserRouter>
            <Switch>
                <LayoutRoute path="/" exact={true} component={HomeScreen} />
                <GuestLayoutRoute path="/register" exact={true} component={RegistrationScreen} />
                <GuestLayoutRoute path="/sign-in" exact={true} component={SignIn} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;
