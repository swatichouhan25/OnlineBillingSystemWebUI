import React, { useState } from 'react';
import { uid } from 'uid';

import InvoiceModal from './InvoiceModal';
import InvoiceItem from './InvoiceItem';
import incrementString from './incrementString';
import { TextField, Paper, Grid, Typography, Button, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { insertCustomerBill } from '../api/apiCall';
import { useNavigate } from 'react-router-dom';

const date = new Date();
const today = date.toLocaleDateString('en-CA', {
  month: 'numeric',
  day: 'numeric',
  year: 'numeric'
});
//en-GB
const InvoiceForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [discount, setDiscount] = useState('');
  const [tax, setTax] = useState('');
  const [finalTotal, setFinalTotal] = useState('');
  const [items, setItems] = useState([
    {
      id: uid(6),
      name: '',
      qty: 1,
      price: ''
    }
  ]);
  const [newBill,setNewBill]=useState({});

  const [inputsData, setInputsData] = useState({
    firstName: '',
    phoneNumber: '',
    dob: new Date(),
    email: '',
    // customerId: '',
    paymentMode: 'Cash',
    userName: '',
     billId: '1001'
  });
  const handleChange = (e) =>
    setInputsData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));

  const validate = (e) => {
    e.preventDefault();
  };

  const reviewInvoiceHandler = (event) => {
    event.preventDefault();
    console.log('====================================');
    console.log('items', items);
    console.log('inputsData', inputsData);
    console.log('====================================');
    // setIsOpen(true);
    console.log(inputsData);
    let reqProducts = [];
    items.map((product) => {
      let obj = {
        productName: product.name,
        productQuantity: product.qty,
        productPrice: product.price
        // productId: product.id
      };
      reqProducts.push(obj);
      alert("Bill Created!!!");
      nevigate('/home');
    });

    let reqObj = {
      // customerId: inputsData.customerId,
      firstName: inputsData.firstName,
      dob: inputsData.dob,
      phoneNumber: inputsData.phoneNumber,
      email: inputsData.email,
      billDetails: {
        // billId :inputsData.billId ,
        billDate: inputsData.billDate,
        paymentMode: inputsData.paymentMode,
        gst: tax,
        discount: discount,
        finalPrice: total,
        userName: inputsData.userName,
        products: reqProducts
      }
    };
    console.log('items object ', reqObj);
    dispatch(insertCustomerBill(reqObj));
    // navigate('/home');
  };

  const addNextInvoiceHandler = () => {
    // setInvoiceNumber((prevNumber) => incrementString(prevNumber));
    setItems([
      {
        id: uid(6),
        name: '',
        qty: 1,
        price: '0'
      }
    ]);
  };

  const addItemHandler = () => {
    const id = uid(6);
    setItems((prevItem) => [
      ...prevItem,
      {
        id: id,
        name: '',
        qty: 1,
        price: ''
      }
    ]);
  };

  const deleteItemHandler = (id) => {
    setItems((prevItem) => prevItem.filter((item) => item.id !== id));
  };
  const addData = () => {};

  const edtiItemHandler = (event) => {
    const editedItem = {
      id: event.target.id,
      name: event.target.name,
      value: event.target.value
    };

    const newItems = items.map((items) => {
      for (const key in items) {
        if (key === editedItem.name && items.id === editedItem.id) {
          items[key] = editedItem.value;
        }
      }
      return items;
    });

    setItems(newItems);
  };

  const subtotal = items.reduce((prev, curr) => {
    if (curr.name.trim().length > 0) return prev + Number(curr.price * Math.floor(curr.qty));
    else return prev;
  }, 0);
  const taxRate = (tax * subtotal) / 100;
  const discountRate = (discount * subtotal) / 100;
  const total = subtotal - discountRate + taxRate;
  const paperStyle = { padding: 20, height: '125vh', width: 700, margin: '20px auto' };

  const gridStyles = {
    padding: 10
  };

  const NewBillSet=()=>{
    setNewBill({  
      "firstName": '',
      "phoneNumber": '',
      "dob": new Date(),
      "email": '',
     "paymentMode": 'Cash',
      "userName": '',
       "billId": '1001+1'
    });
    console.log("here new bill reset");


  };

  return (
    <Grid
      container
      spacing={3}
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      sx={{ ...gridStyles }}>
      <Paper elevation={10} style={paperStyle}>
        <Box component="form" onSubmit={reviewInvoiceHandler}>
          <center>
            {' '}
            <h1 className="text-center text-lg font-bold">INVOICE</h1>
          </center>

          <Grid container spacing={3}>
            <Grid item xs={4}>
              <TextField
                disabled
                label=" Date:"
                value={today}
                variant="standard"
                name="billDate"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                required
                label="Bill Generated By"
                variant="standard"
                name="userName"
                value={inputsData.userName}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                label=" Invoice Number:"
                value={inputsData.billId}
                variant="standard"
                name="billId"
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          <Grid container spacing={3} style={{ marginTop: 1 }}>
            <Grid item xs={4}>
              <TextField
                required
                type="text"
                label="Customer Name"
                variant="standard"
                name="firstName"
                value={inputsData.firstName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                required
                label="Contact No"
                variant="standard"
                type="number"
                value={inputsData.phoneNumber}
                name="phoneNumber"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                required
                label="Email"
                variant="standard"
                type="text"
                name="email"
                id="emailId"
                value={inputsData.email}
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          <Grid container spacing={3} style={{ marginTop: 1, marginBottom: 20 }}>
            {/* <Grid item xs={4}>
              <TextField
                
                label="Customer ID"
                variant="standard"
                type="text"
                value={inputsData.customerId}
                name="customerId"
                onChange={handleChange}
              />
            </Grid> */}
            <Grid item xs={4}>
              <TextField
                required
                label="Payment Mode"
                variant="standard"
                type="text"
                name="paymentMode"
                id="paymentMode"
                value={inputsData.paymentMode}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={4}>
              <label
                htmlFor="dob"
                className="col-start-2 row-start-1 text-sm font-bold md:text-base">
                Date Of Birth:
              </label>
              <input
                required
                className="flex-1"
                placeholder="Dob"
                type="date"
                name="dob"
                id="dob"
                value={inputsData.dob}
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          <table className="w-full p-4 text-left">
            <thead>
              <tr className="border-b border-gray-900/10 text-sm md:text-base">
                <th>ITEM</th>
                <th>QTY</th>
                <th className="text-center">PRICE</th>
                <th className="text-center">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <InvoiceItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  qty={item.qty}
                  price={item.price}
                  onDeleteItem={deleteItemHandler}
                  onEdtiItem={edtiItemHandler}
                />
              ))}
            </tbody>
          </table>
          <Button style={{ marginTop: 20 }} variant="outlined" onClick={addItemHandler}>
            Add Item
          </Button>

          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography align="right">Subtotal: &#8377; {subtotal.toFixed(2)}</Typography>
            </Grid>
          </Grid>

          <Grid container spacing={3} style={{ marginTop: 5, marginBottom: 5 }}>
            <Grid item xs={4}>
              <TextField
                type="number"
                name="discount"
                id="discount"
                min="0"
                step="0.01"
                label="Discount rate %"
                value={discount}
                onChange={(event) => setDiscount(event.target.value)}
              />
            </Grid>

            <Grid item xs={8}>
              <Typography align="right">
                Discount: ({discount || '0'}%) &#8377; {discountRate.toFixed(2)}
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={4}>
              <TextField
                type="number"
                name="gst"
                id="tax"
                min="0"
                step="0.01"
                label="Tax rate %"
                value={tax}
                onChange={(event) => setTax(event.target.value)}
              />
            </Grid>

            <Grid item xs={8}>
              <Typography align="right">
                Tax: ({tax || '0'}%) &#8377; {taxRate.toFixed(2)}
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography align="right">
                Total = &#8377; {total % 1 === 0 ? total.toFixed(2) : total.toFixed(2)}
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={4} style={{ marginTop: 50 }}>
            <Grid xs={6}>
              <Button variant="outlined" type="submit">
                Review Invoice
              </Button>
            </Grid>
            <Grid xs={6}>
              <Button variant="outlined" onClick={NewBillSet}>
               Reset 
              </Button>
            </Grid>
          </Grid>

          {/* </div> */}
          <div className="basis-1/4 bg-transparent">
            <div className="sticky top-0 z-10 space-y-4 divide-y divide-gray-900/10 pb-8 md:pt-6 md:pl-4">
              <InvoiceModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                invoiceInfo={{
                  // invoiceNumber,
                  // cashierName,
                  // inputsData.customerName,
                  subtotal,
                  taxRate,
                  discountRate,
                  total
                }}
                items={items}
                onAddNextInvoice={addNextInvoiceHandler}
              />
            </div>
          </div>
        </Box>
      </Paper>
    </Grid>
  );
};

export default InvoiceForm;
