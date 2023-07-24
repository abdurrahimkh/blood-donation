import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Login from "../pages/user/login";
import Layout from "./Layout";

const UserProtected = () => {
  const activeUser = useSelector((state) => state.authReducer.activeUser);
  if (activeUser) {
    return <Outlet />;
  } else {
    return (
      <Layout>
        <Login />
      </Layout>
    );
  }
};
export default UserProtected;
