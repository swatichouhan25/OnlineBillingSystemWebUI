import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllProduct } from '../api/apiCall';
import { Avatar } from '@mui/material';
import ModeIcon from '@mui/icons-material/Mode';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Products() {
  const prod = useSelector((state) => state.prod.prod);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProduct());
  }, []);

  const card = prod.map((item, index) => {
    return (
      <div className="card-body" key={index}>
        <div className="card-item" style={{ color: 'blue' }}>
          {/* ****************************************************** */}
          {/* <Link to = {`/product/${item.productId}`}></Link> */}
          <table border={0}>
            <tr>
              <td>
                <th>Item_Id</th>
              </td>
              <td>
                {' '}
                <th>Item_Name</th>
              </td>
              <td>
                {' '}
                <th>Price</th>
              </td>
              <td>
                {' '}
                <th>Description</th>{' '}
              </td>
              <td>
                {' '}
                <th> ...</th>
              </td>
            </tr>
            <tr>
              <td> {item.productId}</td>

              <td> {item.productName}</td>
              <td> {item.productPrice}</td>

              <td> {item.productDescription}</td>

              <td>
               
                {/* <form>
                  <button type="submit">Update</button>
                  <button type="submit">Delete</button>
                </form> */}
              </td>
            </tr>
          </table>
          {/* ********************************************************************* */}
        </div>
      </div>
    );
  });

  return (
    <>
      <h3>Total Products available: {prod.length}</h3>
      <div className="card">{card}</div>
    </>
  );
}
