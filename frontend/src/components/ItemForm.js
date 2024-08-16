// src/components/ItemForm.js
import React, { useState } from 'react';
import axios from 'axios';

const ItemForm = ({ getItems }) => {
    const [formData, setFormData] = useState({
        type: '',
        name: '',
        size: '',
        photo: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:4000/api/items', formData);
        getItems(); // Refresh item list
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="type" value={formData.type} onChange={handleChange} placeholder="Type" required />
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
            <input type="text" name="size" value={formData.size} onChange={handleChange} placeholder="Size" required />
            <input type="text" name="photo" value={formData.photo} onChange={handleChange} placeholder="Photo URL" required />
            <button type="submit">Add Item</button>
        </form>
    );
};

export default ItemForm;
