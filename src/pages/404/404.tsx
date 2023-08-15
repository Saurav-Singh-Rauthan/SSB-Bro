import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Styles from "./404.module.css";
import NotFoundImg from "../../assets/images/indian-army-man-riding-tank.png";

const containerVariants = {
  initial: {
    x: "-100vw",
    translateY: "-50%",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  animate: {
    x: 0,
    translateY: "-50%",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const NotFound = () => {
  return (
    <motion.div
      className={Styles.container}
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="initial"
    >
      <img src={NotFoundImg} alt="404_img" />
      <p>
        The requested page is not found. March back to <Link to="/">Home</Link>{" "}
        son!
      </p>
    </motion.div>
  );
};

export default NotFound;
