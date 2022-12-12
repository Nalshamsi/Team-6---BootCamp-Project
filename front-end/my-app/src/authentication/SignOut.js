
import * as React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function SignOut() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
     
    });
  };

  return (
    
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
       
      
         
          
            
          
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
             
              sx={{ mt: 25, mb: 2 }}
              style={{
               
                backgroundColor: "#297373",
               
            }}
            >
              Sign Out
            </Button>
            <Grid container>
              <Grid item xs>
                
              </Grid>
              
            </Grid>
          
        
       
      </Container>
    </ThemeProvider>
    
  );
}


