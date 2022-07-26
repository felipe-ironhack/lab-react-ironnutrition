import './App.css';
import foodsList from './foods.json'
import FoodList from './components/FoodList';
import { useState } from 'react';

function App() {

  const [foods, setFoods] = useState(foodsList)

  return (
    <div className="App">
      <FoodList {...foods} />
     {foods.map(food => (
        <div>
          <p>{food.name}</p>
          <img src={food.image} width={100} alt={food.name} />
        </div>)
      )}
    </div>
  );
}

export default App;
