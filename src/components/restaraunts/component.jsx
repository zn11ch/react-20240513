import { Restarunt } from "../restaraunt/component";
import { useState } from "react";

export const Restarunts = ({ restaurants }) => {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);

  if (!restaurants || !restaurants?.length) {
    return null;
  }

  return (
    <div className="restaraunts">
      {restaurants.map((restaurant, restaurantIndex) => (
        <button
          key={restaurant.id}
          onClick={() => setActiveRestaurantIndex(restaurantIndex)}
          className={
            activeRestaurantIndex === restaurantIndex ? "btn-active" : null
          }
        >
          {restaurant.name}
        </button>
      ))}

      <Restarunt restaurant={restaurants[activeRestaurantIndex]} />
    </div>
  );
};
