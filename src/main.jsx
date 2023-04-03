import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MusiquePage from "./components/MusiquePage";
import ErrorPage from "./components/ErrorPage";
import { QueryClient, QueryClientProvider } from "react-query";
import MusiqueDetailPage from "./components/MusiqueDetailPage";
import Root from "./components/Root";
import { Auth0Provider } from "@auth0/auth0-react";
import Profil from "./components/Profil";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { green } from "@mui/material/colors";

const themeOptions = createTheme({
  palette: {
    mode: "dark",
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "musiques/:musiqueId",
        element: <MusiqueDetailPage />,
      },
      {
        path: "musiques",
        element: <MusiquePage />,
      },
      {
        path: "profil",
        element: <Profil />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={themeOptions}>
      <CssBaseline />
      <Auth0Provider
        domain="dev-f0azx6aq.us.auth0.com"
        clientId="A0Mlx10Z3lp1GCTUS5bB8GMLCK3xIDSz"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </Auth0Provider>
    </ThemeProvider>
  </React.StrictMode>
);
