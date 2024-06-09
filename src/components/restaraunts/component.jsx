import { RestaurantTabs } from "../restaurantTabs/component";
import { Restarunt } from "../restaraunt/component";
import { useState } from "react";
import { useSelector } from "react-redux";

export const Restarunts = () => {
  const restaurantsIds = useSelector((state) => state.restaraunts.ids);
  const [activeRestaurantId, setActiveRestaurantIndex] = useState(
    restaurantsIds[0]
  );

  if (!restaurantsIds || !restaurantsIds?.length) {
    return null;
  }

  return (
    <div className="restaraunts">
      <RestaurantTabs
        restaurantsIds={restaurantsIds}
        activeRestaurantId={activeRestaurantId}
        onTabClick={setActiveRestaurantIndex}
      />
      <Restarunt restaurantId={activeRestaurantId} />
    </div>
  );
};
