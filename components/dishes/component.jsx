import { Dish } from "../dish/component";

export const Dishes = ({ dishes }) => {
  return (
    <ul className="dishes">
      {dishes.map((dish) => (
        <li key={dish.id}>
          <Dish dish={dish} />
        </li>
      ))}
    </ul>
  );
};
