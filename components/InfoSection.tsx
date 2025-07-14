'use client';
import React from 'react';
import styles from './styles/InfoSection.module.css';
import { motion } from 'framer-motion';

const infos = [
  {
    title: '¿Qué es Minecraft?',
    desc: 'Minecraft es un juego de construcción, aventura y supervivencia en mundos generados proceduralmente.',
    img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Trucos y comandos útiles',
    desc: 'Descubre comandos y trucos para facilitar tu experiencia en el juego.',
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Historia de Minecraft',
    desc: 'Desde su lanzamiento en 2009, Minecraft ha evolucionado hasta convertirse en un fenómeno global.',
    img: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80',
  },
];

const InfoSection = () => (
  <section id="info" className={styles.section}>
    <h2>Información sobre Minecraft</h2>
    <div className={styles['info-list']}>
      {infos.map((info, i) => (
        <motion.div
          className={styles['info-card']}
          key={info.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 + i * 0.1, ease: [0.23, 1.01, 0.32, 1] }}
        >
          <img src={info.img} alt={info.title} style={{ width: '100%', borderRadius: '0.7rem', marginBottom: '1rem', objectFit: 'cover', height: 140 }} />
          <div className={styles['info-title']}>{info.title}</div>
          <div className={styles['info-desc']}>{info.desc}</div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default InfoSection; 