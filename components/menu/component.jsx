import { Dishes } from "../dishes/component";

export const Menu = ({ dishes }) => {
  return (
    <div className="menu">
      <h3> Menu </h3>
      <Dishes dishes={dishes} />
    </div>
  );
};
