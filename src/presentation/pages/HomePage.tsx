import { motion, type Variants } from 'framer-motion'

const sectionVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1]
    }
  }
}

export function HomePage() {
  return (
    <main className="relative z-10 overflow-hidden text-white">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* TEXT */}
          <motion.div
            variants={sectionVariant}
            initial={false}
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Hola, soy
              <span className="block gradient-text">Jhon Alex</span>
              <span className="block text-gray-300 text-3xl sm:text-4xl mt-2">
                Desarrollador Full Stack
              </span>
            </h1>

            <p className="max-w-xl text-gray-400 text-lg leading-relaxed glass p-6 rounded-2xl border border-white/10">
              Tecnólogo en Análisis y Desarrollo de Software, con experiencia en
              aplicaciones empresariales y financieras. Especializado en crear
              sistemas seguros, escalables y mantenibles.
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/Jh0n4l3x/"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold shadow-lg hover:scale-105 transition"
              >
                Ver proyectos
              </a>

              <a
                href="/contact"
                className="px-6 py-3 rounded-xl glass border border-white/10 hover:bg-white/10 transition"
              >
                Contacto
              </a>
            </div>
          </motion.div>

          {/* PHOTO */}
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-500/40 to-accent-500/40 blur-2xl" />

              <img
                src="/foto.png"
                alt="Jhon Alex"
                className="relative w-64 h-64 sm:w-72 sm:h-72 object-cover rounded-3xl border border-white/10 shadow-xl"
              />

              <div className="absolute -bottom-4 -right-4 glass px-4 py-2 rounded-xl border border-white/10">
                <p className="text-sm font-semibold text-white">
                  Software Developer
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <motion.section
        variants={sectionVariant}
        initial={false}
        whileInView="visible"
        viewport={{ once: true }}
        className="py-32"
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10">
            Construyendo software
            <span className="block gradient-text">con calidad y propósito</span>
          </h2>

          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              Participo en el desarrollo, soporte y mantenimiento de sistemas
              utilizados en entornos reales, especialmente en el sector
              financiero y empresarial.
            </p>

            <p>
              Mi enfoque está en crear soluciones confiables, fáciles de
              mantener y preparadas para escalar en el tiempo.
            </p>

            <p className="italic text-white/70">
              “La calidad no es un extra, es una responsabilidad profesional.”
            </p>
          </div>
        </div>
      </motion.section>

      {/* PRINCIPLES */}
      <motion.section
        variants={sectionVariant}
        initial={false}
        whileInView="visible"
        viewport={{ once: true }}
        className="py-28 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-14 text-center">
            Principios de trabajo
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PrincipleCard
              title="Arquitectura Limpia"
              text="Diseño modular, separación de responsabilidades y código mantenible."
            />

            <PrincipleCard
              title="Seguridad Primero"
              text="Validación, control de accesos y buenas prácticas desde el diseño."
            />

            <PrincipleCard
              title="DevOps & Cloud"
              text="Automatización con Docker, CI/CD, GCP y Kubernetes."
            />
          </div>
        </div>
      </motion.section>

      {/* STACK */}
      <motion.section
        variants={sectionVariant}
        initial={false}
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24"
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-6">Stack principal</h3>

          <p className="text-gray-400 leading-relaxed">
            TypeScript · Java · Python · React · Angular · C# (.NET) · Docker ·
            Jenkins · Google Cloud · Kubernetes · SQL · Git
          </p>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        variants={sectionVariant}
        initial={false}
        whileInView="visible"
        viewport={{ once: true }}
        className="py-32 text-center"
      >
        <h3 className="text-3xl sm:text-4xl font-bold mb-6">
          ¿Trabajamos juntos?
        </h3>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10">
          Estoy abierto a oportunidades donde pueda aportar valor técnico,
          aprender y construir soluciones de alto impacto.
        </p>

        <a
          href="/contact"
          className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 font-semibold shadow-lg hover:scale-105 transition"
        >
          Contáctame
        </a>
      </motion.section>
    </main>
  )
}

/* CARD */
function PrincipleCard({
  title,
  text
}: {
  title: string
  text: string
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="p-6 rounded-2xl glass border border-white/10 hover:border-primary-500/40 transition"
    >
      <h4 className="text-xl font-semibold mb-3 text-white">
        {title}
      </h4>

      <p className="text-gray-400 leading-relaxed">
        {text}
      </p>
    </motion.div>
  )
}
