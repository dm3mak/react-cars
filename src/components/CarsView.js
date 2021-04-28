import React from 'react';
import { Table } from 'react-bootstrap';
function CarsView(){
    
    return (
        <Table striped className="my-table">
            <thead>
                <tr>
                    <th>Brand</th>
                    <th>Model</th>
                    <th>Year</th>
                    <th>Km</th>
                    <th>KmPearYear</th>
                </tr>
            </thead>
        </Table>
    )
}
export default CarsView;