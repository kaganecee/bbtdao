import React from 'react';

const SecondaryHeader = ({ project }) => {
  return (
    <div className="shadow-lg w-full flex justify-between items-center py-4 px-4 bg-white ">
        <div className="flex items-center justify-center space-x-4">
          <button
          className='rounded-3xl  bg-neutral-200 px-6 py-2'
            onClick={() => history.back()}
          >
            Return
          </button>
          <h1 className='text-xl comfortaa'>{project}</h1>
        </div>
    </div>
  );
};

export default SecondaryHeader;