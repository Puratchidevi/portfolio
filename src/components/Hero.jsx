import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, Sparkles } from 'lucide-react'
import { SiReact, SiJavascript, SiHtml5, SiCss, SiGit, SiGithub, SiBootstrap } from 'react-icons/si'
import profileImg from '../assets/images/profile.jpg'
import './Hero.css'

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

// Technology logos floating around the profile photo.
// pos controls placement (see Hero.css), float/delay vary the bobbing motion,
// pf controls how strongly the logo reacts to mouse parallax, hideOnMobile trims clutter on small screens.
const ORBIT_SKILLS = [
  {  icon: SiReact, pos: 'top', float: 5, delay: 0, pf: 10, color: '#61DAFB' },
  {  icon: SiBootstrap, pos: 'top-right', float: 5.6, delay: 0.5, pf: 14, color: '#7952B3', hideOnMobile: true },
  {  icon: SiJavascript, pos: 'right', float: 4.8, delay: 0.2, pf: 12, color: '#F7DF1E' },
  {  icon: SiHtml5, pos: 'bottom-right', float: 5.2, delay: 0.7, pf: 10, color: '#E34F26' },
  {  icon: SiGithub, pos: 'bottom', float: 6, delay: 0.9, pf: 8, color: '#ffffff' },
  {  icon: SiCss, pos: 'bottom-left', float: 5.4, delay: 0.35, pf: 10, color: '#1572B6' },
  {  icon: SiGit, pos: 'left', float: 5, delay: 0.6, pf: 12, color: '#F05032', hideOnMobile: true },
]

function Hero() {
  const heroRef = useRef(null)
  const photoWrapRef = useRef(null)
  const [imgError, setImgError] = useState(false)

  // Mouse-following ambient glow, scoped to the hero section only
  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    const handleMove = (e) => {
      const rect = hero.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      hero.style.setProperty('--mx', `${x}%`)
      hero.style.setProperty('--my', `${y}%`)
    }

    hero.addEventListener('mousemove', handleMove)
    return () => hero.removeEventListener('mousemove', handleMove)
  }, [])

  // Subtle parallax for the floating technology logos around the photo
  useEffect(() => {
    const wrap = photoWrapRef.current
    if (!wrap) return

    const handleMove = (e) => {
      const rect = wrap.getBoundingClientRect()
      const px = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      const py = ((e.clientY - rect.top) / rect.height - 0.5) * 2
      wrap.style.setProperty('--px', px.toFixed(3))
      wrap.style.setProperty('--py', py.toFixed(3))
    }

    const handleLeave = () => {
      wrap.style.setProperty('--px', 0)
      wrap.style.setProperty('--py', 0)
    }

    wrap.addEventListener('mousemove', handleMove)
    wrap.addEventListener('mouseleave', handleLeave)
    return () => {
      wrap.removeEventListener('mousemove', handleMove)
      wrap.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__blobs" aria-hidden="true">
        <span className="blob blob--one" />
        <span className="blob blob--two" />
      </div>

      <div className="container hero__grid">
        <motion.div
          className="hero__content"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.span variants={item} className="eyebrow">
            Hello, I'm
          </motion.span>

          <motion.h1 variants={item} className="hero__name">
            PURATCHIDEVI R
          </motion.h1>

          <motion.div variants={item} className="hero__role-row">
            <h2 className="hero__role">
              <span className="gradient-text">Frontend Developer</span>
            </h2>
            <span className="hero__badge">
              <Sparkles size={13} />
              Entry-Level / Fresher
            </span>
          </motion.div>

          <motion.p variants={item} className="hero__description">
            Frontend Developer focused on building modern, responsive and interactive
            web experiences using React and modern frontend technologies.
          </motion.p>

          <motion.div variants={item} className="hero__actions">
            <button className="btn btn-primary cursor-hover" onClick={() => scrollTo('projects')}>
              View My Work
              <ArrowRight size={16} />
            </button>
            <button className="btn btn-secondary cursor-hover" onClick={() => scrollTo('contact')}>
              Contact Me
              <Mail size={16} />
            </button>
          </motion.div>

          <motion.div variants={item} className="hero__meta">
            <div className="hero__meta-item">
              <span className="hero__meta-value">2+</span>
              <span className="hero__meta-label">Yrs · Gaming Industry</span>
            </div>
            <div className="hero__meta-divider" />
            <div className="hero__meta-item">
              <span className="hero__meta-value">React.js</span>
              <span className="hero__meta-label">Core stack</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          <div className="hero__photo-wrap" ref={photoWrapRef}>
            <div className="hero__photo-float">
              <div className="hero__photo-frame">
                {!imgError ? (
                  <img
                    src={profileImg}
                    alt="Puratchidevi R — Frontend Developer"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="hero__photo-placeholder">PD</div>
                )}
              </div>
            </div>

            {ORBIT_SKILLS.map((skill, i) => (
              <div
                key={skill.name}
                className={`hero__skill-pos hero__skill-pos--${skill.pos} ${
                  skill.hideOnMobile ? 'hero__skill-pos--hide-mobile' : ''
                }`}
                style={{ '--pf': `${skill.pf}px` }}
              >
                <motion.div
                  className="hero__skill-chip cursor-hover"
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -10, 0],
                  }}
                  transition={{
                    opacity: { duration: 0.5, delay: 0.6 + i * 0.08 },
                    scale: { duration: 0.5, delay: 0.6 + i * 0.08 },
                    y: {
                      duration: skill.float,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: skill.delay,
                    },
                  }}
                  whileHover={{ scale: 1.12 }}
                >
                  <skill.icon size={17} className="hero__skill-icon" style={{ color: skill.color }} />
                  <span className="hero__skill-name">{skill.name}</span>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <span className="hero__scroll-line" />
        <span>Scroll</span>
      </motion.div>
    </section>
  )
}

export default Hero
