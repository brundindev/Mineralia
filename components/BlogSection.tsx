'use client';
import React from 'react';
import styles from './styles/BlogSection.module.css';
import { motion } from 'framer-motion';

const blogs = [
  {
    title: 'Cómo instalar mods en Minecraft',
    desc: 'Guía paso a paso para instalar mods fácilmente en cualquier versión.',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Top 5 servidores para jugar con amigos',
    desc: 'Descubre los mejores servidores para disfrutar en multijugador.',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Cómo optimizar Minecraft para menos lag',
    desc: 'Trucos y configuraciones para mejorar el rendimiento del juego.',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
  },
];

const BlogSection = () => (
  <section id="blog" className={styles.section}>
    <h2>Blog de Minecraft</h2>
    <div className={styles['blog-list']}>
      {blogs.map((blog, i) => (
        <motion.div
          className={styles['blog-card']}
          key={blog.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 + i * 0.1, ease: [0.23, 1.01, 0.32, 1] }}
        >
          <img src={blog.img} alt={blog.title} style={{ width: '100%', borderRadius: '0.7rem', marginBottom: '1rem', objectFit: 'cover', height: 140 }} />
          <div className={styles['blog-title']}>{blog.title}</div>
          <div className={styles['blog-desc']}>{blog.desc}</div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default BlogSection; 