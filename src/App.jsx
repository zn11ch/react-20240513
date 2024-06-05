import "./App.css";
import { restaurants } from "../materials/mock.js";
import { Restarunts } from "./components/restaraunts/component";
import { Layout } from "./components/layout/component";
import { ThemeContextProvider } from "./contexts/theme/provider.jsx";
import { UserContextProvider } from "./contexts/user/provider.jsx";

function App() {
  return (
    <UserContextProvider>
      <ThemeContextProvider>
        <Layout>
          <Restarunts restaurants={restaurants} />
        </Layout>
      </ThemeContextProvider>
    </UserContextProvider>
  );
}

export default App;
