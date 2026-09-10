import { motion } from 'framer-motion'
import { Rocket, Heart, Sparkles, Globe2, Wallet, Compass } from 'lucide-react'
import SectionTitle from './SectionTitle.jsx'
import './Ikigai.css'

// The four overlapping questions at the heart of the Ikigai concept
const PILLARS = [
  {
    icon: Heart,
    title: 'What You Love',
    description: 'Interests, passions and the activities that genuinely motivate you.',
  },
  {
    icon: Sparkles,
    title: "What You're Good At",
    description: 'Strengths, skills and the things you naturally do well.',
  },
  {
    icon: Globe2,
    title: 'What The World Needs',
    description: 'Where your interests and abilities can create value or help others.',
  },
  {
    icon: Wallet,
    title: 'What You Can Be Paid For',
    description: 'Career paths and opportunities that can turn your abilities into value.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 },
  }),
}

function Ikigai() {
  return (
    <section id="ikigai" className="section ikigai-featured">
      <div className="container">
        <SectionTitle eyebrow="Featured Project" title="IKIGAI" />

        <motion.div
          className="ikigai-featured__panel glass-panel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="ikigai-featured__glow" aria-hidden="true" />

          <div className="ikigai-featured__header">
            <span className="ikigai-featured__badge">
              <Rocket size={14} /> Currently in Progress 🚀
            </span>
            <h3 className="ikigai-featured__tagline">
              A self-discovery &amp; career-exploration experience, built with React.
            </h3>
          </div>

          <div className="ikigai-featured__body">
            <p>
              <strong>Ikigai</strong> is a Japanese concept meaning "a reason for being" — the
              place where what you love, what you're good at, what the world needs, and what
              you can be paid for all meet.
            </p>
            <p>
              I'm building an interactive web application around this idea: a guided
              experience that helps people reflect on their interests, strengths, values and
              possible career directions — not through a boring questionnaire, but as a
              personal journey of self-discovery. At the end, it brings the answers together
              into a simple, meaningful summary of how someone's passion, strengths, purpose
              and career direction might connect.
            </p>
          </div>

          <div className="ikigai-featured__pillars">
            {PILLARS.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                className="ikigai-pillar cursor-hover"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeUp}
                whileHover={{ y: -6 }}
              >
                <pillar.icon size={20} className="ikigai-pillar__icon" />
                <h4>{pillar.title}</h4>
                <p>{pillar.description}</p>
              </motion.div>
            ))}
          </div>

          <p className="ikigai-featured__connector">
            <Compass size={15} />
            Ikigai lives where these four questions meet — helping someone sense direction,
            not just collect information.
          </p>

          <div className="ikigai-featured__why">
            <h4>Why I'm Building This</h4>
            <p>
              I wanted a project that goes beyond following a tutorial — something that pushes
              me to think about the problem, the person using it, and the experience, not just
              the code. IKIGAI lets me practice React, component design and UI/UX thinking
              while building something that could genuinely help someone reflect on their
              direction.
            </p>
          </div>

          <div className="ikigai-featured__footer">
            <span>Built with React.js</span>
            <span className="ikigai-featured__dot" />
            <span>Actively learning &amp; evolving this project</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Ikigai
