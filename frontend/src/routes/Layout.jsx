import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Fragment } from "react";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
