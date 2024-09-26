import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Error from "./components/Error";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";

// lazy loading for optimizing app
const About = lazy(()=> import("./components/About"))
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
      <Footer />
    </div>
  );
};

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path:"/",
        element: <Body/>
      },

      {
        path:"/about",
        // suspense for loading a lazy loading component 
        element:  <Suspense fallback={<h1>Loading</h1>}><About/></Suspense>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu/>
      }
    ],
    errorElement: <Error/>
  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoutes}/>);
