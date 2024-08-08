import React from 'react';

const Counter = ({ count }) => {
  return (
    <div className={`absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full text-xl font-bold transition-transform transform ${count > 0 ? 'scale-110' : 'scale-100'}`}>
      {count}+
    </div>
  );
};

export default Counter;
