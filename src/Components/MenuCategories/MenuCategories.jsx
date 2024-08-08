import React from 'react';

const categories = [
  'Appetizers',
  'Main Courses',
  'Desserts',
  'Beverages',
];

const MenuCategories = ({ onSelectCategory }) => {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => onSelectCategory(category)}
          className="p-3 px-6 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500 bg-primary text-white hover:bg-primary-dark"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default MenuCategories;
