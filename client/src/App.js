import AddUser from "./AddUser/AddUser";
import "./App.css";
import User from "./getUser/User";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UpdateUser from "./UpdateUser/UpdateUser";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <User />,
    },
    {
      path: "/add",
      element: <AddUser />,
    },
    {
      path: "/update/:id",
      element: <UpdateUser />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
