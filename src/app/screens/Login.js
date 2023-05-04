import React from 'react';
import { Checkbox, Grid, TextField, FormControlLabel, Paper, Button, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import { useState } from 'react';

const gridStyles = {
  padding: 10
};

const LoginPage = () => {
  const paperStyle = { padding: 20, height: '40vh', width: 300, margin: '20px auto' };
  const avtarStyle = { backgroundcolor: 'blue' };

  const navigate = useNavigate();
  const [checked, setChecked] = React.useState(true);
  const [userName, setUserName]=useState();
  const [password, setPassword]=useState();

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleLoginPress = () => {

    if(userName==="admin" && password==="admin"){
     navigate('/home');
    }
    else{
      alert("You Enter Bad Credentials !!!!");
    }
    // navigate('/home');
  };

  return (
    <Grid
      container
      spacing={3}
      direction={'column'}
      justify={'center'}
      alignItems={'center'}
      sx={{ ...gridStyles }}>
      <Paper elevation={10} style={paperStyle}>
        <center>
          <Avatar style={avtarStyle}>
            <LockPersonIcon />
          </Avatar>
        </center> 
        <Grid item xs={12}>
          <TextField label="Username" variant="standard"  onChange={(e)=>setUserName(e.target.value)} ></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField label="Password" variant="standard" type={'password'} name="password" onChange={(e)=>setPassword(e.target.value)}></TextField>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={handleChange}
                label={'Keep me logged in'}
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            }
            label="Keep me logged in"
          />
        </Grid>
        <Grid item xs={12}>
          <Button onClick={handleLoginPress} variant="contained" fullWidth>
            {' '}
            Login{' '}
          </Button>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default LoginPage;
