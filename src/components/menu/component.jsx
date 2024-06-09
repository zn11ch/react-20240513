import { Dishes } from "../dishes/component";

export const Menu = ({ dishesIds }) => {
  return dishesIds.length === 0 ? (
    <div>No dishes available</div>
  ) : (
    !!dishesIds.length && (
      <div>
        <h3>Menu</h3>
        <Dishes dishesIds={dishesIds} />
      </div>
    )
  );
};
