import "./App.css";
// import { restaurants } from "../materials/mock.js";
import { Restaurants } from "./components/restaurants/component.jsx";
import { Layout } from "./components/layout/component";
import { ThemeContextProvider } from "./contexts/theme/provider.jsx";
import { UserContextProvider } from "./contexts/user/provider.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/index.js";


function App() {

  return (
    <Provider store={store}>
      <UserContextProvider>
        <ThemeContextProvider>
          <Layout>
            <Restaurants />
          </Layout>
        </ThemeContextProvider>
      </UserContextProvider>
    </Provider>
  );
}

export default App;
