'use client';
import React from 'react';
import styles from './styles/VersionsSection.module.css';
import { motion } from 'framer-motion';

const versions = [
  {
    title: 'Minecraft 1.20',
    desc: 'La última versión con nuevas biomas, mobs y bloques.',
    img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Minecraft 1.12',
    desc: 'Versión clásica muy usada para mods y servidores.',
    img: 'https://images.unsplash.com/photo-1468421870903-4df1664ac249?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Minecraft Bedrock',
    desc: 'Edición multiplataforma para consolas, móviles y PC.',
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  },
];

const VersionsSection = () => (
  <section id="versions" className={styles.section}>
    <h2>Versiones de Minecraft</h2>
    <div className={styles['versions-list']}>
      {versions.map((version, i) => (
        <motion.div
          className={styles['version-card']}
          key={version.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 + i * 0.1, ease: [0.23, 1.01, 0.32, 1] }}
        >
          <img src={version.img} alt={version.title} style={{ width: '100%', borderRadius: '0.7rem', marginBottom: '1rem', objectFit: 'cover', height: 100 }} />
          <div className={styles['version-title']}>{version.title}</div>
          <div className={styles['version-desc']}>{version.desc}</div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default VersionsSection; 