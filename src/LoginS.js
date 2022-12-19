import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import { useState, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from './UserContext.js';

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



export default function LoginS() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

    // The states are: 
    // (1) null, (2) "client error", (3) "backend error", (4) "loading", (5) "success"
    var [formState, setFormState] = useState(null);
    var [errorsState, setErrorsState] = useState([]);
    var { loggedIn, updateUser } = useContext(UserContext);

     // 1. Declare variables (not defined)
     var emailField;
     var passwordField;

    // Create a JS object like an HTML form element 
    var formData = new FormData();

    function login() {


      // 2. Validate the fields
      var errors = [];

      if(emailField.value.length === 0) {
          errors.push('Please enter your email');
      }

      if(passwordField.value.length === 0) {
          errors.push('Please enter your password');
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
          formData.append('email', emailField.value);
          formData.append('password', passwordField.value);

          fetch(
              `${process.env.REACT_APP_BACKEND_ENDPOINT} /users/login`,
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
                      console.log('backend response /users/login', jsonResponse)
                      setFormState("success");

                      // Update the user context
                      updateUser(
                          {
                              "email": jsonResponse.message.email,
                              "name": jsonResponse.message.name,
                              "avatar": jsonResponse.message.avatar,
                              "jsonwebtoken": jsonResponse.message.jsonwebtoken,
                              "loggedIn": true
                          }
                      )
                  }
                  else {
                      setFormState("backend error");
                  }
              }
          )
          .catch(
              // 8. If backends sends error, go to "backend error"
              function(backendError) {
                  console.log('backendError at /users/login', backendError)
                  setFormState("backend error");
              }
          )
      }
  }

  function addListItem(str) {
      return <li>{str}</li>
  }

  if(formState === "success") {
      return (
          <Redirect to="/" />
      )
  }
  else {
    return (
      <ThemeProvider theme={theme}>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
        <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: 'url(https://source.unsplash.com/random)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required={true}
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  inputRef={
                    function( thisElement ) {
                      emailField = thisElement;
                    }
                  }
                />
                <TextField
                  margin="normal"
                  required={true}
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  inputRef={
                    function( thisElement ) {
                      passwordField = thisElement;
                    }
                  }
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                {
                  formState !== "loading" &&
                
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    style={{ backgroundColor: "#297373"}}
                    onClick={login}
                  >
                    Sign In
                  </Button>
                } 
                {
                  formState === "loading" &&
                  <CircularProgress />
                }
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2" style={{ color: "#297373"}}>
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/register" variant="body2" style={{ color: "#297373"}}
                    >
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
                <Copyright sx={{ mt: 5 }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
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
                    You have logged in successfully!
                </Alert>
            }
        </Box>
      </ThemeProvider>
    
    );
  }
}