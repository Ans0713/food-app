import React from 'react';

const MenuFilter = ({ onFilter }) => {
  const handleChange = (e) => {
    onFilter(e.target.value);
  };

  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search..."
        onChange={handleChange}
        className="p-3 border border-gray-300 rounded-lg w-full"
      />
    </div>
  );
};

export default MenuFilter;
