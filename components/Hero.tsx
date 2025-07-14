'use client';
import React from 'react';
import styles from './styles/Hero.module.css';
import { motion } from 'framer-motion';

const Hero = () => (
  <motion.section
    className={styles.hero}
    initial={{ opacity: 0, y: -40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: [0.23, 1.01, 0.32, 1] }}
  >
    <h1>Bienvenido a Mineralia</h1>
    <p>Tu portal de mods, plugins, shaders, mapas y noticias de Minecraft</p>
  </motion.section>
);

export default Hero; 