import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Error from "./components/Error.jsx";
import Porducts from "./components/Porducts.jsx";
import Cart from "./components/Cart.jsx";
import { Provider } from "react-redux";
import { store } from "./reduxToolKit/store.js";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Porducts /> },
      { path: "product", element: <Porducts /> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
);
