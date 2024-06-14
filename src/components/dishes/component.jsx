import { DishContainer } from "../dish/container";

export const Dishes = ({ dishesIds }) => {
  return (
    !!dishesIds?.length > 0 && (
      <ul className="dishes">
        {dishesIds.map((disheId) => (
          <li key={disheId}>
            <DishContainer disheId={disheId} />
          </li>
        ))}
      </ul>
    )
  );
};
