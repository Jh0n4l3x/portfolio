import { useState } from 'react'
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

/* ===================== */
/* PAGE */
/* ===================== */

export function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [sent, setSent] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    setSent(true)

    setForm({
      name: '',
      email: '',
      message: ''
    })
  }

  return (
    <main className="relative z-10 px-6 max-w-6xl mx-auto py-32 flex flex-col gap-32 text-white">

      {/* HERO */}
      <motion.section
        variants={sectionVariant}
        initial={false}
        animate="visible"
        className="text-center flex flex-col gap-6"
      >
        <h1 className="text-4xl sm:text-5xl font-bold">
          Conectemos
        </h1>

        <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
          ¿Tienes un proyecto, vacante o idea en mente?
          Estoy abierto a nuevas oportunidades y colaboraciones.
        </p>
      </motion.section>

      {/* GRID */}
      <motion.section
        variants={sectionVariant}
        initial={false}
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12"
      >

        {/* INFO */}
        <div className="flex flex-col gap-8">

          <h2 className="text-2xl font-semibold">
            Información de contacto
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Puedes escribirme directamente por correo o redes profesionales.
            Respondo normalmente en menos de 24 horas.
          </p>

          <div className="space-y-5">
            <ContactItem
              label="Email"
              value="jhonalex5058@gmail.com"
              link="mailto:jhonalex5058@gmail.com"
            />

            <ContactItem
              label="Whatsapp"
              value="+57 3125469710"
              link="tel:+573125469710"
            />

            <ContactItem
              label="LinkedIn"
              value="linkedin.com/in/alex90123"
              link="https://linkedin.com/in/alex90123"
            />

            <ContactItem
              label="GitHub"
              value="github.com/jh0n4l3x"
              link="https://github.com/Jh0n4l3x"
            />
          </div>
        </div>

        {/* FORM */}
        <div className="glass rounded-2xl p-8 border border-white/10">

          <h2 className="text-2xl font-semibold mb-6">
            Envíame un mensaje
          </h2>

          {sent && (
            <div className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
              ✔ Mensaje enviado correctamente. Te responderé pronto.
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            {/* NAME */}
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm text-gray-300"
              >
                Nombre
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:outline-none focus:border-primary-500"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm text-gray-300"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="tucorreo@email.com"
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:outline-none focus:border-primary-500"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm text-gray-300"
              >
                Mensaje
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Cuéntame sobre tu proyecto u oportunidad"
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:outline-none focus:border-primary-500 resize-none"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 font-semibold shadow-lg hover:scale-[1.02] transition"
            >
              Enviar mensaje
            </button>

          </form>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        variants={sectionVariant}
        initial={false}
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center"
      >
        <h3 className="text-2xl sm:text-3xl font-bold mb-4">
          Disponible para nuevas oportunidades
        </h3>

        <p className="text-gray-400 max-w-xl mx-auto">
          Busco seguir creciendo como ingeniero de software en entornos donde la
          calidad, el aprendizaje y la innovación sean prioridad.
        </p>
      </motion.section>

    </main>
  )
}

/* ===================== */
/* ITEM */
/* ===================== */

function ContactItem({
  label,
  value,
  link
}: {
  label: string
  value: string
  link: string
}) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noreferrer"
      whileHover={{ x: 6 }}
      className="flex flex-col gap-1 p-4 rounded-xl glass border border-white/10 hover:border-primary-500/40 transition"
    >
      <span className="text-sm text-gray-400">
        {label}
      </span>

      <span className="font-medium text-white">
        {value}
      </span>
    </motion.a>
  )
}