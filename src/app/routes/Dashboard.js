import { Routes, Route } from 'react-router-dom';
import AppDrawerBar from '../components/common/AppDrawerBar';
import Home from '../screens/Home';
import Products from '../screens/Product';
import InvoiceForm from '../screens/InvoiceForm';
import Registration from '../screens/Registration';
import AddProduct from '../screens/AddProductList';
import * as React from 'react';

import DataGrid1 from '../screens/fetchProduct';
import UserFetch from '../screens/FetchByEmpId';
import FetchCustomer from '../screens/FetchCustomerBill';
import DemoBill from '../screens/DemoBill';
import SimpleBill from '../screens/simpleForm';
import UpdateUser from '../screens/UpdateUser';
import ProductInventoryFetch from '../screens/ProductStockFetch';

const Dashboard = () => {
  return (
    <>
      <AppDrawerBar />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="/product" element={<Products />} />
        <Route path="/bill" element={<InvoiceForm />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/fetch" element={<DataGrid1 />} />
         <Route path="/fetchByEmpId/" element={<UserFetch />} /> *
        <Route path="/fetchCustomer" element={<FetchCustomer />} />
        <Route path="/demoBill" element={<DemoBill />} />
        <Route path="/simpleBill" element={<SimpleBill />} />
        <Route path="/updateUser" element={<UpdateUser />} />
        <Route path="/productInventoryFetch" element={<ProductInventoryFetch />} />
      </Routes>
    </>
  );
};

export default Dashboard;
