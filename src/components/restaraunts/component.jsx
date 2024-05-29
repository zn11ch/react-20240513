import { RestaurantTabs } from "../restaurantTabs/component";
import { Restarunt } from "../restaraunt/component";
import { useState } from "react";

export const Restarunts = ({ restaurants }) => {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);

  if (!restaurants || !restaurants?.length) {
    return null;
  }

  return (
    <div className="restaraunts">
      <RestaurantTabs
        restaurants={restaurants}
        activeRestaurantIndex={activeRestaurantIndex}
        onTabClick={setActiveRestaurantIndex}
      />
      <Restarunt restaurant={restaurants[activeRestaurantIndex]} />
      <Restarunt restaurant={restaurants[activeRestaurantIndex]} />
      <Restarunt restaurant={restaurants[activeRestaurantIndex]} />
      <Restarunt restaurant={restaurants[activeRestaurantIndex]} />
      <Restarunt restaurant={restaurants[activeRestaurantIndex]} />
    </div>
  );
};
