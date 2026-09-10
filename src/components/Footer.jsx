import { Github, Linkedin, Mail } from 'lucide-react'
import './Footer.css'

// Sourced from https://puratchidevi.github.io/Portfolio-/ — update if these ever change
const CONTACT_INFO = {
  email: 'puratchidevir47@gmail.com',
  github: 'https://github.com/Puratchidevi',
  linkedin: 'https://www.linkedin.com/in/puratchidevi-r-268b58221/',
}

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__text">Designed &amp; Developed by Puratchidevi</p>

        <div className="footer__socials">
          <a href={CONTACT_INFO.github} target="_blank" rel="noreferrer" className="btn-icon cursor-hover" aria-label="GitHub">
            <Github size={17} />
          </a>
          <a href={CONTACT_INFO.linkedin} target="_blank" rel="noreferrer" className="btn-icon cursor-hover" aria-label="LinkedIn">
            <Linkedin size={17} />
          </a>
          <a href={`mailto:${CONTACT_INFO.email}`} className="btn-icon cursor-hover" aria-label="Email">
            <Mail size={17} />
          </a>
        </div>

        <p className="footer__copy">© {year} Puratchidevi R</p>
      </div>
    </footer>
  )
}

export default Footer
