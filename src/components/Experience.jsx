import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase } from 'lucide-react'
import SectionTitle from './SectionTitle.jsx'
import './Experience.css'

// Sourced from https://puratchidevi.github.io/Portfolio-/ — previous professional career,
// kept completely separate from frontend development work. Content preserved exactly.
const WORK_EXPERIENCE = [
  {
    role: 'Concept Writer',
    duration: '2+ Years',
    period: 'Gaming Industry',
    responsibilities: [
      '2+ years of experience contributing to 120+ interactive escape room levels',
      'Designed immersive game narratives and structured gameplay mechanics',
      'Collaborated with developers, artists, and QA teams under tight deadlines',
      'Maintained quality standards and streamlined internal workflow processes',
    ],
    skills: ['Concept Writing', 'Narrative Design', 'Team Collaboration', 'Workflow & QA'],
  },
]

function Experience() {
  const timelineRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 80%', 'end 60%'],
  })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <SectionTitle eyebrow="Experience" title="Professional Experience" />

        <div className="experience__timeline" ref={timelineRef}>
          <div className="experience__track">
            <motion.div className="experience__track-fill" style={{ height: lineHeight }} />
          </div>

          {WORK_EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.role}
              className="experience__item"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
            >
              <span className="experience__dot">
                <Briefcase size={15} />
              </span>

              <motion.div
                className="experience__card glass-panel cursor-hover"
                whileHover={{ y: -6, borderColor: 'rgba(124, 92, 255, 0.4)' }}
                transition={{ duration: 0.35 }}
              >
                <div className="experience__card-head">
                  <div>
                    <h3>{exp.role}</h3>
                    <span className="experience__period">{exp.period}</span>
                  </div>
                  <span className="experience__duration">{exp.duration}</span>
                </div>

                <p className="experience__industry-note">
                  Previous professional career 
                </p>

                <div className="experience__block">
                  <h4>Responsibilities</h4>
                  <ul>
                    {exp.responsibilities.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                </div>

                <div className="experience__tags">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="experience__tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
