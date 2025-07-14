'use client';
import React from 'react';
import styles from './styles/ModsSection.module.css';
import { motion } from 'framer-motion';

const mods = [
  {
    title: 'OptiFine',
    desc: 'Mejora el rendimiento y añade soporte para shaders y zoom.',
  },
  {
    title: 'Just Enough Items (JEI)',
    desc: 'Consulta recetas y usos de cualquier objeto en el juego.',
  },
  {
    title: 'JourneyMap',
    desc: 'Mapa interactivo en tiempo real para explorar el mundo.',
  },
];

const ModsSection = () => (
  <section id="mods" className={styles.section}>
    <h2>Mods de Minecraft</h2>
    <div className={styles['mods-list']}>
      {mods.map((mod, i) => (
        <motion.div
          className={styles['mod-card']}
          key={mod.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 + i * 0.1, ease: [0.23, 1.01, 0.32, 1] }}
        >
          <div className={styles['mod-title']}>{mod.title}</div>
          <div className={styles['mod-desc']}>{mod.desc}</div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ModsSection; 