import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import SignedInLayout from "../layouts/signedin-layout";
import Facebook from "../pages/Facebook/Facebook"
import About from "../pages/About/About";
import Login from "../pages/Login/Login";

const signedInRouter = createBrowserRouter([
  {
    path: "/",
    element: <SignedInLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/facebook",
        element: <Facebook />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/*",
        element: <h1>Not Found</h1>,
      },
    ],
  },
]);

export default signedInRouter;
