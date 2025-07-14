'use client';
import React from 'react';
import styles from './styles/Navbar.module.css';
import { motion } from 'framer-motion';

const Navbar = () => (
  <motion.nav
    className={styles.navbar}
    initial={{ y: -60, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.7, ease: [0.23, 1.01, 0.32, 1] }}
  >
    <div className={styles['navbar-logo']}>Mineralia</div>
    <ul className={styles['navbar-links']}>
      <li><a href="#mods">Mods</a></li>
      <li><a href="#plugins">Plugins</a></li>
      <li><a href="#shaders">Shaders</a></li>
      <li><a href="#blog">Blog</a></li>
      <li><a href="#info">Información</a></li>
      <li><a href="#versions">Versiones</a></li>
      <li><a href="#news">Noticias</a></li>
      <li><a href="#videos">Videos</a></li>
      <li><a href="#maps">Mapas</a></li>
    </ul>
  </motion.nav>
);

export default Navbar; 