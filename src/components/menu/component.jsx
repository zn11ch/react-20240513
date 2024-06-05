import { Dishes } from "../dishes/component";

export const Menu = ({ dishesIds }) => {
  return (
    !!dishesIds?.length > 0 && (
      <div className="menu">
        <h3> Menu </h3>
        <Dishes dishesIds={dishesIds} />
      </div>
    )
  );
};
