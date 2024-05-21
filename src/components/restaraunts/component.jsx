import { Restarunt } from "../restaraunt/component";

export const Restarunts = ({ restaurants }) => {
  return (
    <div className="restaraunts">
      {restaurants.map((restaurant) => (
        <Restarunt key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};
