import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, FileText, Menu, X } from 'lucide-react'
import './Navbar.css'

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'ikigai', label: 'Ikigai' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

// Sourced from https://puratchidevi.github.io/Portfolio-/ — update if these ever change
const SOCIAL_LINKS = {
  github: 'https://github.com/Puratchidevi',
  linkedin: 'https://www.linkedin.com/in/puratchidevi-r-268b58221/',
  resume: 'resume.pdf',
}

function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  const handleNavClick = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="navbar__inner container">
          <a href="#home" className="navbar__logo cursor-hover" onClick={(e) => { e.preventDefault(); handleNavClick('home') }}>
            <span className="navbar__logo-mark">PD</span>
            <span className="navbar__logo-text">Puratchidevi</span>
          </a>

          <nav className="navbar__links">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                className={`navbar__link cursor-hover ${activeSection === link.id ? 'is-active' : ''}`}
                onClick={() => handleNavClick(link.id)}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.span layoutId="nav-indicator" className="navbar__indicator" />
                )}
              </button>
            ))}
          </nav>

          <div className="navbar__actions">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="btn-icon cursor-hover" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="btn-icon cursor-hover" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href={SOCIAL_LINKS.resume} target="_blank" rel="noreferrer" className="btn btn-secondary cursor-hover navbar__resume">
              <FileText size={16} />
              Resume
            </a>
          </div>

          <button
            className="navbar__toggle cursor-hover"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.nav
              className="mobile-menu__links"
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
                closed: {},
              }}
            >
              {NAV_LINKS.map((link) => (
                <motion.button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={activeSection === link.id ? 'is-active' : ''}
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 20 },
                  }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  {link.label}
                </motion.button>
              ))}
            </motion.nav>

            <motion.div
              className="mobile-menu__footer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="btn-icon">
                <Github size={18} />
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="btn-icon">
                <Linkedin size={18} />
              </a>
              <a href={SOCIAL_LINKS.resume} target="_blank" rel="noreferrer" className="btn btn-primary">
                Resume
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
