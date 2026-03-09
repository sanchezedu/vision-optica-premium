import { useState, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Scroll animations hook
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeUp')
        }
      })
    },
    { threshold: 0.1 }
  )
  document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el))
  return () => observer.disconnect()
}, [])

// Data
const collections = [
  {
    id: 1,
    name: "Luxe Acetate",
    description: "Arte en acetato italiano",
    price: "$289",
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&q=80"
  },
  {
    id: 2,
    name: "Titanium Vision",
    description: "Ligereza extrema en titanio",
    price: "$349",
    image: "https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&q=80"
  },
  {
    id: 3,
    name: "Crystal Clear",
    description: "Lentes de precisión suiza",
    price: "$420",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&q=80"
  },
  {
    id: 4,
    name: "Retro Modern",
    style: "Vintage reinventado",
    price: "$269",
    image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=600&q=80"
  }
]

const services = [
  {
    id: 1,
    title: "Examen Visual Completo",
    description: "Evaluación integral de tu visión con tecnología de última generación",
    icon: "👁️",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80"
  },
  {
    id: 2,
    title: "Lentes de Progresión",
    description: "Transición suave entre distancias para máxima comodidad",
    icon: "🔍",
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800&q=80"
  },
  {
    id: 3,
    title: "Tratamientos Especiales",
    description: "Antirreflejo, azul y fotosensibles personalizados",
    icon: "✨",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80"
  },
  {
    id: 4,
    title: "Adaptación de Lentes",
    description: "Ajustes precisos y personalizados para tu comodidad",
    icon: "🎯",
    image: "https://images.unsplash.com/photo-1577803645773-f96470509666?w=800&q=80"
  }
]

const testimonials = [
  {
    id: 1,
    text: "La mejor experiencia visual de mi vida. Mi vida cambió cuando pude ver con claridad.",
    author: "Carolina M.",
    role: "Abogada"
  },
  {
    id: 2,
    text: "Encontré el estilo perfecto. No solo veo mejor, me veo mejor.",
    author: "Roberto D.",
    role: "Empresario"
  },
  {
    id: 3,
    text: "Tecnología de punta y atención personalizada. Recomendación 100%.",
    author: "Ana Lucía S.",
    role: "Diseñadora"
  }
]

