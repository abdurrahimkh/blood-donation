import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Animation = ({ children, left }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const anime = useAnimation();

  useEffect(() => {
    if (isInView) {
      anime.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref}>
      <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} initial="hidden" animate={anime} transition={{ duration: 1 }}>
        {children}
      </motion.div>
    </div>
  );
};

export default Animation;
