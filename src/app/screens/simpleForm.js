import { Paper } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { insertCustomerBill } from '../api/apiCall';

const SimpleBill = () => {
  const [data, setData] = useState({});
  const paperStyle = { padding: 25, height: '100vh', width: 700, margin: '20px auto' };

  const [inputList, setInputList] = useState([{ productName: '', quantity: '', productPrice: '' }]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  const addItem = () => {
    setInputList([...inputList, { productName: '', quantity: '', productPrice: '' }]);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validate = (e) => {
    e.preventDefault();

    dispatch(insertCustomerBill(data));
    navigate('/home');
  };

  return (
    <>
      {' '}
      <Paper elevation={10} style={paperStyle}>
        <h2>Bill</h2>

        <form>
          <div style={{ border: '1px solid black' }}>
            <label>Date:</label>{' '}
            <input
              type="Date"
              name="billDate"
              onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
            />
            <label>Bill No.:</label>{' '}
            <input
              type="number"
              name="billId"
              onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
            />
            <br />
            <label>Customer Name:</label>{' '}
            <input
              type="text"
              name="firstName"
              onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
            />
            <label>Contact No:</label>{' '}
            <input
              type="number"
              name="phoneNumber"
              onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
            />
            <br />
            <label>Email:</label>{' '}
            <input
              type="text"
              name="email"
              onChange={(e) => setData({ ...data.billDetails, [e.target.name]: e.target.value })}
            />
            <label>Date of Birth:</label>{' '}
            <input
              type="Date"
              name="dob"
              onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
            />
            <br />
            <label>Customer ID::</label>{' '}
            <input
              type="number"
              name="customerId"
              onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
            />
            <label>Payment Mode:</label>{' '}
            <input
              type="text"
              name="paymentMode"
              onChange={(e) => setData({ ...data.billDetails, [e.target.name]: e.target.value })}
            />
          </div>
          <div>
            <table border={'1 solid black'}>
              <thead>
                <tr className="border-b border-gray-900/10 text-sm md:text-base">
                  <th style={{ width: 250 }}>ITEM</th>
                  <th style={{ width: 200 }}>QTY</th>
                  <th style={{ width: 200 }}>PRICE</th>
                  <th style={{ width: 200 }}>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {inputList.map((x, i) => {
                  return (
                    <tr key={i}>
                      <td>
                        <input
                          type="text"
                          name="productName"
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </td>
                      <td>
                        {' '}
                        <input
                          type="text"
                          name="quantity"
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </td>
                      <td>
                        {' '}
                        <input
                          type="text"
                          name="productPrice"
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>{' '}
          <hr />
          {/* {inputList.length !==1 &&} */}
          <button name="addItem" onClick={addItem}>
            Add More Item
          </button>
          <div>
            <label>Sub Total:</label>
            <input
              type="number"
              name="productPrice"
              onChange={(e) => setData({ ...data.billDetails, [e.target.name]: e.target.value })}
            />
            <br />
            <label>Discount:</label>
            <input
              type="number"
              name="discount"
              onChange={(e) => setData({ ...data.billDetails, [e.target.name]: e.target.value })}
            />
            <br />
            <label>Tax:</label>
            <input
              type="number"
              name="gst"
              onChange={(e) => setData({ ...data.billDetails, [e.target.name]: e.target.value })}
            />
            <br />
            <label>Total:</label>
            <input
              type="number"
              name="finalPrice"
              onChange={(e) => setData({ ...data.billDetails, [e.target.name]: e.target.value })}
            />
            <br />
          </div>
          <div>
            <button type="submit" onClick={validate}>
              Add Bill{' '}
            </button>
            <button>Reset </button>
          </div>
        </form>
      </Paper>
    </>
  );
};

export default SimpleBill;
