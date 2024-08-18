import { useSelector } from "react-redux"
const CarList = () => {
    const cars = useSelector((state) => {
        return state.cars.data;
    })
    const handleCarDelete = (car) => {
        // Assuming this is a function to remove car from the store
        console.log(`Deleting car: ${car.name} - ${car.cost}`)
        // dispatch(removeCar(car.id))
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