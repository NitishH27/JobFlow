import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import RootLayout from "./pages/RootLayout";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
const queryClient = new QueryClient();
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "signup",
          element: <SignUp />,
        },
        {
          path: "dashboard",
          element: <Dashboard />,
        },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </CssBaseline>
    </QueryClientProvider>
  );
}

export default App;
