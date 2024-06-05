import { Button } from "../button/component";
import { useUser } from "../../contexts/user/hooks";
import { useState } from "react";

export const LoginForm = ({ onClose }) => {
  const { setUser } = useUser();
  const [name, setName] = useState("");

  return (
    <div className="login-form">
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        name="username"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <div>
        <Button
          disabled={!name}
          id="login"
          onClick={() => {
            setUser(name);
            onClose();
          }}
        >
          Login
        </Button>
        <Button
          id="cancel"
          onClick={() => {
            setUser(null);
            onClose();
          }}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};
