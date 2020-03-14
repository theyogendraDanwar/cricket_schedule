import React from 'react';

const Spinner = ({type, ...props}) => (
  type === 'loading-text' ? 
   <div className="flex justify-center h-100 items-center">
    <div className="spinner-loading f1">Loading...</div>
  </div> : ''  
)

export default Spinner;