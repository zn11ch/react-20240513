import "./App.css";
import { Layout } from "./components/layout/component";
import { ThemeContextProvider } from "./contexts/theme/provider.jsx";
import { UserContextProvider } from "./contexts/user/provider.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/index.js";
import { Restaurant } from "./components/restaurant/component";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/home.jsx";
import { ContactsPage } from "./pages/contacts.jsx";
import { RestaurantsPage } from "./pages/restaurants.jsx";
import { MenuContainer } from "./components/menu/container.jsx";
import { ReviewsContainer } from "./components/reviews/container.jsx";

import { DishPage } from "./pages/dish.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "contacts", element: <ContactsPage /> },
      { path: "dish/:dishId", element: <DishPage /> },
      {
        path: "restaurants",
        element: <RestaurantsPage />,
        children: [
          {
            path: ":restaurantId",
            element: <Restaurant />,
            children: [
              { path: "menu", element: <MenuContainer /> },
              { path: "reviews", element: <ReviewsContainer /> },
            ],
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <UserContextProvider>
        <ThemeContextProvider>
          <RouterProvider router={router}></RouterProvider>
        </ThemeContextProvider>
      </UserContextProvider>
    </Provider>
  );
}

export default App;
