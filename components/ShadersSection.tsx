'use client';
import React from 'react';
import styles from './styles/ShadersSection.module.css';
import { motion } from 'framer-motion';

const shaders = [
  {
    title: 'BSL Shaders',
    desc: 'Iluminación realista, reflejos y agua mejorada.',
  },
  {
    title: 'SEUS',
    desc: 'Sombras y efectos de luz avanzados para un look cinematográfico.',
  },
  {
    title: 'Sildur’s Vibrant Shaders',
    desc: 'Colores vibrantes y efectos atmosféricos impresionantes.',
  },
];

const ShadersSection = () => (
  <section id="shaders" className={styles.section}>
    <h2>Shaders de Minecraft</h2>
    <div className={styles['shaders-list']}>
      {shaders.map((shader, i) => (
        <motion.div
          className={styles['shader-card']}
          key={shader.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 + i * 0.1, ease: [0.23, 1.01, 0.32, 1] }}
        >
          <div className={styles['shader-title']}>{shader.title}</div>
          <div className={styles['shader-desc']}>{shader.desc}</div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ShadersSection; 