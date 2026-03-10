import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const services = [
  { icon: 'fa-search', title: 'Exámenes Visuales', desc: 'Evaluación completa con tecnología avanzada.', img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400' },
  { icon: 'fa-glasses', title: 'Lentes Premium', desc: 'Marcas exclusivas de lentes.', img: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400' },
  { icon: 'fa-contact-book', title: 'Lentes de Contacto', desc: 'Adaptación y venta de lentillas.', img: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400' },
  { icon: 'fa-user-md', title: 'Asesoría Profesional', desc: 'Optometrists certificados.', img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400' },
  { icon: 'fa-tools', title: 'Reparación', desc: 'Ajustes y reparaciones.', img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400' },
  { icon: 'fa-truck', title: 'Delivery', desc: 'Entrega a domicilio sin costo.', img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400' },
]

const brands = ['RAY-BAN', 'OAKLEY', 'GUCCI', 'PRADA', 'VERSACE']

function App() {
  const heroRef = useRef(null)
  const servicesRef = useRef(null)

  useEffect(() => {
    gsap.fromTo('.hero-content > *', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2, delay: 0.3 })
    gsap.fromTo('.hero-image img', { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1, delay: 0.5 })
    gsap.fromTo('.service-card', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, scrollTrigger: { trigger: servicesRef.current, start: 'top 80%' } })
  }, [])

  return (
    <div className="min-h-screen bg-[#030712]">
      <header className="fixed top-0 left-0 right-0 bg-[#030712]/95 backdrop-blur-sm z-50 py-4">
        <div className="max-w-7xl mx-auto px-5 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 text-2xl font-extrabold text-white no-underline">
            <div className="w-10 h-10 bg-gradient-to-br from-[#6366f1] to-[#22d3ee] rounded-xl flex items-center justify-center">
              <i className="fas fa-eye text-white"></i>
            </div>
            VISION<span className="bg-gradient-to-r from-[#6366f1] to-[#22d3ee] bg-clip-text text-transparent">OPTICA</span>
          </a>
          <nav className="flex items-center gap-6">
            <a href="#servicios" className="text-white no-underline font-medium hover:text-[#6366f1] transition">Servicios</a>
            <a href="#contacto" className="bg-[#6366f1] text-white px-6 py-2 rounded-full font-semibold no-underline hover:bg-[#4f46e5] transition">Cita</a>
          </nav>
        </div>
      </header>

      <section ref={heroRef} className="min-h-screen flex items-center pt-20 bg-[radial-gradient(ellipse_at_20%_50%,rgba(99,102,241,0.15)_0%,transparent_50%)]">
        <div className="max-w-7xl mx-auto px-5 flex items-center gap-12">
          <div className="hero-content flex-1">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-5">Tu Visión,<br /><span className="bg-gradient-to-r from-[#6366f1] to-[#22d3ee] bg-clip-text text-transparent">Nuestra Prioridad</span></h1>
            <p className="text-lg text-gray-400 mb-8">Cuidamos tus ojos con la mejor tecnología.</p>
            <a href="#contacto" className="inline-block bg-[#6366f1] text-white px-8 py-3 rounded-full font-semibold no-underline hover:bg-[#4f46e5] transition">Agendar</a>
          </div>
          <div className="hero-image flex-1 hidden md:block">
            <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600" alt="Eye Exam" className="w-full max-w-lg rounded-2xl" loading="lazy" />
          </div>
        </div>
      </section>

      <section ref={servicesRef} id="servicios" className="py-24 bg-[#030712]">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Nuestros Servicios</h2>
          <p className="text-gray-400 text-center mb-12">Todo para tu salud visual</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="service-card bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#6366f1]/50 transition">
                <img src={s.img} alt={s.title} className="w-full h-36 object-cover rounded-xl mb-4" loading="lazy" />
                <div className="w-12 h-12 bg-[#6366f1]/20 rounded-xl flex items-center justify-center text-[#6366f1] text-xl mb-3"><i className={`fas fa-${s.icon}`}></i></div>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#6366f1]/5">
        <div className="max-w-7xl mx-auto px-5 flex justify-center gap-10 flex-wrap">
          {brands.map((b, i) => <span key={i} className="text-xl font-bold text-gray-400">{b}</span>)}
        </div>
      </section>

      <section id="contacto" className="py-20 bg-gradient-to-r from-[#4f46e5] to-[#3730a3] text-center">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">¿Listo para ver <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">claro?</span></h2>
          <p className="text-gray-300 mb-8">Agenda tu examen gratuito</p>
          <a href="#" className="inline-block bg-white text-[#6366f1] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition">Agendar Cita</a>
        </div>
      </section>

      <footer className="bg-[#01050e] py-16">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <a href="#" className="flex items-center gap-2 text-xl font-extrabold no-underline text-white mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#6366f1] to-[#22d3ee] rounded-xl flex items-center justify-center"><i className="fas fa-eye"></i></div>
                VISION<span className="bg-gradient-to-r from-[#6366f1] to-[#22d3ee] bg-clip-text text-transparent">OPTICA</span>
              </a>
              <p className="text-gray-500 text-sm">Tu salud visual es nuestra prioridad.</p>
            </div>
            <div><h4 className="font-semibold mb-4">Servicios</h4><ul className="space-y-2 text-gray-500 text-sm"><li>Exámenes</li><li>Lentes</li><li>Contacto</li></ul></div>
            <div><h4 className="font-semibold mb-4">Horario</h4><ul className="space-y-2 text-gray-500 text-sm"><li>Lun - Vie: 09:00 - 19:00</li><li>Sábados: 09:00 - 17:00</li></ul></div>
            <div><h4 className="font-semibold mb-4">Contacto</h4><ul className="space-y-2 text-gray-500 text-sm"><li><i className="fas fa-map-marker-alt mr-2"></i>Guayaquil</li><li><i className="fas fa-phone mr-2"></i>+593 99 999 9999</li></ul></div>
          </div>
          <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-600 text-sm">© 2026 VisionOptica. Todos los derechos reservados.</div>
        </div>
      </footer>

      <a href="https://wa.me/593999999999" target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
    </div>
  )
}
export default App
