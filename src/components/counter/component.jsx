import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme.js";
import { UserAuthContext } from "../../contexts/user-auth.js";

export const Counter = ({ value, increment, decrement }= {}) => {

  const {theme} = useContext(ThemeContext);
  const { userAuth } = useContext(UserAuthContext);
  return (
    <>
    { userAuth ? (
      <div>
        <button  className={theme} onClick={increment}> + </button>
        <span> {value} </span>
        <button  className={theme} onClick={decrement}> - </button>
      </div>
    ) : null }
   </>

  );
};
