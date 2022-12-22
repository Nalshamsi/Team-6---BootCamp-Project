
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios'
import { Link } from 'react-router-dom';


const theme = createTheme();

export default function UpdateUser () {

    const [user ,setUser]=React.useState([]);
    const [name,setName]=React.useState("jamelah");
    const [email,setEmail]=React.useState("jamelah@gmail.com");
    const [phone,setPhone]=React.useState("123123");
    const [dob,setDob]=React.useState("22-10-2020");
    const [password,setPassword]=React.useState(null);
  
  const handleSubmit  = async(event, id,i) => {
  event.preventDefault();
  console.log(name); 
  console.log(email);
  console.log(phone);
  console.log(dob);
  console.log(password);

  try {
 const data= await axios.post(`http://localhost:3007/update${id}`,
{
    name:name,
    email:email,
    phone:phone,
    dob:dob,
    password,password
    
}
);
const copyArray=[...user]
copyArray[i]=data.data
setUser(copyArray)
console.log(copyArray);

  } catch (error) {
    console.log(error, 'catch error');
  }
  };

  return (
    
    <ThemeProvider theme={theme}>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box onSubmit={handleSubmit}
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}k
        >
          <Avatar  sx={{ m: 1, bgcolor: '#297373' }}>
       
          </Avatar>
          <Typography component="h1" variant="h5" color={'#39393A'}>
          Update your information
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField

            onChange={(event)=>setName(event.target.value)}
              margin="normal"
              fullWidth
              id="First Name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
            
            />
             <TextField
             onChange={(event)=>setEmail(event.target.value)}
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
             <TextField
             onChange={(event)=>setPhone(event.target.value)}
              margin="normal"
              fullWidth
              id="phone"
              label="phone"
              name="phone"
              autoComplete="phone"
              autoFocus
              // type={'number'}
            />
               <TextField
               onChange={(event)=>setPassword(event.target.value)}
              margin="normal"
              fullWidth
              id="password"
              label="password"
              name="password"
              autoComplete="password"
              autoFocus
            //   style={{
           
            //     border: 'solid 1px #297373',
               
            // }} 
            />
          
          
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{
               
                backgroundColor: "#297373", 
            }}
            onClick={function() {
              Link.href = "/profile"
            }}
            >
            Update
            </Button>
         
          </Box>
        </Box>
   
      </Container>
    </ThemeProvider>
    
  );
}

