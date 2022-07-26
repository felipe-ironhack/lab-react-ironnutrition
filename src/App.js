import './App.css';
import foodsList from './foods.json'
import FoodList from './components/FoodList';
import { useState } from 'react';
import AddFoodForm from './components/AddFoodForm';

function App() {

  const [foods, setFoods] = useState(foodsList)

  return (
    <div className="App">
      <h1> Food List </h1>
      <AddFoodForm />
      <FoodList foods={foods} />
    </div>
  );
}

export default App;
