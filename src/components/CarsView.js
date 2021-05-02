import React from 'react';
import { Jumbotron, Table } from 'react-bootstrap';
function CarsView({carsData}){

    const [currentCar, chooseCar] = React.useState({});
    const choosenCar =(car) =>{
        chooseCar(car);
    }
    const carRows = carsData.map( car => {
        return(
            <tr key={car.id} onClick={() => choosenCar(car)}>
                <td>{car.brand}</td>
                <td>{car.model}</td>
                <td>{car.year}</td>
                <td>{car.km}</td>
                <td>{car.kmPerYear()}</td>
            </tr>
        )
    })
    return (
        <div>
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
            <tbody>
                {carRows}
            </tbody>
        </Table>
        <Jumbotron>
            <h1>{currentCar.brand}</h1>
        </Jumbotron>
        </div>
    )
}
export default CarsView;