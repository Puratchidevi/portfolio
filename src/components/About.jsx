import { motion } from 'framer-motion'
import { Sparkles, Code, Layers, MonitorSmartphone } from 'lucide-react'
import SectionTitle from './SectionTitle.jsx'
import './About.css'

const STATS = [
  { icon: Sparkles, value: '2+', label: 'Yrs · Gaming Industry' },
  { icon: Code, value: 'Fresher', label: 'Frontend Developer' },
  // { icon: Layers, value: '4', label: 'Frontend Projects' },
  { icon: MonitorSmartphone, value: 'React.js', label: 'Core Focus' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 },
  }),
}

function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <SectionTitle eyebrow="About Me" title="Who Am I?" />

        <div className="about__grid">
          <motion.div
            className="about__text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
          >
            <p>
              I'm <strong>Puratchidevi R</strong>, an aspiring <strong>Frontend Developer</strong> with
              a professional background in the gaming industry as a Concept Writer. After
              2+ years of professional experience working on game concepts, narratives and
              interactive experiences, I'm now focused on building my career in frontend
              development.
            </p>
            <p>
              I've been developing my skills in <strong>HTML, CSS, JavaScript and React</strong> by
              building practical projects and interactive web applications — turning what I
              learn into real, working interfaces rather than just theory.
            </p>
            <p>
              {/* My time in game design shaped how I think about interaction, pacing and the
              small details that make an experience feel considered — instincts I now bring
              into every interface I build as a frontend developer. */}

              My experience in concept writing in the gaming industry shaped 
              how I think about interaction, 
              pacing and the small details that make an experience feel considered — instincts I now bring into every interface I build as a frontend developer.
            </p>
          </motion.div>

          <div className="about__stats">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="about__stat-card cursor-hover"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={fadeUp}
                whileHover={{ y: -8 }}
              >
                <stat.icon size={22} className="about__stat-icon" />
                <span className="about__stat-value">{stat.value}</span>
                <span className="about__stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
