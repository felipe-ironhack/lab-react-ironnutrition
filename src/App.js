import { useState } from 'react';

import { Row, Divider, Button } from 'antd';
import foodRepo from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import NoItems from './components/NoItems';

function App() {
  const [foods, setFoods] = useState(foodRepo);
  const [display, setDisplay] = useState(foodRepo);
  const [showForm, setShowForm] = useState(false);

  const addFood = (foodToAdd) => {
    const newList = [foodToAdd, ...foods];
    const newDisplay = [foodToAdd, ...display];
    setFoods(newList);
    setDisplay(newDisplay);

    // Functional update on the setFoods
    // It will take the last version of the state and execute the update
    // Remember that you shouldn't update the state directly,
    // first copy the state and after change the copy
    // setFoods((prevFoodList) => {
    //   return [foodToAdd, ...prevFoodList]
    // })
  };

  const filterDisplay = (foodName) => {
    const filteredFoods = foods.filter((food) =>
      food.name.toLowerCase().includes(foodName.toLowerCase())
    );
    setDisplay(filteredFoods);
  };

  const deleteFood = (foodName) => {
    const filteredFoods = foods.filter(
      (food) => food.name.toLowerCase() !== foodName.toLowerCase()
    );
    const filterDisplay = display.filter(
      (food) => food.name.toLowerCase() !== foodName.toLowerCase()
    );
    setFoods(filteredFoods);
    setDisplay(filterDisplay);
  };

  return (
    <div className="App">
      <Button onClick={() => setShowForm(!showForm)}>
        {' '}
        {showForm ? 'Hide Form' : 'Show Form'}{' '}
      </Button>

      {showForm && <AddFoodForm addFood={addFood} />}

      <Search filterDisplay={filterDisplay} />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {display.length > 0 ? (
          display.map((food) => (
            <FoodBox {...food} key={food.name} deleteFood={deleteFood} />
          ))
        ) : (
          <NoItems />
        )}
      </Row>
    </div>
  );
}

export default App;
