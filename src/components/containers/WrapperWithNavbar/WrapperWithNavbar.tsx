import { Outlet } from "react-router-dom";

import Navbar from "../../navbar/navbar";
import Styles from "./WrapperWithNavbar.module.scss";
import Footer from "../../footer/footer";

const WrapperWithNavbar = () => {
  return (
    <div className={Styles.container}>
      <Navbar />
      <div className={Styles.content}>
        <div className={Styles.contentContainer}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default WrapperWithNavbar;
