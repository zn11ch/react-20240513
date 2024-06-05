import { useUser } from "../../contexts/user/hooks.js";
import { Button } from "../button/component.jsx";

export const Counter = ({ value, increment, decrement } = {}) => {
  const { user } = useUser();
  return (
    <>
      {user ? (
        <div>
          <Button onClick={increment}> + </Button>
          <span> {value} </span>
          <Button onClick={decrement}> - </Button>
        </div>
      ) : null}
    </>
  );
};
