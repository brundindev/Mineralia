'use client';
import React from 'react';
import styles from './styles/Footer.module.css';
import { motion } from 'framer-motion';

const Footer = () => (
  <motion.footer
    className={styles.footer}
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: [0.23, 1.01, 0.32, 1] }}
  >
    <p>&copy; {new Date().getFullYear()} Mineralia. No oficial de Mojang/Microsoft.</p>
  </motion.footer>
);

export default Footer; 