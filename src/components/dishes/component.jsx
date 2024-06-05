import { Dish } from "../dish/component";

export const Dishes = ({ dishesIds }) => {

  return (
    <ul className="dishes">
      {dishesIds.map((disheId) => (
        <li key={disheId}>
          <Dish disheId={disheId} />
        </li>
      ))}
    </ul>
  );
};
