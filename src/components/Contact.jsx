// 
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Phone, ArrowUpRight } from 'lucide-react'
import SectionTitle from './SectionTitle.jsx'
import './Contact.css'

// Sourced from https://puratchidevi.github.io/Portfolio-/ — update if these ever change
const CONTACT_METHODS = [
  {
    label: 'Email',
    value: 'puratchidevir47@gmail.com',
    href: 'mailto:puratchidevir47@gmail.com',
    icon: Mail,
  },
  {
    label: 'Phone',
    value: '+91 6379113440',
    href: 'tel:+916379113440',
    icon: Phone,
  },
  {
    label: 'LinkedIn',
    value: 'puratchidevi-r',
    href: 'https://www.linkedin.com/in/puratchidevi-r-268b58221/',
    icon: Linkedin,
    external: true,
  },
  {
    label: 'GitHub',
    value: 'Puratchidevi',
    href: 'https://github.com/Puratchidevi',
    icon: Github,
    external: true,
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 },
  }),
}

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <SectionTitle
          eyebrow="Get In Touch"
          title="Let's Build Something Great"
          align="center"
        />

        <motion.p
          className="contact__lead"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          Have a project in mind or just want to say hello? Reach out through any of these.
        </motion.p>

        <div className="contact__cards">
          {CONTACT_METHODS.map((method, i) => (
            <motion.a
              key={method.label}
              href={method.href}
              target={method.external ? '_blank' : undefined}
              rel={method.external ? 'noreferrer' : undefined}
              className="contact-card cursor-hover"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              whileHover={{ y: -6 }}
            >
              <span className="contact-card__glow" aria-hidden="true" />

              <span className="contact-card__top">
                <span className="contact-card__icon">
                  <method.icon size={20} />
                </span>
                <ArrowUpRight size={16} className="contact-card__arrow" />
              </span>

              <span className="contact-card__label">{method.label}</span>
              <span className="contact-card__value">{method.value}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact