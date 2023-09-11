import WhatsNew from "./WhatsNew/WhatsNew";
import Styles from "./home.module.scss";
import { motion } from "framer-motion";

const containerVariants = {
  initial: {
    x: "-100vw",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
};

const firstContainerVariants = {
  initial: {
    opacity: 0,
    y: "-100vh",
  },
  animate: {
    y: -80,
    x: 30,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const buttonVariants = {
  initial: {
    x: "-100vw",
  },
  animate: {
    x: 60,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  hover: {
    boxShadow: "0px 0px 20px 2px #ffffff",
    textShadow: "0px 0px 60px #ffffff",
    transition: {
      duration: 0.3,
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
    >
      <div className={Styles.firstContainer}>
        <motion.div className={Styles.intro} variants={firstContainerVariants}>
          <h1>SSB BRO</h1>
          <p>
            " The best online SSB platform. Get trained online from your home. "
          </p>
        </motion.div>

        <motion.button
          variants={buttonVariants}
          className={Styles.chatButton}
          whileHover={"hover"}
          initial="initial"
          animate="animate"
        >
          <a
            href="https://api.whatsapp.com/send/?phone=917906127544&text&type=phone_number&app_absent=0"
            target="_"
          >
            Let's Chat
          </a>
        </motion.button>
      </div>

      <WhatsNew />
    </motion.div>
  );
};

export default Home;
