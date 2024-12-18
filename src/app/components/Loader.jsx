import React from 'react';
import Spinner from "./Spinner.gif"

const Loader = () => (
  <div className='w-full h-[700px] flex justify-center items-center'>
  <img src={Spinner} alt="Spinner" className='flex justify-center items-center' />
  </div>
);

export default Loader;
