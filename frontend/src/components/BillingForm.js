// src/components/BillingForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LiveBill from './LiveBill';

const BillingForm = () => {
    const [formData, setFormData] = useState({
        houseHolderName: '',
        address: '',
        contractorName: '',
        items: [],
        totalQuantity: 0
    });

    const [items, setItems] = useState([]);
    const [currentType, setCurrentType] = useState('cpvc');

    useEffect(() => {
        const getItems = async () => {
            const response = await axios.get('http://localhost:4000/api/items');
            setItems(response.data.filter(item => item.type === currentType));
        };
        getItems();
    }, [currentType]);

    const handleInputChange = (e, item) => {
        const quantity = parseInt(e.target.value) || 0;
        const updatedItems = formData.items.filter(i => i.name !== item.name);
        updatedItems.push({ ...item, quantity });
        setFormData({
            ...formData,
            items: updatedItems,
            totalQuantity: updatedItems.reduce((acc, item) => acc + item.quantity, 0)
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:4000/api/billing', formData);
        // Show a success message or redirect to the home page
    };

    const handleNextType = () => {
        const types = ['cpvc', 'upvc', 'drainage', 'metal'];
        const nextType = types[(types.indexOf(currentType) + 1) % types.length]; 
        setCurrentType(nextType);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="houseHolderName" value={formData.houseHolderName} onChange={(e) => setFormData({ ...formData, houseHolderName: e.target.value })} placeholder="Householder's Name" required />
                <input type="text" name="address" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} placeholder="Address" required />
                <input type="text" name="contractorName" value={formData.contractorName} onChange={(e) => setFormData({ ...formData, contractorName: e.target.value })} placeholder="Contractor's Name" required />

                {items.map(item => (
                    <div key={item._id}>
                        <img src={item.photo} alt={item.name} width="50" />
                        <span>{item.type} {item.name} {item.size}</span>
                        <input type="number" min="0" placeholder="Quantity" onChange={(e) => handleInputChange(e, item)} />
                    </div>
                ))}
                
                <button type="button" onClick={handleNextType}>Next Type</button>
                <button type="submit">Finalize Bill</button>
            </form>

            <LiveBill items={formData.items} totalQuantity={formData.totalQuantity} />
        </div>
    );
};

export default BillingForm;
