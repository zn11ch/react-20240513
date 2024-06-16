import { NavLink } from "react-router-dom";
import { Button } from "../button/component";

export const Tab = ({ title, to }) => {
  return (
    <NavLink to={to} className={({ isActive }) => (isActive ? "active" : null)}>
      <Button>{title}</Button>
    </NavLink>
  );
};
