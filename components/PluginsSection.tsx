'use client';
import React from 'react';
import styles from './styles/PluginsSection.module.css';
import { motion } from 'framer-motion';

const plugins = [
  {
    title: 'EssentialsX',
    desc: 'Comandos y utilidades esenciales para servidores.',
  },
  {
    title: 'WorldEdit',
    desc: 'Herramientas avanzadas para editar el mundo rápidamente.',
  },
  {
    title: 'LuckPerms',
    desc: 'Sistema avanzado de permisos y grupos.',
  },
];

const PluginsSection = () => (
  <section id="plugins" className={styles.section}>
    <h2>Plugins de Minecraft</h2>
    <div className={styles['plugins-list']}>
      {plugins.map((plugin, i) => (
        <motion.div
          className={styles['plugin-card']}
          key={plugin.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 + i * 0.1, ease: [0.23, 1.01, 0.32, 1] }}
        >
          <div className={styles['plugin-title']}>{plugin.title}</div>
          <div className={styles['plugin-desc']}>{plugin.desc}</div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default PluginsSection; 