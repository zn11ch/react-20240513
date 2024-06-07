import { DishContainer } from "../dish/container";

export const Dishes = ({ dishesIds }) => {
  return (
    <ul className="dishes">
      {dishesIds.map((disheId) => (
        <li key={disheId}>
          <DishContainer disheId={disheId} />
        </li>
      ))}
    </ul>
  );
};
