import React from 'react';
import FoodBox from './FoodBox';

const FoodList = (props) => {

  const foodObj = {  
    name: 'Orange',
    calories: 85,
    image: 'https://i.imgur.com/abKGOcv.jpg',
    servings: 1,
  }
  
  return (
    <>
      <h1>FoodList</h1>
      <FoodBox {...foodObj}/>
    </>
  );
};

export default FoodList;
