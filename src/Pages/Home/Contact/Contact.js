import React from 'react';


import { ReactComponent as YourSvg } from "../../../assets/icons/check.svg";

const Contact = () => {
  return (
    <footer className="footer p-10 bg-black text-neutral-content">
      <div className='flex mt-20 mb-20 '>
        <div className='flex'>
          <div>
            <YourSvg />
          </div>
          <div className='pl-5'> <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p></div>
        </div>

        <div className='flex pl-5'>
          <div>
            <YourSvg />
          </div>
          <div className='pl-5'> <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p></div>
        </div>

        <div className='flex pl-5'>
          <div>
            <YourSvg />
          </div>
          <div className='pl-5'> <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p></div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;