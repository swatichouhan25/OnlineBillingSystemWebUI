import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Paper } from '@mui/material';

const columns = [
  { field: 'storeId', headerName: 'StoreID', width: 120 },
  { field: 'productId', headerName: 'PID', width: 120 },
  { field: 'productName', headerName: ' Name', width: 200 },
   { field: 'productDescription', headerName: 'Discription', width: 300 },
  { field: 'productPrice', headerName: 'Price' },
  { field: 'productQuantity', headerName: 'Quantity' }
//    { field: 'categoryId', headerName: 'Cid' },
//   { field: 'categoryName', headerName: 'CName' }
];

const ProductInventoryFetch = () => {
  const paperStyle = { padding: 20, height: '150vh', width: 1000, margin: '20px auto' };
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:9090/getAllProductInvntory')
      .then((data) => data.json())
      .then((data) => {
        setTableData(data);
      });
  }, []);
  console.log(tableData);

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
              getRowId={(row, index) => row.productId}
              pageSize={12}
            />
          </div>
        )}
      </Paper>
    </>
  );
};
export default ProductInventoryFetch;
