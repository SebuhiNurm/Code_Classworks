import { Outlet } from "react-router-dom";
import HeaderAdmin from "../../components/Admin/Header";
function AdminRoot() {
  return (
    <>
      <HeaderAdmin />
      <Outlet />
    </>
  )
}

export default AdminRoot