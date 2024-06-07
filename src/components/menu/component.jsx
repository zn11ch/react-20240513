import { DishesContainer } from "../dishes/container";

export const Menu = ({ restaurantId }) => {
  return (
    <div className="menu">
      <h3> Menu </h3>
      <DishesContainer restaurantId={restaurantId} />
    </div>
  );
};
