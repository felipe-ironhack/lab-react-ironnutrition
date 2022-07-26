import './App.css';
import foodsList from './foods.json';
import FoodList from './components/FoodList';
import { useState } from 'react';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/SearchBar';
import { Divider } from 'antd';

function App() {
  const [foods, setFoods] = useState(foodsList);
  const [search, setSearch] = useState(foods)

  const createFood = (newFood) => {
    if (foods.includes(newFood.name)) return;
    setFoods([...foods, newFood]);
  };

  const searchFoods = (seachableFood) => {
    const foodsToSearch = [...foods];
    const filtered = foodsToSearch.filter(
      (food) => food.name.toLowerCase().includes(seachableFood.trim().toLowerCase())
    );
    setSearch(filtered);
  };

  const deleteFood = (foodToBeDeleted) => {
    console.log('passed')
  }

  return (
    <div className="App">
      <AddFoodForm createFood={createFood} />

      <Divider> Search </Divider>
      <SearchBar searchFoods={searchFoods} />

      <Divider> Food List </Divider>
      <FoodList foods={search} />
    </div>
  );
}

export default App;
