import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";
import Dashboard from "./Components/Dashboard/Dashbord";
import NotFound from "./Components/NotFound";
import Home from "./Components/Home/Home";
import BookDetails from "./Components/BookDetails/BookDetails";
import StoredBook from "./Components/StoredBook/StoredBook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "book/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("/BookData.json"),
      },
      {
        path: "storedBook",
        element: <StoredBook></StoredBook>,
        loader: () => fetch("/BookData.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
