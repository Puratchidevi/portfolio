import { motion } from 'framer-motion'
import './SectionTitle.css'

function SectionTitle({ eyebrow, title, align = 'left' }) {
  return (
    <div className={`section-title section-title--${align}`}>
      <motion.span
        className="eyebrow"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
      >
        {title}
      </motion.h2>
    </div>
  )
}

export default SectionTitle
