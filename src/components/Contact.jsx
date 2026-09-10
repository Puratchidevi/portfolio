import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
// import { Mail, Github, Linkedin, Send, CheckCircle2 } from 'lucide-react'
import { Mail, Github, Linkedin, Phone, Send, CheckCircle2 } from 'lucide-react'
import SectionTitle from './SectionTitle.jsx'
import './Contact.css'
import { number } from 'motion'

// Sourced from https://puratchidevi.github.io/Portfolio-/ — update if these ever change
const CONTACT_INFO = {
  email: 'puratchidevir47@gmail.com',
  phone: '+91 6379113440',
  github: 'https://github.com/Puratchidevi',
  linkedin: 'https://www.linkedin.com/in/puratchidevi-r-268b58221/',
}

function MagneticButton({ children, ...props }) {
  const btnRef = useRef(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handleMove = (e) => {
    const rect = btnRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) * 0.35
    const y = (e.clientY - rect.top - rect.height / 2) * 0.35
    setPos({ x, y })
  }

  const handleLeave = () => setPos({ x: 0, y: 0 })

  return (
    <motion.button
      ref={btnRef}
      className="btn btn-primary contact__submit cursor-hover"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 15, mass: 0.5 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Hook this up to your email service (e.g. EmailJS, Formspree) or backend API
    setSubmitted(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <SectionTitle
          eyebrow="Get In Touch"
          title="Let's Build Something Great"
          align="center"
        />

        <div className="contact__grid">
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="contact__lead">
              Have a project in mind or just want to say hello? My inbox is always open.
            </p>

            <div className="contact__links">
              <a href={`mailto:${CONTACT_INFO.email}`} className="contact__link cursor-hover">
                <span className="contact__link-icon">
                  <Mail size={18} />
                </span>
                <span>{CONTACT_INFO.email}</span>
              </a>
              <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="contact__link cursor-hover">
                <span className="contact__link-icon">
                 <Phone size={18} />
                </span>
               <span>{CONTACT_INFO.phone}</span>
              </a>
              <a href={CONTACT_INFO.linkedin} target="_blank" rel="noreferrer" className="contact__link cursor-hover">
                <span className="contact__link-icon">
                  <Linkedin size={18} />
                </span>
                <span>LinkedIn</span>
              </a>
              <a href={CONTACT_INFO.github} target="_blank" rel="noreferrer" className="contact__link cursor-hover">
                <span className="contact__link-icon">
                  <Github size={18} />
                </span>
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>

          <motion.form
            className="contact__form glass-panel"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <div className="contact__field">
              <input
                type="text"
                name="name"
                id="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder=" "
              />
              <label htmlFor="name">Your Name</label>
            </div>

            <div className="contact__field">
              <input
                type="email"
                name="email"
                id="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder=" "
              />
              <label htmlFor="email">Your Email</label>
            </div>

            <div className="contact__field">
              <textarea
                name="message"
                id="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                placeholder=" "
              />
              <label htmlFor="message">Your Message</label>
            </div>

            <MagneticButton type="submit">
              {submitted ? (
                <>
                  <CheckCircle2 size={17} /> Message Sent
                </>
              ) : (
                <>
                  Send Message <Send size={16} />
                </>
              )}
            </MagneticButton>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
