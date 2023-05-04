import React, { useState } from 'react';
import { registerUser } from '../api/apiCall';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Paper,
  Button,
  Radio,
  RadioGroup,
  withTheme,
  FormLabel
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Email } from '@mui/icons-material';
import { useEffect } from 'react';

const gridStyles = {
  padding: 10
};

const UpdateUser = () => {
  const paperStyle = { padding: 20, height: '220vh', width: 700, margin: '20px auto' };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const{employeeId}= useParams();


  const [data, setData] = React.useState({
    employeeId:employeeId,
    firstName:'',
    lastName:'',
    date_Of_Birth:'',
    gender:'',
    phoneNumber:'',
    userRole:'',
    address:'',
    storeId:'',
    date_of_Joining:'',
    emailId:'',
    userName:'',
    password:'',
});

  console.log(data);
  useEffect(()=>{
    axios.get
  })
 

  const handleRegisterPress = (e) => {
    e.preventDefault();
    console.log(data);
    dispatch(registerUser(data));

    navigate('/register');
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid
          container
          spacing={3}
          direction={'column'}
          justify={'center'}
          alignItems={'center'}
          sx={{ ...gridStyles }}>
          <div style={{ backgroundColor: 'blue', width: 600 }}>
            {' '}
            <h3 style={{ color: 'white' }}>Update User Details </h3>
          </div>
          <Grid item xs={12}>
            <TextField
              label="First Name"
              variant="outlined"
              name="firstName"
              onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
              required
              fullWidth></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Last Name"
              variant="outlined"
              name="lastName"
              onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
              required
              fullWidth></TextField>
          </Grid>
          <Grid item xs={12}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer
                components={['DatePicker']}
                name="date_Of_Birth"
                onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
                required>
                <DatePicker label="Date Of Birth" />
              </DemoContainer>
            </LocalizationProvider>

            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender"
              onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}>
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>

      
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Contact Number"
              variant="outlined"
              name="phoneNumber"
              onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
              fullWidth
              required></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="User Role"
              variant="outlined"
              name="userRole"
              onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
              fullWidth
              required></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Address"
              variant="outlined"
              name="address"
              onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
              fullWidth
              required></TextField>
          </Grid>
          <Grid item xs={12}>
            {/* <TextField label="Store ID" variant="outlined" name="storeId" onChange={(e)=>setData({...data,[e.target.name]:e.target.value})}></TextField>*/}
            <FormControl fullWidth style={{ margin: 15 }}>
              <InputLabel id="demo-simple-select-label">Store ID</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="storeId"
                name="storeId"
                onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}>
                <MenuItem value={101}>FREEGANJ-101</MenuItem>
                <MenuItem value={102}>CITY-102</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer
                components={['DatePicker']}
                name="date_of_Joining"
                onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}>
                <DatePicker label="Date Of Joining" />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email ID"
              variant="outlined"
              type={Email}
              name="emailId"
              onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
              fullWidth
              required></TextField>
          </Grid>{' '}
          <Grid item xs={12}>
            <TextField
              label="Employee ID"
              variant="outlined"
              type="text"
              name="employeeId"
              onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
              fullWidth
              required></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="User Name"
              variant="outlined"
              name="userName"
              onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
              fullWidth
              required></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
              fullWidth
              required></TextField>
          </Grid>
          <Grid item xs={12}>
            <Button onClick={handleRegisterPress} variant="contained" fullWidth>
              {' '}
              Update User{' '}
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default UpdateUser;
