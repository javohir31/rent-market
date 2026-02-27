import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home"
import Layout from "./pages/Layout"
import Apply from "./pages/Apply";
import Catalog from "./pages/Catalog";
import Company from "./pages/Company";
import Business from "./pages/Business";
import WishlistPage from "./pages/WishlistPage";
import CartPage from "./pages/CartPage";
import { FavoritesProvider } from "../FavoritesContext";
import { CartProvider } from "../CartContext";



function App() {

 const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/catalog",
          element: <Catalog />,
        },
        {
          path: "/howtoapply",
          element: <Apply />,
        },
        {
          path: "/aboutthecompany",
          element: <Company />,
        },
        {
          path: "/forbusiness",
          element: <Business />,
        },
        {
          path: "/favorites",
          element: <WishlistPage />,
        },
        {
          path: "/cart",
          element: <CartPage />,
        },
      ],
    },
  ]);

  return (
    <FavoritesProvider>
      <CartProvider>
        <RouterProvider router={routes} />
      </CartProvider>
    </FavoritesProvider>
  );
}

export default App