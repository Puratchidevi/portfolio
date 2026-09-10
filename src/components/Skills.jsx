import { motion } from 'framer-motion'
import { MonitorSmartphone, Layers3, Cable, TerminalSquare } from 'lucide-react'
import {
  SiHtml5, SiCss, SiJavascript, SiReact, SiBootstrap,
  SiGit, SiGithub,
} from 'react-icons/si'
import SectionTitle from './SectionTitle.jsx'
import './Skills.css'

const SKILL_GROUPS = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss, color: '#1572B6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'React.js', icon: SiReact, color: '#61DAFB' },
      { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#ffffff' },
      { name: 'VS Code', icon: TerminalSquare, color: '#007ACC' },
    ],
  },
  {
    category: 'Development',
    skills: [
      { name: 'Responsive Design', icon: MonitorSmartphone, color: 'var(--accent-violet-soft)' },
      { name: 'UI Development', icon: Layers3, color: 'var(--accent-violet-soft)' },
      { name: 'REST API', icon: Cable, color: 'var(--accent-violet-soft)' },
    ],
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 },
  }),
}

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <SectionTitle eyebrow="Capabilities" title="Skills &amp; Toolkit" />

        <div className="skills__groups">
          {SKILL_GROUPS.map((group) => (
            <div className="skills__group" key={group.category}>
              <h3 className="skills__group-title">{group.category}</h3>
              <div className="skills__grid">
                {group.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    className="skill-card cursor-hover"
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={cardVariants}
                    whileHover={{ y: -8, scale: 1.03 }}
                  >
                    <span className="skill-card__glow" />
                    <skill.icon size={26} className="skill-card__icon" style={{ color: skill.color }} />
                    <span className="skill-card__name">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
