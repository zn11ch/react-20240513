import { useContext, useState } from "react";
import { UserAuthContext } from "../../contexts/user-auth";
import { Modal } from "../modal/component";
import { LoginForm } from "../loginForm/component";

export const LoginButton = () => {
  const { userAuth, setUserAuth} = useContext(UserAuthContext);
  const [isVisible, setIsVisible] = useState(false);


  return (
    <>
      {userAuth ? (
        <button
          onClick={() => {
            setUserAuth(null);
          }}
        >
          <span style={{ color: '#01b070', fontSize: '18px',  fontWeight: "bold"}}>{userAuth}</span> Logout
        </button>
      ) : (
        <button
          onClick={() => {
            setIsVisible(!isVisible);
          }}
        >
          Login
        </button>
      )}

      {isVisible ? (
        <Modal setIsVisible={setIsVisible}>
          <LoginForm />
        </Modal>
      ) : null}
    </>
  );
};
