import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    carsList: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      const { name, cost } = action.payload;
      state.carsList.push({ name, cost, id: nanoid() });
    },
    /*
    addCar: {
      reducer: (state, action) => {
        state.carsList.push(action.payload);
      },
      prepare: (name, cost) => ({
        payload: {
          id: nanoid(),
          name,
          cost,
        },
      }),
    },*/
    removeCar(state, action) {
      state.carsList = state.carsList.filter(
        (car) => car.id !== action.payload
      );
    },
  },
});

export const { addCar, removeCar, changeSearchTerm } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
