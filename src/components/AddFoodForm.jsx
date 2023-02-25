import { Divider, Input, Button } from 'antd';
import { useState } from 'react'

function AddFoodForm({ addFood }) {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [calories, setCalories] = useState('')
  const [servings, setServings] = useState('')

  const handleName = e => setName(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()

    const newFood = {
      name,
      image,
      calories,
      servings
    }
    console.log(newFood)

    addFood(newFood)

    setName('')
    setImage('')
    setCalories('')
    setServings('')
  }

  return (
    <form style={{ width: '40%', margin: 'auto' }} onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name
        <Input value={name} type="text" onChange={handleName} placeholder='Lasagna'/>
      </label>

      <label>Image
        <Input value={image} type="text" onChange={(e) => {setImage(e.target.value)}} placeholder='An image URL for that food'/>
      </label>


      <label>Calories
        <Input value={calories} type="number" onChange={(e) => {setCalories(e.target.value)}} placeholder='calories' />
      </label>


      <label>Servings
        <Input value={servings} type="number" onChange={(e) => {setServings(e.target.value)}} placeholder='1' />
      </label>


      <Button type="submit" htmlType='submit'>Create</Button>
    </form>
  );
}

export default AddFoodForm;