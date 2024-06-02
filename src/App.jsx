import "./App.css";
import { restaurants } from "../materials/mock.js";
import { Restarunts } from "./components/restaraunts/component";
import { ThemeContext } from "./contexts/theme.js";
import { UserAuthContext } from "./contexts/user-auth.js";
import { useState } from "react";
import { Layout } from "./components/layout/component";

function App() {
  const [theme, setTheme] = useState("light");
  const [userAuth, setUserAuth] = useState(null);

  return (
    <>
      <UserAuthContext.Provider value={{ userAuth, setUserAuth }}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <Layout>
            <Restarunts restaurants={restaurants} />
          </Layout>
        </ThemeContext.Provider>
      </UserAuthContext.Provider>
    </>
  );
}

export default App;
