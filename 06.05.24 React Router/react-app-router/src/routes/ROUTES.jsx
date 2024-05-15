import AddEmployee from "../pages/Admin/AddEmployee";
import EditEmployee from "../pages/Admin/EditEmployee";
import AdminEmployee from "../pages/Admin/Employee";
import AdminRoot from "../pages/Admin/AdminRoot";

import MainEmployee from "../pages/Main/Employee";
import EmployeeDetail from "../pages/Main/EmployeeDetail";
import Favorites from "../pages/Main/Favorites";
import Home from "../pages/Main/Home";
import NotFound from "../pages/Main/NotFound";
import MainRoot from "../pages/Main/MainRoot";

export const ROUTES = [
  {
    path: "/admin",
    element: <AdminRoot/>,
    children: [
      {
        index: true,
        element: <AdminEmployee/>,
      },
      {
        path: "add-employee",
        element: <AddEmployee />,
      },
      {
        path: "edit-employee",
        element: <EditEmployee />,
      },
    ],
  },
  {
    path: "/",
    element: <MainRoot />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "employee",
        element: <MainEmployee />,
      },
      {
        path: "employee-detail",
        element: <EmployeeDetail />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];
