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

export default function ApplyS() {

  // The states are: 
    // (1) null, (2) "client error", (3) "backend error", (4) "loading", (5) "success"

    var [formState, setFormState] = useState(null);
    var [errorsState, setErrorsState] = useState([]);


    // 1. Declare variables (not defined)
    var nameField;
    var emailField;
    var phoneField;

     
    // Create a JS object like an HTML form element 
    var formData = new FormData();

    function apply() {


        // 2. Validate the fields
        var errors = [];

        if( nameField.value.length === 0 ) {
            errors.push('Please enter your first name');
        }


        if( emailField.value.length === 0 ) {
            errors.push('Please enter your email');
        }

        if( phoneField.value.length === 0 ) {
            errors.push('Please enter your phone');
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
            formData.append('phone', phoneField.value);

            fetch(
                `${process.env.REACT_APP_BACKEND_ENDPOINT}/activities/apply`,
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
                        console.log('backend response /activities/apply', jsonResponse)
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
                    console.log('backendError at /activities/apply', backendError)
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
            Activity Registration 
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
                  name="phone"
                  label="phone"
                  type="phone"
                  id="phone"
                  autoComplete="new-phone"
                  inputRef={ 
                    function( thisElement ){
                        phoneField = thisElement;
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
              onClick={apply}
            > 
              Apply
            </Button>
            }
            {
                formState === "loading" &&
                <CircularProgress />
            }
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
                You have registered successfully!
            </Alert>
        }
    </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}