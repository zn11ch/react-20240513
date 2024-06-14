import { DishContainer } from "../dish/container";

export const Dishes = ({ dishes }) => {
  return (
    !!dishes?.length > 0 && (
      <ul className="dishes">
        {dishes.map((dish) => (
          <li key={dish.id}>
            <DishContainer dish={dish} />
          </li>
        ))}
      </ul>
    )
  );
};
