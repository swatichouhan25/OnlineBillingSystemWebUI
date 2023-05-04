import './App.css';
import store from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './app/routes';
import Products from './app/screens/Product';
//import Registration from './app/screens/Registration';
import AddProduct from './app/screens/AddProductList';
import InvoiceForm from './app/screens/InvoiceForm';
import DemoBill from './app/screens/DemoBill';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
    // <InvoiceForm/>
    //  <DemoBill/>
  );
}

export default App;
