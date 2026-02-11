import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home"
import Layout from "./pages/Layout"
import Catalog from "./pages/Catalog";
import Apply from "./pages/Apply";
import Company from "./pages/Company";
import Business from "./pages/Business";



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
      ],
    },
  ]);

  return (
      <RouterProvider router={routes} />
  );
}

export default App