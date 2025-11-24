import { useEffect, useState } from "react";
import { motion, useAnimation } from "motion/react";

const MyFlower = ({ constraintsRef, size = 20 }) => {
  const controls = useAnimation();

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [velocity, setVelocity] = useState({
    x: 1 + Math.random() * 2,
    y: 1 + Math.random() * 2,
  });

  useEffect(() => {
    const animate = () => {
      const parent = constraintsRef.current?.getBoundingClientRect();
      if (!parent) return;

      let { x, y } = position;
      let { x: vx, y: vy } = velocity;

      x += vx;
      y += vy;

      if (x <= 0 || x >= parent.width - size) vx = -vx;
      if (y <= 0 || y >= parent.height - size) vy = -vy;

      setVelocity({ x: vx, y: vy });
      setPosition({ x, y });

      controls.start({ x, y, transition: { duration: 0, ease: "linear" } });
    };
    const interval = setInterval(animate, 16); // ~60 FPS
    return () => clearInterval(interval);
  }, [position, velocity, controls, size]);

  return (
    <motion.div
      drag
      dragConstraints={constraintsRef}
      className="flower bg-hover absolute hidden lg:block"
      animate={controls}
    />
  );
};

export default MyFlower;
