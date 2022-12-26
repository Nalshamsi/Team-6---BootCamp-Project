import { useEffect, useContext, useState} from "react";
import UserContext from './UserContext.js';


function ProfileScreen() {


    const [ userDetails, setUserDetails ] = useState();

    useEffect(
        function() {

            fetch(
                `${process.env.REACT_APP_BACKEND_ENDPOINT}/users/find`,
                {
                    'method': 'POST',
                    'headers': {
                        'Authorization': `Bearer ${localStorage.getItem('jsonwebtoken')}`
                    },
                    // 'body': {}
                }
            )
            // This will recieve string data and convert to json
            .then(
                function(backendReponse) {
                    return backendReponse.json()
                }
            )
            // This will receie the converted json
            .then(
                function(jsonResponse) {
                    setUserDetails(jsonResponse);
                }
            )
            // This will catch errors if any
            .catch(
                function(backendError) {
                    console.log('backendError', backendError)
                }
            )
        },

        // This array is empty because useEffect will run once only
        []
    );


    if( userDetails ) {
        return (
            <ul>
                <li>Avatar: {userDetails.avatar}</li>
                <li>Name: {userDetails.name}</li>
                <li>Lastname: {userDetails.lastName}</li>
                <li>Email: {userDetails.email}</li>
                <li>Password: </li>
            </ul>
        )
    } else {
        return(
            <p>Loading...</p>
        )
    }
}

export default ProfileScreen;