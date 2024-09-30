import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/containers/Layout";
import Home from "./views/home/HomePage";
import HomePage from "./views/projects/DenhanProject";

const router = createBrowserRouter([
  {
    path: "/", element: <Layout />, children: [
      {
        path:"/",
        index: true,
        element:
          <Home projectKey={""} services={{
            twilio: false,
            pushNotifications: false,
            google: false,
            apple: false
          }} serviceStatus={false} sid={""} phoneNumber={""} authenticationToken={""} thresholdMinute={0} thresholdHour={0} thresholdDay={0} />},
      {
        path:"/expin",
        index: true,
        element:
          <Home projectKey={""} services={{
            twilio: false,
            pushNotifications: false,
            google: false,
            apple: false
          }} serviceStatus={false} sid={""} phoneNumber={""} authenticationToken={""} thresholdMinute={0} thresholdHour={0} thresholdDay={0} />
      },
      { path: "/:id", element: <HomePage /> },
    ]
  }
])
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
