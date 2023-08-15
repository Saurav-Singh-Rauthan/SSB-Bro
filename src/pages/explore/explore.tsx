import { motion } from "framer-motion";

const containerVariants = {
  initial: {
    x: "-100vw",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const Explore = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="initial"
    >
      <p>Explore section</p>
    </motion.div>
  );
};

export default Explore;
