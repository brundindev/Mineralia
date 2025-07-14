'use client';
import React from 'react';
import styles from './styles/VideosSection.module.css';
import { motion } from 'framer-motion';

const videos = [
  {
    title: 'Cómo empezar en Minecraft',
    desc: 'Guía para principiantes: primeros pasos y consejos.',
    img: 'https://img.youtube.com/vi/MmB9b5njVbA/hqdefault.jpg',
    url: 'https://www.youtube.com/watch?v=MmB9b5njVbA',
  },
  {
    title: 'Los mejores mods de 2024',
    desc: 'Top mods imprescindibles para este año.',
    img: 'https://img.youtube.com/vi/0pXYp72dwl0/hqdefault.jpg',
    url: 'https://www.youtube.com/watch?v=0pXYp72dwl0',
  },
  {
    title: 'Cómo crear tu propio servidor',
    desc: 'Tutorial paso a paso para montar un servidor de Minecraft.',
    img: 'https://img.youtube.com/vi/DS4z7Q6gF6A/hqdefault.jpg',
    url: 'https://www.youtube.com/watch?v=DS4z7Q6gF6A',
  },
];

const VideosSection = () => (
  <section id="videos" className={styles.section}>
    <h2>Videos de Minecraft</h2>
    <div className={styles['videos-list']}>
      {videos.map((video, i) => (
        <motion.a
          className={styles['video-card']}
          key={video.title}
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 + i * 0.1, ease: [0.23, 1.01, 0.32, 1] }}
        >
          <img src={video.img} alt={video.title} style={{ width: '100%', borderRadius: '0.7rem', marginBottom: '1rem', objectFit: 'cover', height: 160 }} />
          <div className={styles['video-title']}>{video.title}</div>
          <div className={styles['video-desc']}>{video.desc}</div>
        </motion.a>
      ))}
    </div>
  </section>
);

export default VideosSection; 