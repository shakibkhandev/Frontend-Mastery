"use client";
import styles from "@/css/counter.module.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

interface CounterProps {
  icon: React.ReactNode;
  count: number;
  label: string;
  color: string;
}

const CounterCard = ({ icon, count, label, color }: CounterProps) => {
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = count / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= count) {
        setDisplayCount(count);
        clearInterval(timer);
      } else {
        setDisplayCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [count]);

  return (
    <motion.div
      className={styles.counter}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      style={{
        borderColor: color,
        boxShadow: `0 0 20px ${color}33`,
      }}
    >
      <motion.div
        className={styles.iconWrapper}
        style={{ color }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {icon}
      </motion.div>
      <motion.h2
        className={styles.count}
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{ color: "#e2e8f0" }}
      >
        {displayCount.toLocaleString()}
      </motion.h2>
      <p className={styles.label}>{label}</p>
    </motion.div>
  );
};

export default function Page() {
  const counters: CounterProps[] = [
    {
      icon: <FaDiscord size={40} />,
      count: 8000,
      label: "Discord",
      color: "#7289DA",
    },
    {
      icon: <FaInstagram size={40} />,
      count: 13000,
      label: "Instagram",
      color: "#E4405F",
    },
    {
      icon: <FaYoutube size={40} />,
      count: 5000,
      label: "YouTube",
      color: "#FF0000",
    },
  ];

  return (
    <div className={styles.container}>
      <motion.section
        className={styles.section}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className={styles.title}
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Community
        </motion.h1>
        <div className={styles.countersGrid}>
          {counters.map((counter, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <CounterCard {...counter} />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
