import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Paper, Modal, Box, Typography, Grid } from '@mui/material';

const columns = [
  { field: 'billId', headerName: 'bId' },
  { field: 'billDate', headerName: 'billDate' },
  { field: 'firstName', headerName: 'Customer Name' },
  { field: 'dob', headerName: 'DOB' },
  { field: 'phoneNumber', headerName: 'Phone', width: 120 },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'customerId', headerName: 'CId', width: 300 },
  { field: 'paymentMode', headerName: 'PayMode' },
  { field: 'gst', headerName: 'Tax' },
  { field: 'discount', headerName: 'Discount' },
  { field: 'finalPrice', headerName: 'Total' },
  { field: 'userName', headerName: 'UserName' }
];

const productColumns = [
  { field: 'productName', headerName: 'Name' },
  { field: 'productPrice', headerName: 'Price' },
  { field: 'productQuantity', headerName: 'Quantity' }
];

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};

const FetchCustomer = () => {
  const [open, setOpen] = useState(false);
  const [modalData, setModaData] = useState({});
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const paperStyle = { padding: 20, height: '150vh', width: 900, margin: '20px auto' };
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9090/getAllCustomer')
      .then((data) => data.json())
      .then((data) => {
        let newData = [];
        data.map((item) => {
          let newObject = {
            ...item,
            ...item.billDetails
          };
          newData.push(newObject);
        });
        console.log('Here new data', newData);
        setTableData(newData);
      });
  }, []);
  console.log(tableData);

  const handleEvent = (
    params, // GridRowParams
    event, // MuiEvent<React.MouseEvent<HTMLElement>>
    details // GridCallbackDetails
  ) => {
    console.log('params', params);
    setModaData(params.row);
    handleOpen();
  };

  return (
    <>
      {' '}
      <Paper elevation={10} style={paperStyle}>
        {/* <button type="submit" >Search Product By Category</button> */}

        {tableData && (
          <div
            style={{ margin: 100, width: '90%', alignItems: 'center', justifyContent: 'center' }}>
            <DataGrid
              rows={tableData}
              columns={columns}
              getRowId={(row, index) => row.customerId}
              pageSize={12}
              onRowClick={handleEvent}
            />
          </div>
        )}
      </Paper>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Typography align="right">Invoice No : {modalData.billId}</Typography>
            </Grid>

            <Grid item xs={4}>
              <Typography align="right">Invoice Date : {modalData.billDate}</Typography>
            </Grid>

            <Grid item xs={4}>
              <Typography align="right">Customer Name : {modalData.firstName}</Typography>
            </Grid>
          </Grid>

          <DataGrid
            rows={modalData.products}
            columns={productColumns}
            getRowId={(row, index) => row.productId}
          />
        </Box>
      </Modal>
    </>
  );
};
export default FetchCustomer;
