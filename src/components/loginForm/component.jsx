import { useContext, useState } from "react";
import { UserAuthContext } from "../../contexts/user-auth";
import { ModalContext } from "../../contexts/modal";

export const LoginForm = () => {
  const [user, setUser] = useState("");
  const { setUserAuth } = useContext(UserAuthContext);
  const { closeModal } = useContext(ModalContext);

  return (
    <div className="login-form">
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        name="username"
        value={user}
        onChange={(e) => {
          setUser(e.target.value);
        }}
      />
      <div>
        <button
          disabled={!user}
          id="login"
          onClick={() => {
            setUserAuth(user);
            closeModal();
          }}
        >
          Login
        </button>
        <button
          id="cancel"
          onClick={() => {
            setUserAuth(null);
            closeModal();
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
