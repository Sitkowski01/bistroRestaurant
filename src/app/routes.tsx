import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/root-layout";
import { HomePage } from "./components/home-page";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "*", Component: HomePage },
    ],
  },
]);
