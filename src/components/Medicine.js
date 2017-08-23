import React from 'react';


const Medicine = ({medicine}) => {
    return (
        <div>
            <h3>{medicine.productName}</h3>
            <p>atcName: {medicine.atcName}</p>
            <p>actId: {medicine.atcId}</p>
            <p>strength: {medicine.strength}</p>
            <p>substanceName: {medicine.substanceName}</p>
            <p>typeName: {medicine.typeName}</p>
        </div>
    )
}

export default Medicine;
