import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const theme = createTheme();

export default function AddActivity() {
  const [user, setUser] = React.useState([]);
  const [title, setTitle] = React.useState("jamelah");
  const [description, setDescription] = React.useState("farhan");
  const [city, setCity] = React.useState("jamelah@gmail.com");
  const [duration, setDuration] = React.useState("123123");
  const [date, setDate] = React.useState("22-10-2020");
  const [location, setLocation] = React.useState(null);
  const [gender, setGender] = React.useState("female");

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = async (event, id, i) => {
    // event.preventDefault();
    // console.log(title);
    // console.log(description);
    // console.log(city);
    // console.log(duration);
    // console.log(date);
    // console.log(location);
    console.log(gender);
    //   try {
    //  const data= await axios.post(`http://localhost:3007/update${id}`,
    // {
    //     firstName:firstName,
    //     lastName:lastName,
    //     email:email,
    //     phone:phone,
    //     dob:dob,
    //     password,password

    // }
    // );
    // const copyArray=[...user]
    // copyArray[i]=data.data
    // setUser(copyArray)
    // console.log(copyArray);

    //   } catch (error) {
    //     console.log(error, 'catch error');
    //   }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          onSubmit={handleSubmit}
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          k
        >
          {/* <Avatar  sx={{ m: 1, bgcolor: 'primary.main' }}>
      
          </Avatar> */}
          <Typography component="h1" variant="h5">
            Add New Activity
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              onChange={(event) => setTitle(event.target.value)}
              margin="normal"
              fullWidth
              id="title"
              label="Title"
              name="title"
              autoComplete="title"
              autoFocus
            />
            <TextField
              onChange={(event) => setDescription(event.target.value)}
              margin="normal"
              fullWidth
              id="description"
              label="Description"
              name="description"
              autoComplete="description"
            />
            <TextField
              onChange={(event) => setCity(event.target.value)}
              margin="normal"
              fullWidth
              id="city"
              label="City"
              name="city"
              autoComplete="city"
              autoFocus
            />
            <TextField
              onChange={(event) => setDuration(event.target.value)}
              margin="normal"
              fullWidth
              id="duration"
              label="Duration"
              name="duration"
              autoComplete="duration"
              autoFocus
            />

            <TextField
              onChange={(event) => setDate(event.target.value)}
              margin="normal"
              fullWidth
              id="date"
              label="Data"
              name="date"
              autoComplete="date"
              autoFocus
            />
            <TextField
              onChange={(event) => setLocation(event.target.value)}
              margin="normal"
              fullWidth
              id="location"
              label="Location"
              name="location"
              autoComplete="location"
              autoFocus
            />

            <FormControl>
              <FormLabel id="demo-controlled-radio-buttons-group">
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={gender}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
            </FormControl>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
