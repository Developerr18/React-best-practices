import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

const CarList = () => {
  const cars = useSelector((state) => state.cars.carsList);
  const dispatch = useDispatch();

  const renderedCars = cars.map((car) => {
    return (
      <>
        <div key={car.id} className="panel">
          <p>
            {car.name} - ${car.cost}
          </p>
          <button
            className="button is-danger"
            onClick={() => dispatch(removeCar(car.id))}
          >
            Delete
          </button>
        </div>
      </>
    );
  });

  return (
    <div className="car-list">
      {renderedCars}
      <hr />
    </div>
  );
};

export default CarList;
