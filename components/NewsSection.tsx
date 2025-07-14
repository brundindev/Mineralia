'use client';
import React from 'react';
import styles from './styles/NewsSection.module.css';
import { motion } from 'framer-motion';

const news = [
  {
    title: 'Nueva actualización 1.20 lanzada',
    desc: 'La versión 1.20 trae nuevos biomas, mobs y bloques únicos.',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Evento Minecon anunciado',
    desc: 'Minecon regresa este año con sorpresas y anuncios exclusivos.',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Nuevos packs de texturas oficiales',
    desc: 'Mojang lanza nuevos packs de texturas para personalizar tu mundo.',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
  },
];

const NewsSection = () => (
  <section id="news" className={styles.section}>
    <h2>Noticias de Minecraft</h2>
    <div className={styles['news-list']}>
      {news.map((item, i) => (
        <motion.div
          className={styles['news-card']}
          key={item.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 + i * 0.1, ease: [0.23, 1.01, 0.32, 1] }}
        >
          <img src={item.img} alt={item.title} style={{ width: '100%', borderRadius: '0.7rem', marginBottom: '1rem', objectFit: 'cover', height: 140 }} />
          <div className={styles['news-title']}>{item.title}</div>
          <div className={styles['news-desc']}>{item.desc}</div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default NewsSection; 