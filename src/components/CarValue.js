import { useSelector } from "react-redux"

const CarValue = () => {
    const totalCost = useSelector(({cars: {data, searchTerm}}) => {
        const filteredCar = data.filter((car) => {
            return car.name.toLowerCase().includes(searchTerm.toLowerCase())
        })
        let cost = 0;
        // for (let car of filteredCar) {
        //     cost += car.cost;
        // }
        // return cost;

        return filteredCar.reduce((acc, car) => acc + car.cost, 0)
    })
    return (
        <div className="car-value">
            Total Cost: ${totalCost}
        </div>
  )
}

export default CarValue