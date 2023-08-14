import { Link } from "react-router-dom";

import Styles from "./404.module.css";
import NotFoundImg from "../../assets/images/indian-army-man-riding-tank.png";

const NotFound = () => {
  return (
    <div className={Styles.container}>
      <img src={NotFoundImg} alt="404_img" />
      <p>
        The requested page is not found. March back to <Link to="/">Home</Link>{" "}
        son!
      </p>
    </div>
  );
};

export default NotFound;
