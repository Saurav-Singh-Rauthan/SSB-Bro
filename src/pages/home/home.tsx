import Styles from "./home.module.scss";
import { motion } from "framer-motion";

const containerVariants = {
  initial: {
    x: "-100vw",
    transition: {
      delay: 0.5,
      ease: "easeInOut",
    },
  },
  animate: {
    x: 0,
    transition: {
      delay: 0.5,
      ease: "easeInOut",
    },
  },
};

const Home = () => {
  return (
    <motion.div
      className={Styles.mainContainer}
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="initial"
    ></motion.div>
  );
};

export default Home;
