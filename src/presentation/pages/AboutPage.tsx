import { motion, type Variants } from 'framer-motion'

/* ===================== */
/* VARIANTS */
/* ===================== */

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

const fadeItem: Variants = {
  hidden: {
    opacity: 0,
    y: 32
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1]
    }
  }
}

/* ===================== */
/* DATA */
/* ===================== */

const timeline = [
  {
    year: '2023',
    title: 'Inicio profesional',
    description:
      'Formación en desarrollo de software y primeros proyectos con enfoque empresarial.'
  },
  {
    year: '2024',
    title: 'Entorno corporativo',
    description:
      'Trabajo con sistemas financieros, soporte técnico y automatización.'
  },
  {
    year: '2025',
    title: 'Ingeniería moderna',
    description:
      'Cloud, CI/CD, contenedores, React, TypeScript y arquitectura escalable.'
  }
]

/* ===================== */
/* COMPONENT */
/* ===================== */

export const AboutPage = () => {
  return (
    <motion.main
      variants={container}
      initial="hidden"
      animate="visible"
      className="relative z-10 px-6 max-w-5xl mx-auto py-32 flex flex-col gap-32 text-white"
    >
      {/* HERO */}
      <motion.section variants={fadeItem} className="text-center space-y-6">
        <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
          Construyendo software
          <span className="block gradient-text">con propósito</span>
        </h1>

        <p className="max-w-3xl mx-auto text-lg text-gray-400 leading-relaxed">
          Soy Jhon Alex, desarrollador enfocado en crear sistemas mantenibles,
          seguros y bien estructurados, comprendiendo siempre el porqué detrás
          de cada decisión técnica.
        </p>
      </motion.section>

      {/* PERFIL */}
      <motion.section
        variants={fadeItem}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        <div className="space-y-5">
          <h2 className="text-3xl font-semibold">
            Mi enfoque profesional
          </h2>

          <p className="text-gray-400 leading-relaxed">
            El desarrollo no es solo escribir código, es diseñar sistemas que
            evolucionen sin romperse.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Prioritizo claridad, seguridad desde el diseño y arquitectura limpia.
          </p>
        </div>

        <div className="glass rounded-2xl p-8 border border-white/10">
          <ul className="space-y-3 text-gray-300 text-sm">
            <li>✔ Arquitectura mantenible</li>
            <li>✔ Seguridad por diseño</li>
            <li>✔ Integraciones complejas</li>
            <li>✔ Escalabilidad real</li>
            <li>✔ Trabajo en equipo</li>
          </ul>
        </div>
      </motion.section>

      {/* TIMELINE */}
      <motion.section variants={fadeItem} className="space-y-12">
        <h2 className="text-3xl font-semibold text-center">
          Trayectoria
        </h2>

        <div className="relative max-w-3xl mx-auto space-y-12">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10" />

          {timeline.map((item) => (
            <motion.div
              key={item.year}
              variants={fadeItem}
              className="relative pl-14"
            >
              <div className="absolute left-0 top-2 w-9 h-9 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-xs font-bold">
                {item.year.slice(2)}
              </div>

              <div className="glass rounded-xl p-6 border border-white/10">
                <h3 className="font-semibold text-lg">
                  {item.title}
                </h3>

                <p className="mt-2 text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FILOSOFÍA */}
      <motion.section variants={fadeItem} className="space-y-10">
        <h2 className="text-3xl font-semibold text-center">
          Filosofía
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            'La arquitectura es una herramienta.',
            'La seguridad es parte del diseño.',
            'La claridad es prioridad.',
            'Cada decisión importa.'
          ].map((text, i) => (
            <motion.div
              key={i}
              variants={fadeItem}
              className="glass p-6 rounded-xl border border-white/10 text-sm text-gray-300"
            >
              {text}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* VISIÓN */}
      <motion.section variants={fadeItem} className="text-center space-y-6">
        <h2 className="text-3xl font-semibold">
          Presente y futuro
        </h2>

        <p className="max-w-3xl mx-auto text-gray-400 leading-relaxed">
          Trabajo con React, TypeScript, cloud y automatización para construir
          sistemas confiables.
        </p>

        <p className="max-w-3xl mx-auto text-gray-400 leading-relaxed">
          Busco integrar software, IA y procesos cognitivos en soluciones
          inteligentes y humanas.
        </p>
      </motion.section>
    </motion.main>
  )
}
