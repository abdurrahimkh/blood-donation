import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import NotAuth from "../components/NotAuth";

const AdminProtected = () => {
  const activeUser = useSelector((state) => state.authReducer.activeUser);
  if (activeUser && activeUser.is_admin === true) {
    return <Outlet />;
  } else {
    return <NotAuth />;
  }
};
export default AdminProtected;
