import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import FormControl from '@mui/material/FormControl';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function RegisterS() {

  // The states are: 
    // (1) null, (2) "client error", (3) "backend error", (4) "loading", (5) "success"

    var [formState, setFormState] = useState(null);
    var [errorsState, setErrorsState] = useState([]);


    // 1. Declare variables (not defined)
    var nameField;
    var emailField;
    var passwordField;
    var termsConditionsField;

     
    // Create a JS object like an HTML form element 
    var formData = new FormData();

    function attachFile(evt) {

        console.log('file data', evt.target.files)
        // Creating an array from the files attached by user
        var files = Array.from(evt.target.files);

        files.forEach(
            function(fileAttachment, index) {
                formData.append(index, fileAttachment);
            }
        )
    }
    function register() {


        // 2. Validate the fields
        var errors = [];

        if( nameField.value.length === 0 ) {
            errors.push('Please enter your first name');
        }


        if( emailField.value.length === 0 ) {
            errors.push('Please enter your email');
        }

        if( passwordField.value.length === 0 ) {
            errors.push('Please enter your password');
        }
        
        if( termsConditionsField.checked === false ) {
            errors.push('Please read and accept the terms & conditions');
        }

        // 3. If any field is not validated, go to "client error"
        if( errors.length > 0 ) {
            setFormState("client error");
            setErrorsState( errors );
        }

        // 4. If all fields are valid
        else {
            // 5. Go to "loading"
            setFormState("loading");
            setErrorsState([]);

            // 6. Send data backend
            formData.append('name', nameField.value);
            formData.append('email', emailField.value);
            formData.append('password', passwordField.value);

            fetch(
                `${process.env.REACT_APP_BACKEND_ENDPOINT}/users/register`,
                {
                    'method': 'POST',
                    'body': formData
                }
            )
            .then(
                function(backendResponse) {
                    // Convert the HTTP string response to JSON
                    return backendResponse.json();
                }
            )
            .then(
                // 7. If backend sends success, go to "success"
                function(jsonResponse) {
                    if(jsonResponse.status === "ok") {
                        console.log('backend response /users/register', jsonResponse)
                        setFormState("success");
                    }
                    else {
                        setFormState("backend error");
                        setErrorsState([jsonResponse.message]);
                    }
                }
            )
            .catch(
                // 8. If backends sends error, go to "backend error"
                function(backendError) {
                    console.log('backendError at /users/register', backendError)
                    setFormState("backend error");
                }
            )
        }
    }

    function addListItem(str) {
        return <li>{str}</li>
    }

  return (
    <ThemeProvider theme={theme}>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="Name"
                  required={true}
                  fullWidth
                  id="Name"
                  label="Name"
                  autoFocus
                  inputRef={ 
                    function( thisElement ){
                        nameField = thisElement;
                    } 
                }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required={true}
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  inputRef={ 
                    function( thisElement ){
                        emailField = thisElement;
                    } 
                }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required={true}
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  inputRef={ 
                    function( thisElement ){
                        passwordField = thisElement;
                    } 
                }
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I agree to all Terms & Conditions."
                  required={true}
                  inputRef={ 
                    function( thisElement ){
                        termsConditionsField = thisElement;
                    } 
                  }
                />
              </Grid>
            </Grid>
            {formState != "loading" &&
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{ backgroundColor: "#297373"}}
              onClick={register}
            > 
              Sign Up
            </Button>
            }
            {
                formState === "loading" &&
                <CircularProgress />
            }
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2" style={{ color: "#297373"}}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box mt={2}>

        { 
            formState === "client error" &&
            <Alert severity="error">
                <ul>
                {
                    errorsState.map(addListItem)
                }
                </ul>
            </Alert>
        }

        {
            formState === "success" &&
            <Alert severity="success">
                You have signed up successfully!
            </Alert>
        }
    </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}