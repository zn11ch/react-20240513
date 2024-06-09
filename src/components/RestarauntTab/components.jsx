import { Button } from "../button/component";
import { useSelector } from "react-redux";

export const Tab = ({ restaurantId, onClick, isActive, className }) => {
  const restaraunt = useSelector(
    (state) => state.restaraunts.entities[restaurantId]
  );
  return (
    <Button onClick={onClick} disabled={isActive} className={className}>
      {restaraunt.name}
    </Button>
  );
};
