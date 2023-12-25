import { motion } from "framer-motion";
import { ReactElement } from "react";

type RouteWrapperProps = {
  children: ReactElement;
};

const RouteWrapper = ({ children }: RouteWrapperProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default RouteWrapper;
