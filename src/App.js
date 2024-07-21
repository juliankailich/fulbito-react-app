import React from "react";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { createRoot } from "react-dom/client";
import { WelcomeInput } from "./components/welcomeInput";
import { Home } from "./pages/home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <WelcomeInput />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ]);

  createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );
}

export default App;
