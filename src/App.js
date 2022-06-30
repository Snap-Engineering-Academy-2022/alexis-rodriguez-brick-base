import React, { useState } from 'react';
import './App.css';
// import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import LegoSetCard from './components/LegoSetCard';



var myHeaders = new Headers();
myHeaders.append("Cookie", "__cflb=0H28vzNcsA143GW52FyVXZfrjruJ6kaTWMvkTQ8Ds79");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};



function App() {
  
  const [houseData, setHouseData] = useState(null);
  const [searchBarResult, setSearchBarResult] = useState("")

  const handleChange = (event) => {
    setSearchBarResult(event.target.value);
    fetch("https://rebrickable.com/api/v3/lego/sets/?search=" + searchBarResult + "&key=5e7031f029b2bf1cc237413ff2e599fc", requestOptions)
    .then(response => response.json())
    .then(response => {
      console.log(response.results); 
      setHouseData(response.results)
    })
    .catch(error => console.log('error', error));
  };
  
  // function handleButtonClick(){
  //   fetch("https://rebrickable.com/api/v3/lego/sets/?min_year=2010&key=5e7031f029b2bf1cc237413ff2e599fc", requestOptions)
  //   .then(response => response.json())
  //   .then(response => {
  //     console.log(response.results); 
  //     setHouseData(response.results)
  //   })
  //   .catch(error => console.log('error', error));
  // }

  console.log(searchBarResult);

  return (
    <div className="App">
      <CssBaseline />
      <Container maxWidth="lg" sx={{backgroundColor: '#ffe330'}}>
        <Grid container direction="column" justifyContent="center" alignItems="center">
          <Grid item>
              <Typography
                variant="h2"
                color="text.primary"
                sx={{ m: 2}}
              >
                Brick Base
              </Typography>
          </Grid>
          {/* <Grid item>
              <Button 
                  href="#" 
                  variant="outlined" 
                  sx={{ color: 'black', borderColor: 'black', my: 2}}
                  onClick={() => handleButtonClick()}
                >
                FETCH
              </Button>
          </Grid> */}
          <Grid item>
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { width: '25ch' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-name"
                  label="Search"
                  value={searchBarResult}
                  onChange={handleChange}
                />
              </Box>
          </Grid>
        </Grid>
      </Container>


      <Container maxWidth="lg">
        <Grid container 
          spacing={5} 
          justifyContent="center"
          alignItems="flex-start"
        >
          {
            houseData && houseData.map((object) => {
              return <Grid
                        item
                        xs={12}
                        md={4}
                      >
                        <LegoSetCard setName={object.name} setNum={object.set_num} image={object.set_img_url} setYear={object.year} numOfPieces={object.num_parts} />
                      </Grid>
              }
            )
          }
        </Grid>
      </Container>
    </div>
  );
}

export default App;
