import { useState } from 'react';
import { Input, Divider, Button } from 'antd';
import { overrideCenter } from './helpers/style.helper';

const AddFoodForm = ({createFood}) => {

  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  const newFood = {
    name,
    image,
    calories,
    servings
  }

  const handleCreation = () => {
    createFood(newFood);
    setName('')
    setImage('')
    setCalories('')
    setServings('')
  }

  return (
    <div
      style={overrideCenter}
    >
      {/* This is the input for the name */}
      <div className="input-box">
        <label htmlFor="name">Name </label>
        <Input
          type="text"
          id="name"
          value={name}
          placeholder='Lasagna'
          onChange={(e) => setName(e.target.value)}
          className="input-entry"
        />
      </div>

      {/* This is the input for the Image */}
      <div className="input-box">
        <label htmlFor="image"> Image </label>
        <Input
          type="text"
          id="image"
          value={image}
          placeholder='insert food picture url here'
          onChange={(e) => setImage(e.target.value)}
          className="input-entry"
        />
      </div>

      {/* This is the input for the calories */}
      <div className="input-box">
        <label htmlFor="calories">Calories </label>
        <Input
          type="number"
          id="calories"
          value={calories}
          placeholder='350'
          onChange={(e) => setCalories(e.target.value)}
          className="input-entry"
        />
      </div>

      {/* This is the input for the servings */}
      <div className="input-box">
        <label htmlFor="servings">Servings </label>
        <Input
          type="number"
          id="servings"
          value={servings}
          placeholder='2'
          onChange={(e) => setServings(e.target.value)}
          className="input-entry"
        />
      </div>

      <Button type="primary" onClick={() => handleCreation()}> Create </Button>

      <Divider />
    </div>
  );
};

export default AddFoodForm;
