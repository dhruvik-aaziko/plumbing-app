// src/components/LiveBill.js
import React from 'react';

const LiveBill = ({ items, totalQuantity }) => {
    const groupedItems = items.reduce((acc, item) => {
        if (!acc[item.type]) acc[item.type] = [];
        acc[item.type].push(item);
        return acc;
    }, {});

    return (
        <div>
            <h3>Live Bill</h3>
            <div>Total Quantity: {totalQuantity}</div>
            {Object.keys(groupedItems).map(type => (
                <div key={type}>
                    <h4>{type.toUpperCase()}</h4>
                    <ul>
                        {groupedItems[type].map(item => (
                            <li key={item.name}>
                                {item.size} {item.name} - {item.quantity}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default LiveBill;
