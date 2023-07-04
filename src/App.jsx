import RootLayout from "./layout/RootLayout";
import JobDetails from "./pages/JobOffer/JobDetails";
import Home from "./pages/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { loader as jobDetailsLoader } from "./pages/JobOffer/JobDetails";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: ":jobId",
        element: <JobDetails />,
        loader: jobDetailsLoader,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
