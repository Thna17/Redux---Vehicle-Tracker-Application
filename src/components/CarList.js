import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";
const CarList = () => {
    const dispatch = useDispatch();
    const cars = useSelector(({cars: {data, searchTerm}}) => {
        return data.filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()));
    })
    const handleCarDelete = (car) => {
        // Assuming this is a function to remove car from the store
        console.log(`Deleting car: ${car.name} - ${car.cost}`)
        // dispatch(removeCar(car.id))
        dispatch(removeCar(car.id))
    }
    const renderedCarList = cars.map((car) => {
        return (
            <div key={car.id} className="panel">
                <p>
                    {car.name} - {car.cost}
                </p>
                <button onClick={() => handleCarDelete(car)} className="button is-danger">
                    Delete
                </button>
            </div>
        )
    })
  return (
    <div className="car-list">
        {renderedCarList}
        </div>
  )
}

export default CarList