import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Paper } from '@mui/material';

const columns = [
  { field: 'employeeId', headerName: 'EmployeeId' },
  { field: 'firstName', headerName: 'First Name', width: 120 },
  { field: 'lastName', headerName: 'Last Name', width: 120 },
  { field: 'gender', headerName: ' gender', width: 200 },
  { field: 'date_Of_Birth', headerName: 'DOB', width: 300 },
  { field: 'storeId', headerName: 'StoreId' },
  { field: 'date_of_Joining', headerName: 'DOJ' },
  { field: 'userName', headerName: 'UserName' },
  { field: 'password', headerName: 'Password' },
  { field: 'emailId', headerName: 'Email' },
  { field: 'userRole', headerName: 'UserRole' },
  { field: 'address', headerName: 'Address' },
  { field: 'phoneNumber', headerName: 'Phone No.' },
  {  headerName: 'Action'}
];

const UserFetch = () => {
  const paperStyle = { padding: 20, height: '150vh', width: 1100, margin: '40px auto' };
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:9090/getAllStoreEmp')
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
              getRowId={(row, index) => row.employeeId}
              pageSize={12}
             
            />
           
             
             
            
           </div>
          
        )}
      </Paper>
    </>
  );
};
export default UserFetch;
