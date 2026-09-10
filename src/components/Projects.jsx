// import { useRef, useState } from 'react'
// import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import SectionTitle from './SectionTitle.jsx'
import drivexImg from '../assets/images/drivex.png'
import taskboardImg from '../assets/images/taskboard.png'
import beautykartImg from '../assets/images/beautykart.png'
import guessNumberImg from '../assets/images/guess-number.png'
import './Projects.css'

const PROJECTS = [
  {
    title: 'DriveX Car Showroom',
    description:
      'A responsive car showroom website built with React, focusing on clean UI, reusable components, and responsive design.',
    tech: ['React.js', 'JavaScript', 'HTML', 'CSS'],
    image: drivexImg,
    github: 'https://github.com/your-username/drivex-car-showroom',
    demo: 'https://puratchidevi.github.io/DriveX-New-showroom/',
  },
  {
    title: 'Mini Task Board',
    description:
      'Interactive Kanban-style task management application with task creation, status management and drag-and-drop functionality.',
    tech: ['React.js', 'JavaScript', 'CSS'],
    image: taskboardImg,
    github: 'https://github.com/your-username/mini-task-board',
    demo: 'https://puratchidevi.github.io/Kanban-board/',
  },
  {
    title: 'BeautyKart — Mini E-Commerce',
    description:
      'A static beauty-shopping e-commerce UI featuring product listings, category browsing, product cards and a fully interactive shopping cart, built as a frontend showcase project.',
    tech: ['React.js', 'HTML', 'CSS', 'JavaScript'],
    image: beautykartImg,
    github: 'https://github.com/your-username/beautykart-ecommerce',
    demo: ' https://puratchidevi.github.io/BeautyKart/',
  },
  {
    title: 'Guess Number Game',
    description:
      'Interactive browser-based number guessing game with dynamic UI and JavaScript logic.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: guessNumberImg,
    github: 'https://github.com/your-username/guess-number-game',
    demo: 'https://puratchidevi.github.io/guess-number-/',
  },
]

function ProjectCard({ project, index }) {
  const [imgError, setImgError] = useState(!project.image)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    e.currentTarget.style.setProperty('--px', `${x}%`)
    e.currentTarget.style.setProperty('--py', `${y}%`)
  }

  return (
    <motion.div
      className="project-card cursor-hover"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: (index % 2) * 0.1 }}
    >
      <span className="project-card__cursor-glow" />

      <div className="project-card__media">
        {!imgError ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="project-card__placeholder">
            <span>{project.title.slice(0, 2).toUpperCase()}</span>
          </div>
        )}
        <div className="project-card__overlay">
          <a href={project.demo} target="_blank" rel="noreferrer" className="btn-icon" aria-label="Live demo">
            <ExternalLink size={17} />
          </a>
          <a href={project.github} target="_blank" rel="noreferrer" className="btn-icon" aria-label="GitHub repository">
            <Github size={17} />
          </a>
        </div>
      </div>

      <div className="project-card__body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="project-card__tags">
          {project.tech.map((t) => (
            <span key={t} className="project-card__tag">
              {t}
            </span>
          ))}
        </div>

        <div className="project-card__links">
          {/* <a href={project.github} target="_blank" rel="noreferrer" className="project-card__link">
            <Github size={15} /> Code
          </a> */}
          <a href={project.demo} target="_blank" rel="noreferrer" className="project-card__link">
            <ExternalLink size={15} /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  )
}

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <SectionTitle eyebrow="Selected Work" title="Projects" />

        <div className="projects__grid">
          {PROJECTS.map((project, i) => (
            <ProjectCard project={project} index={i} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
