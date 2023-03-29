import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MusiquePage from "./components/MusiquePage";
import ErrorPage from "./components/ErrorPage";
import { QueryClient, QueryClientProvider } from "react-query";
import MusiqueDetailPage from "./components/MusiqueDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MusiquePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "musique/:musiqueId",
    element: <MusiqueDetailPage />,
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
