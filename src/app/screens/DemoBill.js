import React from 'react';
import { useState } from 'react';

import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Paper,
  Button,
  Radio,
  RadioGroup,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { insertProduct } from '../api/apiCall';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { JoinLeft } from '@mui/icons-material';

const gridStyles = {
  padding: 10
};

const DemoBill = () => {
  const dispatch = useDispatch();

  // useEffect(()=>{
  //   dispatch(insertProduct());
  // },[]);

  const paperStyle = { padding: 20, height: '125vh', width: 800, margin: '20px auto' };
  const navigate = useNavigate();
  /* const [storeId, setStorerId] = useState('');
   const [productId, setProductId] = useState('');
   const [categoryId, setCategoryId] = useState('');
   const [catName, setCatName] = useState('');
   const [productName, setProductName] = useState('');
   const [productPrice, setProductPrice] = useState('');
   const [description, setDescription] = useState('');
   const [quantity, setquantity]=useState('');
   // <Link to = {`/add-product/${item.productId}`}></Link>*/

  const [data, setData] = React.useState({});

  console.log(data);
  const validate = (e) => {
    e.preventDefault();

    console.log(data);

    dispatch(insertProduct(data));
    navigate('/home');
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
        <Grid item xs={12}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
              components={['DatePicker']}
              name="date_of_Joining"
              onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}>
              <DatePicker label="Date " />
            </DemoContainer>
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12}>
          <TextField
            style={{ margin: 10, width: '60' }}
            label="Bill No."
            variant="outlined"
            name="storeId"
            onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            style={{ margin: 10, width: '60' }}
            label="Bill By:"
            variant="outlined"
            name="storeId"
            onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
          />
        </Grid>

        <div style={{ backgroundColor: 'blue', width: 650, height: 30 }}>
          <h3 style={{ color: 'white' }}>Invoice </h3>
        </div>

        <Grid item xs={12}>
          <TextField
            style={{ margin: 10, width: '60' }}
            label="Bill No."
            variant="outlined"
            name="storeId"
            onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
          />
          <TextField
            style={{ margin: 10, width: '40' }}
            label="Bill By:"
            variant="outlined"
            name="storeId"
            onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            style={{ margin: 10 }}
            label="Product_Id"
            variant="outlined"
            name="productId"
            onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
            fullWidth></TextField>
        </Grid>
        <Grid item xs={12}>
          {/* <TextField label="Category ID" variant="outlined" name="categoryId" onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })} fullWidth/> */}
          <FormControl fullWidth style={{ margin: 10 }}>
            <InputLabel id="demo-simple-select-label">Category ID</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="CategoryId"
              name="categoryId"
              onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}>
              <MenuItem value={101}>Shirt_101</MenuItem>
              <MenuItem value={102}>Jeans_102</MenuItem>
              <MenuItem value={103}>T-Shirt_103</MenuItem>
              <MenuItem value={104}>Top_104</MenuItem>
              <MenuItem value={105}>Kurti_105</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          {/* <TextField label="Category Name" variant="outlined" name="categoryName" onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })} fullWidth></TextField> */}
          <FormControl fullWidth style={{ margin: 10 }}>
            <InputLabel id="demo-simple-select-label">Category Name</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="CategoryName"
              name="categoryName"
              onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}>
              <MenuItem value={101}>Shirt</MenuItem>
              <MenuItem value={102}>Jeans</MenuItem>
              <MenuItem value={103}>T-Shirt</MenuItem>
              <MenuItem value={104}>Top</MenuItem>
              <MenuItem value={105}>Kurti</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            style={{ margin: 10 }}
            label="Product Name"
            variant="outlined"
            name="productName"
            onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
            fullWidth></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            style={{ margin: 10 }}
            label="Product Discription"
            variant="outlined"
            name="productDescription"
            onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
            fullWidth></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            style={{ margin: 10 }}
            label="Product Price"
            variant="outlined"
            name="productPrice"
            onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
            fullWidth></TextField>
          <TextField
            style={{ margin: 10 }}
            label="Product Quatity"
            variant="outlined"
            name="productQuantity"
            onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
            fullWidth></TextField>
        </Grid>

        <Grid item xs={12}>
          <Button onClick={validate} variant="contained" fullWidth>
            {' '}
            ADD{' '}
          </Button>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default DemoBill;
