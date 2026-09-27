import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ done }) {
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cocoa"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
        >
          <motion.img
            src="/assets/logo_circle.png"
            alt="Cookies Factory"
            className="w-24 h-24 rounded-full object-cover"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          />
          <motion.div
            className="mt-6 flex gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="w-2.5 h-2.5 rounded-full bg-caramel"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
