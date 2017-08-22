import React from 'react';
import { ListGroup, ListGroupItem, Col} from 'react-bootstrap/lib';

const MedicineList = ({listOfMedicines}) => {
    let medicines = listOfMedicines.map((medicine) => {
        return (
        <Col sm={6} md={4} key={medicine.id}>
            <ListGroupItem className='MedicinList-item'>{medicine.productName}</ListGroupItem>
        </Col>
        )
    });

    return (
        <div>
            <h2>Medicine List</h2>
            <ListGroup>
                {medicines}
            </ListGroup>
        </div>
    )
}

export default MedicineList;
