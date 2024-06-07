import { Dishes } from "../dishes/component";

export const Menu = ({ dishesIds }) => {
  return (
    <div className="menu">
      <h3> Menu </h3>
      <Dishes dishesIds={dishesIds} />
    </div>
  );
};
