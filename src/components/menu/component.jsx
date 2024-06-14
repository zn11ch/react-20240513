import { Dishes } from "../dishes/component";

export const Menu = ({ dishes }) => {
  
  return dishes.length === 0 ? (
    <div>No dishes available</div>
  ) : (
    !!dishes.length > 0 && (
      <div>
        <h3>Menu</h3>
        <Dishes dishes={dishes} />
      </div>
    )
  );
};
