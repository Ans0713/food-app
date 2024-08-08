// src/Components/MenuSection/MenuSection.jsx
import React, { useState } from 'react';
import MenuCategories from '../MenuCategories/MenuCategories';
import MenuItem from '../MenuItem/MenuItem';
import MenuFilter from '../MenuFilter/MenuFilter';
import heroBg from "../../assets/heroBg.png";
import hummusveggies from "../../assets/hummus & veggies.png";
import greeksalad from "../../assets/greek salad.png";
import quinoasalad from "../../assets/quinoa salad.jpeg";
import grilledSalmon from "../../assets/grilledSalmon.jpeg";
import chickenStirFry from "../../assets/chickenStirFry.png";
import vegetableSoup from "../../assets/vegetableSoup.png";
import lentilCurry from "../../assets/lentilCurry.jpeg";
import stuffedBellPeppers from "../../assets/stuffedBellPeppers.jpeg";
import chiaPudding from "../../assets/chiaPudding.png";
import fruitSalad from "../../assets/fruitSalad.jpeg";
import bakedApples from "../../assets/bakedApples.jpg";
import yogurtParfait from "../../assets/yogurtParfait.jpg";
import greenSmoothie from "../../assets/greenSmoothie.jpg";
import herbalTea from "../../assets/herbalTea.jpeg";
import infusedWater from "../../assets/infusedWater.jpg";

const BgStyle = {
  backgroundImage: `url(${heroBg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
  transition: "background-image 0.5s ease-in-out"
};

const menuData = [
  { id: 1, category: 'Appetizers', name: 'Hummus & Veggies', description: 'Creamy hummus served with fresh vegetable sticks', price: '$6', image: hummusveggies },
  { id: 2, category: 'Appetizers', name: 'Greek Salad', description: 'Crisp salad with cucumbers, tomatoes, olives, and feta', price: '$7', image: greeksalad },
  { id: 3, category: 'Appetizers', name: 'Quinoa Salad', description: 'Nutritious quinoa mixed with fresh vegetables and herbs', price: '$8', image: quinoasalad },
  { id: 4, category: 'Main Courses', name: 'Grilled Salmon', description: 'Salmon fillet grilled with lemon and herbs', price: '$15', image: grilledSalmon },
  { id: 5, category: 'Main Courses', name: 'Chicken Stir-Fry', description: 'Chicken breast stir-fried with vegetables and a light sauce', price: '$13', image: chickenStirFry },
  { id: 6, category: 'Main Courses', name: 'Vegetable Soup', description: 'Hearty soup made with seasonal vegetables', price: '$10', image: vegetableSoup },
  { id: 7, category: 'Main Courses', name: 'Lentil Curry', description: 'Spicy lentil curry with a side of brown rice', price: '$12', image: lentilCurry },
  { id: 8, category: 'Main Courses', name: 'Stuffed Bell Peppers', description: 'Bell peppers stuffed with quinoa and vegetables', price: '$11', image: stuffedBellPeppers },
  { id: 9, category: 'Desserts', name: 'Chia Pudding', description: 'Chia seeds soaked in almond milk with fresh fruit', price: '$5', image: chiaPudding },
  { id: 10, category: 'Desserts', name: 'Fruit Salad', description: 'A refreshing mix of seasonal fruits', price: '$4', image: fruitSalad },
  { id: 11, category: 'Desserts', name: 'Baked Apples', description: 'Apples baked with cinnamon and a touch of honey', price: '$6', image: bakedApples },
  { id: 12, category: 'Desserts', name: 'Yogurt Parfait', description: 'Layers of Greek yogurt, granola, and fresh berries', price: '$7', image: yogurtParfait },
  { id: 13, category: 'Beverages', name: 'Green Smoothie', description: 'Smoothie made with spinach, banana, and almond milk', price: '$5', image: greenSmoothie },
  { id: 14, category: 'Beverages', name: 'Herbal Tea', description: 'Caffeine-free herbal tea with a calming effect', price: '$3', image: herbalTea },
  { id: 15, category: 'Beverages', name: 'Infused Water', description: 'Water infused with cucumber, mint, and lemon', price: '$4', image: infusedWater },
];

const MenuSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('Appetizers');
  const [filter, setFilter] = useState('');

  const filteredItems = menuData.filter(item => 
    (item.category === selectedCategory) && 
    (item.name.toLowerCase().includes(filter.toLowerCase()))
  );

  return (
    <div style={BgStyle} className="p-6 bg-gray-100 transition-all duration-500 ease-in-out">
      <div className="bg-opacity-70 p-6 rounded-lg">
        <MenuCategories onSelectCategory={setSelectedCategory} />
        <MenuFilter onFilter={setFilter} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map(item => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
