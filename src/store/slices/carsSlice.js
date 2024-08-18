import { createSlice, nanoid } from '@reduxjs/toolkit';

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        cars: []
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        addCar(state, action) {
            // Assumption:
            //action.payload === {name: 'cars', cost: 40}
            state.cars.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid()
            })
        },
        removeCar(state, action) {
            // Assumption:
            // action.payload == the id of the car we want to remove
            const update = state.cars.filter((car) => {
                return car.id !== action.payload
            })
            state.cars = update;
        }
    }
})

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;