import { useMemo, useState } from "react";
import { UserContext } from "./context";

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  //   const toggleuser = () => {
  //     setuser(() => (user === userS.light ? userS.dark : userS.light));
  //   };

  const contextValue = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user],
  );

  // note: we are passing the context value to the provider wrapped in useMemo to avoid creating a new object  and triggering a re-render all child components every time when the user changes
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
