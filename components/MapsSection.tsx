'use client';
import React from 'react';
import styles from './styles/MapsSection.module.css';
import { motion } from 'framer-motion';

const maps = [
  {
    title: 'SkyBlock',
    desc: 'Sobrevive en una pequeña isla flotante con recursos limitados.',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'The Dropper',
    desc: 'Desafía la gravedad y supera obstáculos en caídas libres.',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Diversity',
    desc: 'Mapa de aventuras con múltiples modalidades y retos.',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
  },
];

const MapsSection = () => (
  <section id="maps" className={styles.section}>
    <h2>Mapas de Minecraft</h2>
    <div className={styles['maps-list']}>
      {maps.map((map, i) => (
        <motion.div
          className={styles['map-card']}
          key={map.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 + i * 0.1, ease: [0.23, 1.01, 0.32, 1] }}
        >
          <img src={map.img} alt={map.title} style={{ width: '100%', borderRadius: '0.7rem', marginBottom: '1rem', objectFit: 'cover', height: 140 }} />
          <div className={styles['map-title']}>{map.title}</div>
          <div className={styles['map-desc']}>{map.desc}</div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default MapsSection; 