const brands = [
  "Ray-Ban", "Oakley", "Maui Jim", "Tom Ford", "Prada", "Versace"
]

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [activeService, setActiveService] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('¡Gracias! Te contactaremos pronto para agendar tu cita.')
  }

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Floating CTA */}
      <a 
        href="#contacto"
        className="fixed bottom-8 right-8 z-50 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center gap-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        Agendar Cita
      </a>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled ? 'glass bg-black/90 py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="text-2xl font-display tracking-wider text-indigo-400">
            VISION<span className="text-white">OPTICA</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#colecciones" className="text-white/70 hover:text-indigo-400 transition-colors text-sm">Colecciones</a>
            <a href="#servicios" className="text-white/70 hover:text-indigo-400 transition-colors text-sm">Servicios</a>
            <a href="#nosotros" className="text-white/70 hover:text-indigo-400 transition-colors text-sm">Nosotros</a>
            <a href="#contacto" className="bg-indigo-500 hover:bg-indigo-600 px-6 py-2 rounded-full text-sm transition-all">
              Reservar Cita
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=1920&q=80"
            alt="Vision"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/30"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p className="text-indigo-400 tracking-[0.4em] text-sm mb-6 animate-fadeUp">ÓPTICA DE PRECISIÓN</p>
          <h1 className="font-display text-6xl md:text-8xl mb-6 animate-fadeUp" style={{ animationDelay: '0.2s' }}>
            VE EL MUNDO<br/> <span className="text-indigo-400">CON CLARIDAD</span>
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto animate-fadeUp" style={{ animationDelay: '0.4s' }}>
            Donde la tecnología de punta encuentra el estilo más sofisticado. 
            Tu visión, nuestra pasión.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeUp" style={{ animationDelay: '0.6s' }}>
            <a href="#colecciones" className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105">
              Ver Colecciones
            </a>
            <a href="#contacto" className="border border-white/30 hover:border-indigo-400 text-white px-8 py-4 rounded-full font-semibold transition-all">
              Examen Visual Gratis
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Collections */}
      <section id="colecciones" className="py-32 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-indigo-400 tracking-[0.3em] text-sm mb-4">NUESTRAS COLECCIONES</p>
            <h2 className="font-display text-5xl md:text-6xl mb-6">Diseño que se ve</h2>
            <p className="text-white/60 text-xl max-w-2xl mx-auto">
              Las marcas más exclusivas del mundo en un solo lugar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {collections.map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-2xl">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="font-display text-2xl mb-1">{item.name}</h3>
                  <p className="text-white/70 text-sm mb-3">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-indigo-400 text-xl font-semibold">{item.price}</span>
                    <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-indigo-500 hover:text-white transition-all">
                      Ver Detalles
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 transition-all duration-700">
          <img 
            src={services[activeService].image}
            alt={services[activeService].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-indigo-400 tracking-[0.3em] text-sm mb-4">NUESTROS SERVICIOS</p>
            <h2 className="font-display text-5xl md:text-6xl mb-6">Cuidamos tu visión</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <div 
                key={service.id}
                onMouseEnter={() => setActiveService(index)}
                className={`p-8 rounded-2xl cursor-pointer transition-all duration-300 ${activeService === index ? 'bg-indigo-500/20 border-indigo-400' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}
              >
                <span className="text-4xl mb-4 block">{service.icon}</span>
                <h4 className="font-display text-xl mb-2">{service.title}</h4>
                <p className="text-white/60 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-16 bg-zinc-900 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            {brands.map((brand) => (
              <span key={brand} className="text-2xl font-display tracking-widest text-white/60">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="nosotros" className="py-32 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-indigo-400 tracking-[0.3em] text-sm mb-4">SOMOS VISIONOPTICA</p>
            <h2 className="font-display text-5xl md:text-6xl mb-6">Más de 20 años<br/>de excelencia visual</h2>
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              En VisionOptica combinamos tecnología de vanguardia con un estilo incomparable. 
              Cada cliente es único, y cada par de lentes que encuentra su hogar en tu rostro 
              es una obra de arte personalizada.
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <span className="text-4xl font-display text-indigo-400 block">20+</span>
                <span className="text-white/60 text-sm">Años</span>
              </div>
              <div className="text-center">
                <span className="text-4xl font-display text-indigo-400 block">15K+</span>
                <span className="text-white/60 text-sm">Clientes</span>
              </div>
              <div className="text-center">
                <span className="text-4xl font-display text-indigo-400 block">50+</span>
                <span className="text-white/60 text-sm">Marcas</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80"
              alt="About"
              className="rounded-2xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-indigo-500 p-8 rounded-2xl">
              <p className="font-display text-2xl">"Ver bien es vivir bien"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-indigo-400 tracking-[0.3em] text-sm mb-12">TESTIMONIOS</p>
          
          <div className="relative h-[200px]">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`absolute inset-0 transition-all duration-700 ${index === currentTestimonial ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                <blockquote className="font-display text-3xl md:text-4xl leading-tight text-white">
                  "{testimonial.text}"
                </blockquote>
                <p className="mt-8 text-indigo-400 text-lg">
                  — {testimonial.author}, {testimonial.role}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentTestimonial(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === currentTestimonial ? 'bg-indigo-400 w-8' : 'bg-white/30'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" className="py-24 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-5xl md:text-6xl mb-6">Agenda tu cita</h2>
          <p className="text-white/60 text-xl mb-12">Tu nueva experiencia visual comienza aquí</p>
          
          <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <input 
                type="text" 
                placeholder="Tu nombre"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/40 focus:border-indigo-400 outline-none transition"
              />
              <input 
                type="email" 
                placeholder="Tu correo"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/40 focus:border-indigo-400 outline-none transition"
              />
            </div>
            <input 
              type="tel" 
              placeholder="Tu teléfono"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/40 focus:border-indigo-400 outline-none transition"
            />
            <button type="submit" className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:scale-[1.02]">
              Solicitar Cita
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-display text-indigo-400">VISION<span className="text-white">OPTICA</span></div>
            <div className="flex gap-8 text-white/40 text-sm">
              <a href="#" className="hover:text-indigo-400 transition-colors">Privacidad</a>
              <a href="#" className="hover:text-indigo-400 transition-colors">Términos</a>
              <a href="#" className="hover:text-indigo-400 transition-colors">Contacto</a>
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:border-indigo-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>
          <p className="text-white/20 text-sm text-center mt-8">© 2026 VisionOptica. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
