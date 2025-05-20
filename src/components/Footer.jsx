import React from 'react';
import {MDBFooter,MDBContainer,MDBBtn} from 'mdb-react-ui-kit';

function Footer() {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#646cff5' }}>
      <MDBContainer className='p-4 pb-0'>
        <section className=''>
          <p className='d-flex justify-content-center align-items-center'>
          </p>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: '#646cff5' }}>
        © 2025 Copyright: IFC Campus Concórdia
      </div>
    </MDBFooter>
  );
}

export default Footer;