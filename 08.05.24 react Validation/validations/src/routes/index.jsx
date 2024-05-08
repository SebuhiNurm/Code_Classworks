import AdminRoot from "../pages/Admin";
import AdminHome from "../pages/Admin/AdminHome";

export const ROUTES = [
    {
        path: "/admin",
        element: <AdminRoot />,
        children: [
            {
                index: true,
                element: <AdminHome />
            }
        ]
    }
]