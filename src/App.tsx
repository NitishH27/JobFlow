import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import RootLayout from "./pages/RootLayout";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import MyApplications from "./pages/MyApplications";
import MyProfile from "./pages/MyProfile";
import SavedJobs from "./pages/SavedJobs";
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
        {
          path:"my-applications",
          element:<MyApplications/>
        },
        {
          path: "my-profile",
          element: <MyProfile />,
        },
        {
          path: "saved-jobs",
          element: <SavedJobs />,
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
