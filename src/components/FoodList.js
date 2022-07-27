import React from 'react';
import FoodBox from './FoodBox';
import { Row } from 'antd' ;

const FoodList = ({foods, deleteFood}) => {

  return (
    <>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
         {foods.map((food, index) => <FoodBox deleteFood={deleteFood} key={index} {...food} />)}    
      </Row>
    </>
  );
};

export default FoodList;
