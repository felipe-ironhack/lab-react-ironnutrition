import './App.css';
import foodsList from './foods.json';
import FoodList from './components/FoodList';
import { useState } from 'react';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/SearchBar';
import { Divider, Button } from 'antd';

function App() {
  const [foods, setFoods] = useState(foodsList);
  const [search, setSearch] = useState(foods);
  const [showForm, setShowForm] = useState(false)

  const createFood = (newFood) => {
    setSearch([...search, newFood]);
  };

  const searchFoods = (seachableFood) => {
    const foodsToSearch = [...foods];
    const filtered = foodsToSearch.filter((food) =>
      food.name.toLowerCase().includes(seachableFood.trim().toLowerCase())
    );
    setSearch(filtered);
  };

  const deleteFood = (foodToBeDeleted) => {
    const newFoods = search.filter(
      (food) => food.name.toLowerCase() !== foodToBeDeleted.toLowerCase()
    );
    setSearch(newFoods)
  };

  const displayForm = () => {
    setShowForm(!showForm)
  }

  return (
    <div className="App">
      <Divider> Add Food Entry </Divider>
      <Button type="default" onClick={displayForm}> {showForm ? 'Close' : 'Show Form'} </Button>
     {showForm && <AddFoodForm createFood={createFood} />}

      <Divider> Search </Divider>
      <SearchBar searchFoods={searchFoods} />

      <Divider> Food List </Divider>
      <FoodList foods={search} deleteFood={deleteFood} />
    </div>
  );
}

export default App;
