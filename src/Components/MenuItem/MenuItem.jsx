// src/Components/MenuItem/MenuItem.jsx
import React from 'react';

const MenuItem = ({ item }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out">
      <img 
        src={item.image} 
        alt={item.name} 
        className="w-full h-40 object-cover mb-4 rounded-t-lg transition-transform duration-300 ease-in-out hover:scale-110"
      />
      <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
      <p className="text-gray-700 mb-2">{item.description}</p>
      <span className="text-lg font-bold">{item.price}</span>
    </div>
  );
};

export default MenuItem;
