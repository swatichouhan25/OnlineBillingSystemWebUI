import * as React from 'react';
import Typography from '@mui/material/Typography';

export default function Home() {
  return (
    <>
      <center>
        <Typography paragraph>
          <h1>Welcome To My Fashion Store</h1>
          <div style={{ height: 80, width: 100 }}>
            <div className="col-12 col-md col-lg-4 img-div" style={{ height: 50, width: 600 }}>
              <img src="images/onlineBill.jpg " alt="homePic" className="img-fluid" />
            </div>
          </div>
        </Typography>
      </center>
    </>
  );
}
