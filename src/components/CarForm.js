import { useDispatch, useSelector } from "react-redux"
import { changeName, changeCost, addCar } from "../store"
const CarForm = () => {
    const dispatch = useDispatch();
    const {name, cost } = useSelector((state) => {
        return {
            name: state.form.name,
            cost: state.form.cost
        }
    })
    console.log(name, cost)
    const handleNameChange = (event) => {
        dispatch(changeName(event.target.value))
        console.log(event.target.value)
    }
    const handleSummit = (event) => {

        event.preventDefault();
        // Assuming this is a function to add car to the store
        dispatch(addCar({name, cost}))
        // Reset the form
        dispatch(changeName(''))
        dispatch(changeCost(0))
    }

    const handleCostChange = (event) => {
        const carCost = event.target.value * 1 || 0;
        dispatch(changeCost(carCost))
    }
    return (
      <div className="car-form panel">
        <h4 className="subtitle is-3">Add Car</h4>
        <form onSubmit={handleSummit}>
            <div className="field-group">
                <div className="field">
                    <label className="label">Name</label>
                    <input 
                        className="input is-expanded"
                        value={name}
                        onChange={handleNameChange}
                    />
                </div>

                <div className="field">
                    <label className="label">Cost</label>
                    <input 
                        className="input is-expanded"
                        value={cost || ''}
                        onChange={handleCostChange}
                        type="number"
                    />
                </div>
            </div>
            <div className="field">
                <button className="button is-link">Submit</button>
            </div>
        </form>
      </div>
    )
  }
  
  export default CarForm