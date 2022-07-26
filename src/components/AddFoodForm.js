import React, { useState } from 'react';
import { Input, Divider } from 'antd';
import './AddFoodForm.css'

const AddFoodForm = () => {

    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState("")
    const [servings, setServings] = useState("")


    return (
        <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: "center",
        }}
        >
            <Divider> Add Food Entry </Divider>

            <div className="input-box" >
                <label htmlFor='name'>Name </label>
                <Input type='text' id='name'value={name} onChange={(e) => setName(e.target.value)} className="input-entry"/>
            </div>

            <div className="input-box">
                <label htmlFor='image'> Image </label>
                <Input type='text' id='image' value={image} onChange={(e) => setImage(e.target.value)} className="input-entry" />
            </div>

            <div className="input-box">
                <label>Calories </label>
                <Input className="input-entry" />
            </div>

            <div className="input-box">
                <label>Servings </label>
                <Input className="input-entry" />
            </div>

            <Divider />

        </div>
    );
};

export default AddFoodForm;
