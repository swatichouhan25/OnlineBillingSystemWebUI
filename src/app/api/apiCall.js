import React from 'react';
import axios from 'axios';
import { GET_PRODUCT, INSERT_PRODUCT, REGISTER_ACTION, BILL_ACTION } from '../store/constants';

// Retrieve all PRODUCTS
const getAllProduct = () => async (dispatch) => {
  const allProdUrl = `http://localhost:9090/getAllProduct`;
  const result = await axios.get(allProdUrl);

  dispatch({
    type: GET_PRODUCT,
    payload: result.data
  });
};

//insert product
const insertProduct = (newprod) => async (dispatch) => {
  const url = `http://localhost:9090/insertProductInventory`;
  const result = await axios.post(url, newprod);
  console.log('newly post added', result);
  dispatch({
    type: INSERT_PRODUCT,
    payload: result.data
  });
};
//register User

const registerUser = (newRegi) => async (dispatch) => {
  const url = `http://localhost:9090/insertSignUp`;
  const result = await axios.post(url, newRegi);
  console.log('new user Register', result);
  dispatch({
    type: REGISTER_ACTION,
    payload: result.data
  });
};
//insert Customer&Bill

const insertCustomerBill = (newBill) => async (dispatch) => {
  const url = `http://localhost:9090/insertCustomer`;
  const result = await axios.post(url, newBill);
  console.log('new bill created', result);
  dispatch({
    type: BILL_ACTION,
    payload: result.data
  });
};

export { getAllProduct, insertProduct, registerUser, insertCustomerBill };
