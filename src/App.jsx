import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Server, Smartphone, Shield, ChevronRight, MapPin, Mail, Phone, Check, Star, Zap, Users, Award, ArrowRight, Rocket } from 'lucide-react';
export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate services showcase
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies for maximum performance and scalability.",
      features: ["React & Next.js", "Responsive Design", "SEO Optimized", "Fast Loading"]
    },
    {
      icon: Server,
      title: "IT Services",
      description: "Comprehensive IT solutions including infrastructure setup, maintenance, and support for businesses of all sizes.",
      features: ["24/7 Support", "Cloud Solutions", "Network Security", "System Monitoring"]
    },
    {
      icon: Smartphone,
      title: "Mobile Solutions",
      description: "Responsive design and mobile-first applications that deliver seamless experiences across all devices.",
      features: ["iOS & Android", "Progressive Web Apps", "Cross-Platform", "App Store Deployment"]
    },
    {
      icon: Shield,
      title: "Security & Support",
      description: "Enterprise-grade security implementations and ongoing technical support to keep your systems running smoothly.",
      features: ["SSL Certificates", "Data Encryption", "Regular Backups", "Threat Protection"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc",
      role: "CEO",
      content: "Plexura transformed our online presence. Their team delivered beyond our expectations with a website that truly represents our brand.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Digital Ventures",
      role: "CTO",
      content: "Outstanding technical expertise and professionalism. They built a robust platform that scaled seamlessly with our growth.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Commerce Plus",
      role: "Marketing Director",
      content: "The best decision we made was partnering with Plexura. Our conversion rates increased by 300% after the redesign.",
      rating: 5
    }
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-[#0A1A2F] text-[#EAEAEA] overflow-x-hidden">
      {/* Enhanced Animated Background with Mint Green */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#007BFF] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#00C2CB] rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-[#3EE4A8] rounded-full blur-3xl animate-pulse delay-2000"></div>
          {/* Additional mint green accent orbs */}
          <div className="absolute top-3/4 left-1/2 w-72 h-72 bg-[#3EE4A8] rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/3 left-1/4 w-56 h-56 bg-[#3EE4A8] rounded-full blur-3xl animate-pulse delay-1500"></div>
        </div>
        
        {/* Flowing Wave Pattern */}
        <svg className="absolute bottom-0 left-0 w-full h-64 opacity-10" viewBox="0 0 1440 320">
          <path fill="#142D4C" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>

        {/* Mint Green Wave Overlay */}
        <svg className="absolute top-0 left-0 w-full h-64 opacity-5" viewBox="0 0 1440 320">
          <path fill="#3EE4A8" fillOpacity="1" d="M0,224L48,197.3C96,171,192,117,288,117.3C384,117,480,171,576,186.7C672,203,768,181,864,154.7C960,128,1056,96,1152,101.3C1248,107,1344,149,1392,170.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>

        {/* Animated Grid with Mint Tint */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: 'linear-gradient(#3EE4A8 1px, transparent 1px), linear-gradient(90deg, #007BFF 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0A1A2F]/95 backdrop-blur-md shadow-lg shadow-[#007BFF]/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 group cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-br from-[#007BFF] to-[#00C2CB] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-xl font-bold text-white">P</span>
              </div>
              <span className="text-2xl font-bold tracking-tight group-hover:text-[#00C2CB] transition-colors">Plexura</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-[#A0A7B0] hover:text-[#00C2CB] transition-colors duration-200 relative group">
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00C2CB] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#about" className="text-[#A0A7B0] hover:text-[#00C2CB] transition-colors duration-200 relative group">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00C2CB] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#testimonials" className="text-[#A0A7B0] hover:text-[#00C2CB] transition-colors duration-200 relative group">
                Testimonials
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00C2CB] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#contact" className="text-[#A0A7B0] hover:text-[#00C2CB] transition-colors duration-200 relative group">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00C2CB] group-hover:w-full transition-all duration-300"></span>
              </a>
              <button className="px-6 py-2 bg-[#007BFF] hover:bg-[#00C2CB] text-white rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg shadow-[#007BFF]/30 hover:shadow-[#00C2CB]/30">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-[#EAEAEA] hover:text-[#00C2CB] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4 animate-fadeIn">
              <a href="#services" className="block text-[#A0A7B0] hover:text-[#00C2CB] transition-colors" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#about" className="block text-[#A0A7B0] hover:text-[#00C2CB] transition-colors" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#testimonials" className="block text-[#A0A7B0] hover:text-[#00C2CB] transition-colors" onClick={() => setMobileMenuOpen(false)}>Testimonials</a>
              <a href="#contact" className="block text-[#A0A7B0] hover:text-[#00C2CB] transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</a>
              <button className="w-full px-6 py-2 bg-[#007BFF] hover:bg-[#00C2CB] text-white rounded-lg transition-all duration-200">
                Get Started
              </button>
            </div>
          )}
        </div>
      </nav>

    {/* Hero Section - Professional & Aspirational */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Sophisticated Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#007BFF] rounded-full blur-[150px] opacity-10 animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#00C2CB] rounded-full blur-[120px] opacity-10 animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
        </div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full" style={{
            backgroundImage: 'linear-gradient(#007BFF 1px, transparent 1px), linear-gradient(90deg, #00C2CB 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Animated Gradient Beams */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#007BFF] to-transparent animate-beam-vertical"></div>
          <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-[#00C2CB] to-transparent animate-beam-vertical" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-[#3EE4A8] to-transparent animate-beam-vertical" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="relative z-10 space-y-6">
              {/* Animated Badge */}
              <div className="inline-block">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#007BFF] to-[#00C2CB] rounded-full opacity-20 blur-lg group-hover:opacity-40 transition-all"></div>
                  <span className="relative px-4 py-2 bg-[#007BFF]/10 border border-[#007BFF]/30 rounded-full text-sm text-[#00C2CB] font-semibold flex items-center gap-2">
                    <MapPin size={14} />
                    Las Vegas & Salt Lake City
                  </span>
                </div>
              </div>
              
              {/* Main Headline */}
              <div className="space-y-2">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="block">
                    <span className="bg-gradient-to-r from-[#007BFF] via-[#00C2CB] to-[#3EE4A8] bg-clip-text text-transparent">
                      Your Next
                    </span>
                  </span>
                  <span className="block text-[#EAEAEA]">
                    Technology Partner
                  </span>
                </h1>
              </div>
              
              {/* Description */}
              <p className="text-xl text-[#A0A7B0] leading-relaxed max-w-xl">
  Enterprise quality with genuine partnership. We craft <span className="text-[#00C2CB] font-semibold">professional-grade solutions</span> with direct access to our team, personalized attention, and innovative thinking larger firms can't match.
</p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 pt-2">
                {[
                  { label: 'Growing Fast', icon: Zap },
                  { label: 'Proven Quality', icon: Award },
                  { label: 'Direct Access', icon: Users }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-2 group cursor-pointer"
                  >
                    <div className="relative w-8 h-8 bg-gradient-to-br from-[#007BFF] to-[#00C2CB] rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                      <item.icon size={16} className="text-white" />
                      <div className="absolute inset-0 bg-[#00C2CB]/20 rounded-lg blur-md group-hover:blur-lg transition-all"></div>
                    </div>
                    <span className="text-sm text-[#A0A7B0] font-medium group-hover:text-[#EAEAEA] transition-colors">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href="#contact" 
                  className="group relative px-8 py-4 bg-gradient-to-r from-[#007BFF] to-[#00C2CB] hover:from-[#00C2CB] hover:to-[#3EE4A8] text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center space-x-2 overflow-hidden"
                >
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  <span className="font-semibold relative z-10">Start Your Project</span>
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform relative z-10" />
                </a>
                <a 
                  href="#services"
                  className="group relative px-8 py-4 bg-transparent border-2 border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF]/10 hover:border-[#00C2CB] hover:text-[#00C2CB] rounded-lg transition-all duration-300 overflow-hidden font-semibold"
                >
                  <span className="relative z-10">View Our Services</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#007BFF]/0 via-[#007BFF]/10 to-[#007BFF]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </a>
              </div>

              {/* Quick Value Props */}
              <div className="pt-4 border-t border-[#007BFF]/20">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <Check size={16} className="text-[#3EE4A8] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-[#EAEAEA] font-semibold">Boutique Service</p>
                      <p className="text-xs text-[#A0A7B0]">Direct team access</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check size={16} className="text-[#3EE4A8] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-[#EAEAEA] font-semibold">Enterprise Quality</p>
                      <p className="text-xs text-[#A0A7B0]">Professional results</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Enhanced Visual */}
            <div className="relative w-full h-64 md:h-96 mt-8 md:mt-0">
              <div className="relative w-full h-full">
                {/* Layered Rotating Circles with Gradients */}
                <div className="absolute inset-0 opacity-40">
                  <svg viewBox="0 0 400 400" className="w-full h-full">
                    {/* Outer Circle */}
                    <circle 
                      cx="200" 
                      cy="200" 
                      r="150" 
                      fill="none" 
                      stroke="url(#gradient1)" 
                      strokeWidth="3" 
                      className="animate-spin-slow"
                      strokeDasharray="4 4"
                    />
                    {/* Second Circle */}
                    <circle 
                      cx="200" 
                      cy="200" 
                      r="120" 
                      fill="none" 
                      stroke="url(#gradient2)" 
                      strokeWidth="2" 
                      className="animate-spin-reverse"
                      strokeDasharray="8 4"
                    />
                    {/* Third Circle */}
                    <circle 
                      cx="200" 
                      cy="200" 
                      r="90" 
                      fill="none" 
                      stroke="url(#gradient1)" 
                      strokeWidth="3" 
                      className="animate-spin-slow"
                    />
                    {/* Inner Circle */}
                    <circle 
                      cx="200" 
                      cy="200" 
                      r="60" 
                      fill="none" 
                      stroke="url(#gradient3)" 
                      strokeWidth="2" 
                      className="animate-spin-reverse"
                      strokeDasharray="3 3"
                    />
                    
                    {/* Radial Lines with Pulse */}
                    {[...Array(16)].map((_, index) => (
                      <line
                        key={index}
                        x1="200"
                        y1="200"
                        x2={200 + Math.cos((index * Math.PI) / 8) * 150}
                        y2={200 + Math.sin((index * Math.PI) / 8) * 150}
                        stroke="#142D4C"
                        strokeWidth="1.5"
                        opacity="0.4"
                        className="animate-pulse-slow"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      />
                    ))}

                    {/* Connection Nodes */}
                    {[60, 90, 120, 150].map((radius, rIndex) => 
                      [...Array(8)].map((_, index) => (
                        <circle
                          key={`${rIndex}-${index}`}
                          cx={200 + Math.cos((index * Math.PI) / 4) * radius}
                          cy={200 + Math.sin((index * Math.PI) / 4) * radius}
                          r="2"
                          fill="#00C2CB"
                          className="animate-pulse"
                          style={{ animationDelay: `${(rIndex + index) * 0.15}s` }}
                        />
                      ))
                    )}
                    
                    {/* Gradients */}
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#007BFF" />
                        <stop offset="50%" stopColor="#00C2CB" />
                        <stop offset="100%" stopColor="#007BFF" />
                      </linearGradient>
                      <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#00C2CB" />
                        <stop offset="100%" stopColor="#3EE4A8" />
                      </linearGradient>
                      <linearGradient id="gradient3" x1="100%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#3EE4A8" />
                        <stop offset="100%" stopColor="#007BFF" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                
                {/* Enhanced Floating Elements with Trails */}
                <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-[#00C2CB] rounded-full animate-bounce shadow-lg shadow-[#00C2CB]/50">
                  <div className="absolute inset-0 bg-[#00C2CB] rounded-full blur-md animate-ping"></div>
                </div>
                <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-[#3EE4A8] rounded-full animate-pulse shadow-lg shadow-[#3EE4A8]/50">
                  <div className="absolute inset-0 bg-[#3EE4A8] rounded-full blur-md animate-ping" style={{ animationDelay: '0.5s' }}></div>
                </div>
                <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-[#007BFF] rounded-full animate-bounce delay-500 shadow-lg shadow-[#007BFF]/50">
                  <div className="absolute inset-0 bg-[#007BFF] rounded-full blur-md animate-ping" style={{ animationDelay: '1s' }}></div>
                </div>
                <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-[#00C2CB] rounded-full animate-ping"></div>
                <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-[#007BFF] rounded-full animate-ping delay-700"></div>
                <div className="absolute top-2/3 left-1/2 w-3 h-3 bg-[#3EE4A8] rounded-full animate-bounce delay-1000 shadow-lg shadow-[#3EE4A8]/50">
                  <div className="absolute inset-0 bg-[#3EE4A8] rounded-full blur-md animate-ping" style={{ animationDelay: '1.5s' }}></div>
                </div>

                {/* Additional Dynamic Particles */}
                {[...Array(8)].map((_, index) => (
                  <div
                    key={index}
                    className="absolute w-1 h-1 bg-gradient-to-r from-[#007BFF] to-[#00C2CB] rounded-full animate-orbit"
                    style={{
                      left: '50%',
                      top: '50%',
                      animationDelay: `${index * 0.8}s`,
                      animationDuration: `${6 + index}s`
                    }}
                  ></div>
                ))}
                
                {/* Multi-layered Glowing Orbs */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-[#007BFF] to-[#00C2CB] rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-36 md:h-36 bg-gradient-to-br from-[#00C2CB] to-[#3EE4A8] rounded-full blur-2xl opacity-25 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

                {/* Geometric Accent Shapes */}
                <div className="absolute top-10 right-10 w-16 h-16 border-2 border-[#007BFF]/30 rounded-lg rotate-12 animate-float-slow"></div>
                <div className="absolute bottom-10 left-10 w-12 h-12 border-2 border-[#00C2CB]/30 rounded-full animate-float-slow" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Animation Styles */}
        <style>{`
          @keyframes beam-vertical {
            0% {
              transform: translateY(-100%);
              opacity: 0;
            }
            50% {
              opacity: 1;
            }
            100% {
              transform: translateY(100%);
              opacity: 0;
            }
          }

          @keyframes orbit {
            0% {
              transform: translate(-50%, -50%) rotate(0deg) translateX(80px) rotate(0deg);
            }
            100% {
              transform: translate(-50%, -50%) rotate(360deg) translateX(80px) rotate(-360deg);
            }
          }

          @keyframes float-slow {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(5deg);
            }
          }

          .animate-beam-vertical {
            animation: beam-vertical 6s linear infinite;
          }

          .animate-orbit {
            animation: orbit linear infinite;
          }

          .animate-float-slow {
            animation: float-slow 4s ease-in-out infinite;
          }
        `}</style>
      </section>

{/* Google-Quality Technology Showcase with Advanced 3D Effects */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-[#0A1A2F] via-[#0f1f35] to-[#142D4C]/30 overflow-hidden">
        {/* Multi-layered Ambient Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#007BFF] rounded-full blur-[120px] animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#00C2CB] rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#3EE4A8] rounded-full blur-[80px] animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
        </div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full" style={{
            backgroundImage: 'linear-gradient(#007BFF 1px, transparent 1px), linear-gradient(90deg, #00C2CB 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            animation: 'grid-flow 20s linear infinite'
          }}></div>
        </div>

        {/* Enhanced Floating Geometric Shapes - Many More Shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Squares and Rectangles */}
          <div className="absolute top-[15%] left-[8%] w-16 h-16 border-2 border-[#007BFF]/20 rounded-lg rotate-12 animate-float-geometric"></div>
          <div className="absolute top-[25%] right-[12%] w-20 h-20 border-2 border-[#00C2CB]/25 rounded-xl animate-spin-slow-reverse"></div>
          <div className="absolute bottom-[20%] left-[15%] w-12 h-12 border-2 border-[#3EE4A8]/20 rotate-45 animate-float-geometric" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-[60%] left-[5%] w-14 h-14 border-[3px] border-[#007BFF]/15 rounded-lg rotate-[25deg] animate-spin-slow" style={{ animationDelay: '3s' }}></div>
          <div className="absolute bottom-[35%] right-[8%] w-18 h-18 border-2 border-[#00C2CB]/20 rounded-2xl animate-float-geometric" style={{ animationDelay: '4s' }}></div>
          
          {/* Circles */}
          <div className="absolute bottom-[30%] right-[18%] w-12 h-12 border-2 border-[#00C2CB]/20 rounded-full animate-float-geometric" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-[40%] left-[20%] w-16 h-16 border-[3px] border-[#3EE4A8]/15 rounded-full animate-pulse-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-[70%] right-[25%] w-10 h-10 border-2 border-[#007BFF]/25 rounded-full animate-float-geometric" style={{ animationDelay: '5s' }}></div>
          <div className="absolute bottom-[50%] left-[30%] w-14 h-14 border-2 border-[#00C2CB]/18 rounded-full animate-spin-slow-reverse" style={{ animationDelay: '2.5s' }}></div>
          
          {/* Triangles (using CSS) */}
          <div className="absolute top-[30%] right-[30%] w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-[#3EE4A8]/20 animate-float-geometric" style={{ animationDelay: '3.5s' }}></div>
          <div className="absolute bottom-[45%] right-[10%] w-0 h-0 border-l-[15px] border-r-[15px] border-b-[25px] border-l-transparent border-r-transparent border-b-[#007BFF]/15 animate-spin-slow" style={{ animationDelay: '1.8s' }}></div>
          
          {/* Diamonds (rotated squares) */}
          <div className="absolute top-[50%] right-[22%] w-16 h-16 border-2 border-[#3EE4A8]/20 rotate-45 animate-pulse-float" style={{ animationDelay: '4.2s' }}></div>
          <div className="absolute top-[80%] left-[25%] w-12 h-12 border-[3px] border-[#007BFF]/20 rounded-md rotate-45 animate-spin-slow-reverse" style={{ animationDelay: '6s' }}></div>
          <div className="absolute top-[10%] left-[35%] w-14 h-14 border-2 border-[#00C2CB]/18 rotate-45 animate-float-geometric" style={{ animationDelay: '2.8s' }}></div>
          
          {/* Hexagons (using clip-path) */}
          <div className="absolute top-[35%] left-[45%] w-16 h-16 bg-transparent border-2 border-[#007BFF]/20 animate-spin-slow" style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)', animationDelay: '3.2s' }}></div>
          <div className="absolute bottom-[25%] left-[40%] w-14 h-14 bg-transparent border-[3px] border-[#3EE4A8]/15 animate-float-geometric" style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)', animationDelay: '5.5s' }}></div>
          
          {/* Stars (using SVG) */}
          <svg className="absolute top-[45%] right-[35%] w-16 h-16 animate-spin-slow-reverse opacity-20" style={{ animationDelay: '4.5s' }} viewBox="0 0 24 24">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="none" stroke="#00C2CB" strokeWidth="2"/>
          </svg>
          <svg className="absolute bottom-[40%] left-[50%] w-12 h-12 animate-float-geometric opacity-15" style={{ animationDelay: '6.5s' }} viewBox="0 0 24 24">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="none" stroke="#3EE4A8" strokeWidth="2"/>
          </svg>
          
          {/* Plus Signs */}
          <div className="absolute top-[55%] left-[60%] w-14 h-2 bg-[#007BFF]/15 animate-spin-slow" style={{ animationDelay: '3.8s' }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-14 bg-[#007BFF]/15"></div>
          </div>
          <div className="absolute bottom-[60%] right-[40%] w-12 h-2 bg-[#00C2CB]/18 animate-float-geometric" style={{ animationDelay: '5.2s' }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-12 bg-[#00C2CB]/18"></div>
          </div>
          
          {/* Pentagons (using clip-path) */}
          <div className="absolute top-[65%] right-[45%] w-16 h-16 bg-transparent border-2 border-[#3EE4A8]/20 animate-spin-slow-reverse" style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)', animationDelay: '4.8s' }}></div>
          
          {/* Rounded Rectangles */}
          <div className="absolute top-[20%] right-[50%] w-20 h-12 border-2 border-[#007BFF]/20 rounded-full animate-float-geometric" style={{ animationDelay: '2.2s' }}></div>
          <div className="absolute bottom-[55%] left-[55%] w-16 h-10 border-[3px] border-[#00C2CB]/15 rounded-2xl animate-spin-slow" style={{ animationDelay: '6.2s' }}></div>
          
          {/* Small Accent Shapes */}
          <div className="absolute top-[75%] left-[70%] w-8 h-8 border-2 border-[#3EE4A8]/25 rounded-md rotate-12 animate-pulse-float" style={{ animationDelay: '1.2s' }}></div>
          <div className="absolute top-[15%] right-[60%] w-10 h-10 border-2 border-[#007BFF]/20 rounded-lg animate-spin-slow-reverse" style={{ animationDelay: '7s' }}></div>
          <div className="absolute bottom-[70%] right-[55%] w-6 h-6 border-[3px] border-[#00C2CB]/30 rounded-full animate-float-geometric" style={{ animationDelay: '3.5s' }}></div>
          
          {/* XL Shapes for variety */}
          <div className="absolute top-[5%] left-[65%] w-24 h-24 border-2 border-[#007BFF]/10 rounded-2xl rotate-[15deg] animate-spin-slow" style={{ animationDelay: '8s' }}></div>
          <div className="absolute bottom-[15%] right-[65%] w-20 h-20 border-[3px] border-[#3EE4A8]/12 rounded-full animate-float-geometric" style={{ animationDelay: '7.5s' }}></div>
          
          {/* Concentric Circles */}
          <div className="absolute top-[85%] right-[70%] w-16 h-16 animate-pulse-float" style={{ animationDelay: '4.5s' }}>
            <div className="absolute inset-0 border-2 border-[#00C2CB]/20 rounded-full"></div>
            <div className="absolute inset-2 border-2 border-[#00C2CB]/15 rounded-full"></div>
            <div className="absolute inset-4 border-2 border-[#00C2CB]/10 rounded-full"></div>
          </div>
          
          {/* Additional Scattered Small Shapes */}
          <div className="absolute top-[42%] left-[75%] w-7 h-7 border-2 border-[#007BFF]/20 rounded-md rotate-45 animate-spin-slow-reverse" style={{ animationDelay: '5.8s' }}></div>
          <div className="absolute bottom-[48%] right-[75%] w-9 h-9 border-2 border-[#3EE4A8]/18 rounded-lg animate-float-geometric" style={{ animationDelay: '6.8s' }}></div>
          <div className="absolute top-[58%] right-[80%] w-11 h-11 border-[3px] border-[#00C2CB]/15 rounded-full animate-pulse-float" style={{ animationDelay: '2.9s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block mb-6 animate-fadeInUp">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#007BFF] via-[#00C2CB] to-[#3EE4A8] rounded-full opacity-30 blur-lg group-hover:opacity-50 transition-all duration-500"></div>
                <span className="relative px-6 py-3 bg-[#142D4C]/80 backdrop-blur-sm border border-[#007BFF]/40 rounded-full text-sm text-[#00C2CB] font-bold inline-flex items-center gap-2 shadow-lg">
                  <Zap size={16} className="animate-pulse" />
                  <span className="bg-gradient-to-r from-[#00C2CB] to-[#3EE4A8] bg-clip-text text-transparent">TECHNOLOGY STACK</span>
                </span>
              </div>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#007BFF] via-[#00C2CB] to-[#3EE4A8] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  Built With Modern Technology
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#007BFF] via-[#00C2CB] to-transparent rounded-full opacity-50"></div>
              </span>
            </h2>
            
            <p className="text-[#A0A7B0] text-xl max-w-3xl mx-auto leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              Leveraging cutting-edge tools and frameworks to deliver exceptional, scalable solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Card 1 - Full-Stack Development */}
            <div className="group perspective-2000 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              <div className="relative preserve-3d transition-all duration-700 ease-out hover:rotate-y-2 hover:rotate-x-1">
                {/* Multi-layer Glow Effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[#007BFF] via-[#00C2CB] to-[#3EE4A8] rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700 animate-gradient-spin"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-[#007BFF] via-[#00C2CB] to-[#3EE4A8] rounded-3xl opacity-0 group-hover:opacity-60 blur-xl transition-all duration-700 animate-gradient-spin" style={{ animationDelay: '0.5s' }}></div>
                
                {/* Main Card Container */}
                <div className="relative overflow-hidden rounded-3xl border-2 border-[#007BFF]/30 group-hover:border-[#00C2CB]/60 transition-all duration-700 bg-gradient-to-br from-[#0A1A2F] to-[#0f1f35] shadow-2xl group-hover:shadow-[#007BFF]/50 transform group-hover:-translate-y-3 group-hover:scale-[1.02]">
                  
                  {/* Animated Corner Accents with Glow */}
                  <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#007BFF]/40 via-[#007BFF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-br-[100px]">
                    <div className="absolute inset-0 bg-[#007BFF] rounded-br-[100px] blur-xl opacity-50"></div>
                  </div>
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#00C2CB]/40 via-[#00C2CB]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-tl-[100px]">
                    <div className="absolute inset-0 bg-[#00C2CB] rounded-tl-[100px] blur-xl opacity-50"></div>
                  </div>

                  {/* Tech Pattern Overlay */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="h-full w-full" style={{
                      backgroundImage: 'radial-gradient(circle, #00C2CB 1px, transparent 1px)',
                      backgroundSize: '20px 20px'
                    }}></div>
                  </div>
                  
                  <div className="aspect-video relative overflow-hidden">
                    {/* Dynamic Code Symbols with 3D Effect */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-0 left-0 w-full h-full">
                        {[...Array(30)].map((_, index) => (
                          <div
                            key={index}
                            className="absolute text-[#00C2CB] font-mono font-bold transition-all duration-500 group-hover:scale-110"
                            style={{
                              top: `${Math.random() * 100}%`,
                              left: `${Math.random() * 100}%`,
                              fontSize: `${8 + Math.random() * 8}px`,
                              animation: `code-float ${3 + Math.random() * 4}s ease-in-out infinite`,
                              animationDelay: `${Math.random() * 3}s`,
                              textShadow: '0 0 10px rgba(0, 194, 203, 0.5)'
                            }}
                          >
                            {['</>', '{ }', '[ ]', '( )', '<>', '::'][Math.floor(Math.random() * 6)]}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Image Container with Advanced Effects */}
                    <div className="relative w-full h-full p-5">
                      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-[#007BFF]/60 transition-all duration-700">
                        {/* Image */}
                        <img
                          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=800&fit=crop&q=90"
                          alt="Advanced code development environment"
                          className="w-full h-full object-cover opacity-75 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 filter group-hover:brightness-110 group-hover:contrast-110"
                        />
                        
                        {/* Scanline Effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700">
                          <div className="h-full w-full animate-scanline" style={{
                            backgroundImage: 'linear-gradient(transparent 50%, rgba(0, 194, 203, 0.1) 50%)',
                            backgroundSize: '100% 4px'
                          }}></div>
                        </div>

                        {/* Multi-directional Shimmer */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1200 ease-out" style={{ transitionDelay: '0.2s' }}></div>
                        
                        {/* Sophisticated Gradient Overlays */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A2F] via-[#0A1A2F]/30 to-transparent opacity-90 group-hover:opacity-70 transition-all duration-700"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-[#007BFF]/30 via-transparent to-[#00C2CB]/30 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                        
                        {/* Vignette Effect */}
                        <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(10,26,47,0.8)] group-hover:shadow-[inset_0_0_100px_rgba(10,26,47,0.4)] transition-all duration-700"></div>
                      </div>
                    </div>
                    
                    {/* Premium Badge with Advanced Interactions */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="relative group/badge">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#007BFF] to-[#00C2CB] rounded-2xl opacity-0 group-hover:opacity-60 blur-lg transition-all duration-500"></div>
                        <div className="relative px-6 py-4 bg-gradient-to-r from-[#007BFF]/95 to-[#007BFF]/85 backdrop-blur-xl rounded-2xl border border-[#00C2CB]/50 shadow-2xl group-hover:shadow-[#007BFF]/70 transition-all duration-500 transform group-hover:scale-105">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="relative w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover/badge:rotate-12 transition-all duration-500">
                                <Code size={24} className="text-white drop-shadow-lg" />
                                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-xl"></div>
                              </div>
                              <div>
                                <span className="text-white font-bold text-lg block drop-shadow-md">Full-Stack Development</span>
                                <div className="flex gap-2 mt-1">
                                  {['React', 'Node', 'Tailwind'].map((tech, i) => (
                                    <span key={i} className="text-white/90 text-xs px-2 py-0.5 bg-white/10 rounded-full backdrop-blur-sm">
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="relative">
                              <ChevronRight size={24} className="text-white/70 group-hover:text-white group-hover:translate-x-2 transition-all duration-500" />
                              <div className="absolute inset-0 bg-white/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Animated Corner Tech Lines */}
                  <svg className="absolute top-0 right-0 w-32 h-32 opacity-20 group-hover:opacity-50 transition-all duration-700" viewBox="0 0 100 100">
                    <path d="M100,0 L100,50 L50,100 L0,100" stroke="url(#corner-gradient-1)" strokeWidth="2" fill="none" className="animate-draw-line"/>
                    <defs>
                      <linearGradient id="corner-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#007BFF" />
                        <stop offset="100%" stopColor="#00C2CB" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Hover State Particles */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-[#00C2CB] rounded-full animate-particle-burst"
                        style={{
                          top: '50%',
                          left: '50%',
                          animationDelay: `${i * 0.1}s`,
                          animationDuration: '2s'
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Cloud Infrastructure */}
            <div className="group perspective-2000 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              <div className="relative preserve-3d transition-all duration-700 ease-out hover:rotate-y-2 hover:rotate-x-1">
                {/* Multi-layer Glow Effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[#00C2CB] via-[#3EE4A8] to-[#007BFF] rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700 animate-gradient-spin"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00C2CB] via-[#3EE4A8] to-[#007BFF] rounded-3xl opacity-0 group-hover:opacity-60 blur-xl transition-all duration-700 animate-gradient-spin" style={{ animationDelay: '0.5s' }}></div>
                
                {/* Main Card Container */}
                <div className="relative overflow-hidden rounded-3xl border-2 border-[#00C2CB]/30 group-hover:border-[#007BFF]/60 transition-all duration-700 bg-gradient-to-br from-[#0A1A2F] to-[#0f1f35] shadow-2xl group-hover:shadow-[#00C2CB]/50 transform group-hover:-translate-y-3 group-hover:scale-[1.02]">
                  
                  {/* Animated Corner Accents */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#00C2CB]/40 via-[#00C2CB]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-bl-[100px]">
                    <div className="absolute inset-0 bg-[#00C2CB] rounded-bl-[100px] blur-xl opacity-50"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#007BFF]/40 via-[#007BFF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-tr-[100px]">
                    <div className="absolute inset-0 bg-[#007BFF] rounded-tr-[100px] blur-xl opacity-50"></div>
                  </div>

                  {/* Tech Pattern Overlay */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="h-full w-full" style={{
                      backgroundImage: 'radial-gradient(circle, #007BFF 1px, transparent 1px)',
                      backgroundSize: '20px 20px'
                    }}></div>
                  </div>
                  
                  <div className="aspect-video relative overflow-hidden">
                    {/* Animated Network Nodes */}
                    <div className="absolute inset-0 opacity-25">
                      <svg className="w-full h-full" viewBox="0 0 400 300">
                        {/* Network Nodes */}
                        {[...Array(25)].map((_, index) => {
                          const x = (index % 5) * 100 + 50;
                          const y = Math.floor(index / 5) * 75 + 37.5;
                          return (
                            <g key={index}>
                              <circle
                                cx={x}
                                cy={y}
                                r="4"
                                fill="#00C2CB"
                                className="animate-pulse"
                                style={{ animationDelay: `${index * 0.1}s` }}
                              />
                              <circle
                                cx={x}
                                cy={y}
                                r="8"
                                fill="none"
                                stroke="#00C2CB"
                                strokeWidth="1"
                                opacity="0.3"
                                className="animate-ping"
                                style={{ animationDelay: `${index * 0.1}s` }}
                              />
                            </g>
                          );
                        })}
                        {/* Connection Lines */}
                        {[...Array(15)].map((_, index) => (
                          <line
                            key={index}
                            x1={Math.random() * 400}
                            y1={Math.random() * 300}
                            x2={Math.random() * 400}
                            y2={Math.random() * 300}
                            stroke="#007BFF"
                            strokeWidth="1"
                            opacity="0.2"
                            className="animate-pulse"
                            style={{ animationDelay: `${index * 0.15}s` }}
                          />
                        ))}
                      </svg>
                    </div>
                    
                    {/* Image Container */}
                    <div className="relative w-full h-full p-5">
                      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-[#00C2CB]/60 transition-all duration-700">
                        <img
                          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=800&fit=crop&q=90"
                          alt="Cloud infrastructure and networking"
                          className="w-full h-full object-cover opacity-75 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 filter group-hover:brightness-110 group-hover:contrast-110"
                        />
                        
                        {/* Scanline Effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700">
                          <div className="h-full w-full animate-scanline" style={{
                            backgroundImage: 'linear-gradient(transparent 50%, rgba(0, 123, 255, 0.1) 50%)',
                            backgroundSize: '100% 4px'
                          }}></div>
                        </div>

                        {/* Multi-directional Shimmer */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" style={{ transitionDelay: '0.1s' }}></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1200 ease-out" style={{ transitionDelay: '0.3s' }}></div>
                        
                        {/* Gradient Overlays */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A2F] via-[#0A1A2F]/30 to-transparent opacity-90 group-hover:opacity-70 transition-all duration-700"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-[#00C2CB]/30 via-transparent to-[#007BFF]/30 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                        
                        {/* Vignette */}
                        <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(10,26,47,0.8)] group-hover:shadow-[inset_0_0_100px_rgba(10,26,47,0.4)] transition-all duration-700"></div>
                      </div>
                    </div>
                    
                    {/* Premium Badge */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="relative group/badge">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#00C2CB] to-[#007BFF] rounded-2xl opacity-0 group-hover:opacity-60 blur-lg transition-all duration-500"></div>
                        <div className="relative px-6 py-4 bg-gradient-to-r from-[#00C2CB]/95 to-[#00C2CB]/85 backdrop-blur-xl rounded-2xl border border-[#007BFF]/50 shadow-2xl group-hover:shadow-[#00C2CB]/70 transition-all duration-500 transform group-hover:scale-105">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="relative w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover/badge:rotate-12 transition-all duration-500">
                                <Server size={24} className="text-white drop-shadow-lg" />
                                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-xl"></div>
                              </div>
                              <div>
                                <span className="text-white font-bold text-lg block drop-shadow-md">Cloud Infrastructure</span>
                                <div className="flex gap-2 mt-1">
                                  {['AWS', 'Azure', 'Security'].map((tech, i) => (
                                    <span key={i} className="text-white/90 text-xs px-2 py-0.5 bg-white/10 rounded-full backdrop-blur-sm">
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="relative">
                              <ChevronRight size={24} className="text-white/70 group-hover:text-white group-hover:translate-x-2 transition-all duration-500" />
                              <div className="absolute inset-0 bg-white/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Corner Tech Lines */}
                  <svg className="absolute bottom-0 left-0 w-32 h-32 opacity-20 group-hover:opacity-50 transition-all duration-700" viewBox="0 0 100 100">
                    <path d="M0,100 L0,50 L50,0 L100,0" stroke="url(#corner-gradient-2)" strokeWidth="2" fill="none" className="animate-draw-line"/>
                    <defs>
                      <linearGradient id="corner-gradient-2" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#00C2CB" />
                        <stop offset="100%" stopColor="#007BFF" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Hover State Particles */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-[#007BFF] rounded-full animate-particle-burst"
                        style={{
                          top: '50%',
                          left: '50%',
                          animationDelay: `${i * 0.1}s`,
                          animationDuration: '2s'
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Animation Keyframes */}
        <style>{`
          @keyframes code-float {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
              opacity: 0.3;
            }
            50% {
              transform: translateY(-10px) rotate(5deg);
              opacity: 0.6;
            }
          }

          @keyframes scanline {
            0% {
              transform: translateY(-100%);
            }
            100% {
              transform: translateY(100%);
            }
          }

          @keyframes draw-line {
            0% {
              stroke-dasharray: 1000;
              stroke-dashoffset: 1000;
            }
            100% {
              stroke-dasharray: 1000;
              stroke-dashoffset: 0;
            }
          }

          @keyframes particle-burst {
            0% {
              transform: translate(-50%, -50%) translate(0, 0);
              opacity: 1;
            }
            100% {
              transform: translate(-50%, -50%) translate(calc(cos(var(--angle, 0deg)) * 100px), calc(sin(var(--angle, 0deg)) * 100px));
              opacity: 0;
            }
          }

          @keyframes gradient-spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          @keyframes float-geometric {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(10deg);
            }
          }

          @keyframes pulse-float {
            0%, 100% {
              transform: translateY(0) scale(1);
              opacity: 0.15;
            }
            50% {
              transform: translateY(-15px) scale(1.1);
              opacity: 0.25;
            }
          }

          @keyframes spin-slow {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          @keyframes spin-slow-reverse {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(-360deg);
            }
          }

          @keyframes grid-flow {
            0% {
              background-position: 0 0;
            }
            100% {
              background-position: 60px 60px;
            }
          }

          .animate-scanline {
            animation: scanline 4s linear infinite;
          }

          .animate-draw-line {
            animation: draw-line 2s ease-out forwards;
          }

          .animate-particle-burst {
            animation: particle-burst 2s ease-out forwards;
          }

          .animate-gradient-spin {
            animation: gradient-spin 8s linear infinite;
          }

          .animate-float-geometric {
            animation: float-geometric 6s ease-in-out infinite;
          }

          .animate-pulse-float {
            animation: pulse-float 5s ease-in-out infinite;
          }

          .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
          }

          .animate-spin-slow-reverse {
            animation: spin-slow-reverse 25s linear infinite;
          }

          .perspective-2000 {
            perspective: 2000px;
          }

          .preserve-3d {
            transform-style: preserve-3d;
          }

          .rotate-y-2:hover {
            transform: rotateY(2deg);
          }

          .rotate-x-1:hover {
            transform: rotateX(1deg);
          }
        `}</style>
      </section>

      

      {/* Enhanced Services Section - Google Quality */}
      <section id="services" className="relative py-20 px-6 overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#007BFF] rounded-full blur-[120px] animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-[#00C2CB] rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#007BFF] to-[#00C2CB] rounded-full opacity-20 blur-lg group-hover:opacity-40 transition-all"></div>
                <span className="relative px-4 py-2 bg-[#007BFF]/10 border border-[#007BFF]/30 rounded-full text-sm text-[#00C2CB] font-semibold">
                  WHAT WE OFFER
                </span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-[#EAEAEA]">Our </span>
              <span className="bg-gradient-to-r from-[#007BFF] to-[#00C2CB] bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-[#A0A7B0] text-lg max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to elevate your business in the digital landscape
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setActiveService(index)}
              >
                {/* Multi-layer Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-br from-[#007BFF] via-[#00C2CB] to-[#3EE4A8] rounded-2xl opacity-0 group-hover:opacity-75 blur-xl transition-all duration-500"></div>
                
                <div className={`relative p-6 bg-[#142D4C]/30 hover:bg-[#142D4C]/50 rounded-xl border transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl cursor-pointer ${
                  activeService === index ? 'border-[#00C2CB]/50 shadow-xl shadow-[#007BFF]/20' : 'border-[#007BFF]/20'
                }`}>
                  
                  {/* Radial Dot Background Pattern */}
                  <div className="absolute inset-0 opacity-5 rounded-xl overflow-hidden">
                    <div className="h-full w-full" style={{
                      backgroundImage: 'radial-gradient(circle, #00C2CB 1px, transparent 1px)',
                      backgroundSize: '20px 20px'
                    }}></div>
                  </div>

                  {/* Icon with Orbiting Particles */}
                  <div className="relative mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#007BFF] to-[#00C2CB] rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <service.icon size={28} className="text-white" />
                    </div>
                    {/* Orbiting Particles */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-[#3EE4A8] rounded-full animate-orbit" style={{ animationDuration: '3s' }}></div>
                      <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-[#00C2CB] rounded-full animate-orbit" style={{ animationDuration: '4s', animationDelay: '0.5s' }}></div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-[#EAEAEA] group-hover:text-[#00C2CB] transition-colors">{service.title}</h3>
                  <p className="text-[#A0A7B0] leading-relaxed mb-4">{service.description}</p>
                  
                  {/* Feature List with Slide Animation */}
                  <div className="space-y-2 mt-4">
                    {service.features.map((feature, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-center space-x-2 text-sm text-[#A0A7B0] opacity-0 group-hover:opacity-100 transition-all duration-300"
                        style={{ 
                          transitionDelay: `${idx * 100}ms`,
                          transform: 'translateX(-10px)',
                        }}
                      >
                        <Check size={14} className="text-[#3EE4A8]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Button with Gradient Slide */}
<div className="mt-4 pt-4 border-t border-[#007BFF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
  <button className="relative px-3 py-2 -mx-3 text-[#00C2CB] text-sm font-bold flex items-center space-x-1 hover:space-x-2 transition-all overflow-hidden rounded-lg group/btn">
    <span className="relative z-10 group-hover/btn:text-black transition-colors">Learn More</span>
    <ArrowRight size={16} className="relative z-10 group-hover/btn:text-black transition-colors" />
    {/* Gradient Background Slide */}
    <div className="absolute inset-0 -left-full bg-gradient-to-r from-[#00C2CB] to-[#3EE4A8] group-hover/btn:left-0 transition-all duration-300 rounded-lg"></div>
  </button>
</div>

                  {/* Service Number Badge */}
                  <div className="absolute bottom-4 right-4 w-10 h-10 bg-gradient-to-br from-[#007BFF]/10 to-[#00C2CB]/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-30 group-hover:opacity-100 transition-opacity">
                    <span className="text-lg font-black bg-gradient-to-br from-[#007BFF] to-[#00C2CB] bg-clip-text text-transparent">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* Value Propositions Section with Animation */}
<section className="relative py-20 px-6 bg-gradient-to-r from-[#142D4C]/50 to-[#0A1A2F]/50">
  <div className="max-w-7xl mx-auto">
    <div className="grid md:grid-cols-4 gap-8 text-center">
      <div className="space-y-2 group cursor-pointer">
        <div className="text-5xl font-bold bg-gradient-to-r from-[#007BFF] to-[#00C2CB] bg-clip-text text-transparent group-hover:scale-110 transition-transform">100%</div>
        <div className="text-[#A0A7B0] group-hover:text-[#EAEAEA] transition-colors">Client Satisfaction Focus</div>
      </div>
      <div className="space-y-2 group cursor-pointer">
        <div className="text-5xl font-bold bg-gradient-to-r from-[#007BFF] to-[#00C2CB] bg-clip-text text-transparent group-hover:scale-110 transition-transform">2</div>
        <div className="text-[#A0A7B0] group-hover:text-[#EAEAEA] transition-colors">Strategic Locations</div>
      </div>
      <div className="space-y-2 group cursor-pointer">
        <div className="text-5xl font-bold bg-gradient-to-r from-[#007BFF] to-[#00C2CB] bg-clip-text text-transparent group-hover:scale-110 transition-transform">Direct</div>
        <div className="text-[#A0A7B0] group-hover:text-[#EAEAEA] transition-colors">Team Access</div>
      </div>
      <div className="space-y-2 group cursor-pointer">
        <div className="text-5xl font-bold bg-gradient-to-r from-[#007BFF] to-[#00C2CB] bg-clip-text text-transparent group-hover:scale-110 transition-transform">24/7</div>
        <div className="text-[#A0A7B0] group-hover:text-[#EAEAEA] transition-colors">Support Available</div>
      </div>
    </div>
  </div>
</section>
      {/* About Section - Honest & Aspirational */}
      <section id="about" className="relative py-24 px-6 overflow-hidden">
        {/* Sophisticated Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#007BFF] rounded-full blur-[150px] opacity-10 animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#00C2CB] rounded-full blur-[120px] opacity-10 animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
        </div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full" style={{
            backgroundImage: 'linear-gradient(#007BFF 1px, transparent 1px), linear-gradient(90deg, #00C2CB 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#007BFF] to-[#00C2CB] rounded-full opacity-20 blur-lg group-hover:opacity-40 transition-all"></div>
                <span className="relative px-4 py-2 bg-[#007BFF]/10 border border-[#007BFF]/30 rounded-full text-sm text-[#00C2CB] font-semibold">
                  <Users size={14} className="inline mr-2" />
                  ABOUT US
                </span>
              </div>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-[#EAEAEA]">Building the Future, </span>
              <span className="bg-gradient-to-r from-[#007BFF] to-[#00C2CB] bg-clip-text text-transparent">One Client at a Time</span>
            </h2>
            <p className="text-[#A0A7B0] text-xl max-w-3xl mx-auto">
              A growing technology partner dedicated to delivering exceptional results from Las Vegas and Salt Lake City
            </p>
          </div>

          {/* Two-Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Company Story */}
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-br from-[#007BFF]/20 via-[#00C2CB]/20 to-[#3EE4A8]/20 rounded-2xl blur-xl"></div>
                <div className="relative p-8 bg-[#142D4C]/40 backdrop-blur-sm rounded-2xl border border-[#007BFF]/30">
                  <h3 className="text-2xl font-bold text-[#EAEAEA] mb-4">Our Story</h3>
                  <div className="space-y-4 text-[#A0A7B0] leading-relaxed">
                    <p>
                      Plexura was founded on a simple belief: <span className="text-[#00C2CB] font-semibold">every business deserves enterprise-quality technology without the enterprise price tag</span>. Operating from <span className="text-[#00C2CB] font-semibold">Las Vegas</span> and <span className="text-[#00C2CB] font-semibold">Salt Lake City</span>, we're strategically positioned to serve clients across the Western United States with personalized attention and cutting-edge solutions.
                    </p>
                    <p>
                      As an up-and-coming technology partner, we bring fresh perspectives combined with proven expertise. We're selective about the clients we work with because <span className="text-[#3EE4A8] font-semibold">quality matters more than quantity</span>. Each project receives our full attention, innovative thinking, and commitment to excellence.
                    </p>
                    <p>
                      We're on a mission to help <span className="text-[#3EE4A8] font-semibold">hundreds of businesses</span> transform their digital presence and achieve their goals. Every successful partnership brings us one step closer to that vision.
                    </p>
                  </div>

                  {/* Location Badges */}
                  <div className="flex flex-wrap gap-4 mt-6">
                    <div className="group relative">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#007BFF] to-[#00C2CB] rounded-lg opacity-50 group-hover:opacity-100 blur transition-all"></div>
                      <div className="relative px-4 py-2 bg-[#0A1A2F] rounded-lg border border-[#007BFF]/30 flex items-center gap-2">
                        <MapPin size={16} className="text-[#00C2CB]" />
                        <span className="text-[#EAEAEA] font-semibold">Las Vegas, NV</span>
                      </div>
                    </div>
                    <div className="group relative">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00C2CB] to-[#3EE4A8] rounded-lg opacity-50 group-hover:opacity-100 blur transition-all"></div>
                      <div className="relative px-4 py-2 bg-[#0A1A2F] rounded-lg border border-[#00C2CB]/30 flex items-center gap-2">
                        <MapPin size={16} className="text-[#3EE4A8]" />
                        <span className="text-[#EAEAEA] font-semibold">Salt Lake City, UT</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Core Values */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-br from-[#00C2CB]/20 via-[#3EE4A8]/20 to-[#007BFF]/20 rounded-2xl blur-xl"></div>
                <div className="relative p-8 bg-[#142D4C]/40 backdrop-blur-sm rounded-2xl border border-[#00C2CB]/30">
                  <h3 className="text-2xl font-bold text-[#EAEAEA] mb-6">What Drives Us</h3>
                  <div className="space-y-4">
                    {[
                      { icon: Award, title: 'Quality First', description: 'Every project gets our best work—no shortcuts, no compromises' },
                      { icon: Users, title: 'True Partnership', description: 'We succeed when you succeed. Your goals become our mission' },
                      { icon: Zap, title: 'Fresh Innovation', description: 'Combining proven methods with modern, creative solutions' },
                      { icon: Shield, title: 'Total Transparency', description: 'Honest communication, realistic timelines, clear pricing' }
                    ].map((value, index) => (
                      <div key={index} className="group flex items-start gap-4 p-4 rounded-lg hover:bg-[#0A1A2F]/50 transition-all">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#007BFF] to-[#00C2CB] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all">
                          <value.icon size={20} className="text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-[#EAEAEA] mb-1">{value.title}</h4>
                          <p className="text-sm text-[#A0A7B0]">{value.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Stats & Highlights */}
            <div className="space-y-6">
              {/* Key Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Rocket, title: 'Growing Fast', description: 'Expanding our reach and capabilities', color: 'from-[#007BFF] to-[#00C2CB]' },
                  { icon: Award, title: 'Proven Quality', description: 'Every project exceeds expectations', color: 'from-[#00C2CB] to-[#3EE4A8]' },
                  { icon: Users, title: 'Personal Touch', description: 'Direct access to our expert team', color: 'from-[#3EE4A8] to-[#007BFF]' },
                  { icon: MapPin, title: 'Dual Location', description: 'Vegas & Salt Lake City coverage', color: 'from-[#007BFF] to-[#00C2CB]' }
                ].map((item, index) => (
                  <div key={index} className="group relative">
                    {/* Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-br from-[#007BFF] via-[#00C2CB] to-[#3EE4A8] rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500"></div>
                    
                    <div className="relative p-6 bg-[#142D4C]/40 backdrop-blur-sm rounded-xl border border-[#007BFF]/30 group-hover:border-[#00C2CB]/50 transition-all">
                      {/* Icon */}
                      <div className={`inline-flex items-center justify-center w-12 h-12 mb-3 bg-gradient-to-br ${item.color} rounded-lg group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                        <item.icon size={24} className="text-white" />
                      </div>

                      {/* Title */}
                      <h4 className="text-lg font-bold text-[#EAEAEA] mb-2 group-hover:text-[#00C2CB] transition-colors">
                        {item.title}
                      </h4>

                      {/* Description */}
                      <p className="text-sm text-[#A0A7B0] group-hover:text-[#C0C7D0] transition-colors">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Why Two Locations */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-br from-[#007BFF]/20 via-[#00C2CB]/20 to-[#3EE4A8]/20 rounded-2xl blur-xl"></div>
                <div className="relative p-8 bg-[#142D4C]/40 backdrop-blur-sm rounded-2xl border border-[#007BFF]/30">
                  <h3 className="text-2xl font-bold text-[#EAEAEA] mb-6">Why Two Locations?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-[#007BFF] to-[#00C2CB] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Check size={14} className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-[#EAEAEA] font-bold mb-1">Las Vegas Advantage</h4>
                        <p className="text-sm text-[#A0A7B0]">Connection to hospitality, entertainment, and emerging tech sectors with 24/7 business culture</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-[#00C2CB] to-[#3EE4A8] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Check size={14} className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-[#EAEAEA] font-bold mb-1">Silicon Slopes Access</h4>
                        <p className="text-sm text-[#A0A7B0]">Salt Lake City's booming tech scene provides cutting-edge insights and innovative partnerships</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-[#3EE4A8] to-[#007BFF] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Check size={14} className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-[#EAEAEA] font-bold mb-1">Better Service</h4>
                        <p className="text-sm text-[#A0A7B0]">Extended coverage, diverse perspectives, and the ability to meet clients across the region</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Our Approach */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-br from-[#00C2CB]/20 via-[#3EE4A8]/20 to-[#007BFF]/20 rounded-2xl blur-xl"></div>
                <div className="relative p-8 bg-[#142D4C]/40 backdrop-blur-sm rounded-2xl border border-[#00C2CB]/30">
                  <h3 className="text-2xl font-bold text-[#EAEAEA] mb-4">Our Approach</h3>
                  <p className="text-[#A0A7B0] mb-6">
                    We're building something special—a technology partner that combines boutique service with enterprise-grade solutions. Our lean, talented team means <span className="text-[#00C2CB] font-semibold">you get direct access to the people actually building your project</span>, not layers of account managers.
                  </p>
                  
                  {/* Approach Stats */}
                  <div className="grid grid-cols-3 gap-4 p-4 bg-[#0A1A2F]/50 rounded-lg border border-[#007BFF]/20">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#00C2CB] mb-1">100%</div>
                      <div className="text-xs text-[#A0A7B0]">Client Focused</div>
                    </div>
                    <div className="text-center border-x border-[#007BFF]/20">
                      <div className="text-2xl font-bold text-[#3EE4A8] mb-1">24/7</div>
                      <div className="text-xs text-[#A0A7B0]">Support</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#007BFF] mb-1">2</div>
                      <div className="text-xs text-[#A0A7B0]">Locations</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA Banner */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#007BFF] via-[#00C2CB] to-[#3EE4A8] rounded-2xl opacity-20 blur-xl"></div>
            <div className="relative p-8 md:p-12 bg-gradient-to-r from-[#142D4C]/60 to-[#0A1A2F]/60 backdrop-blur-sm rounded-2xl border border-[#007BFF]/30 text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-[#EAEAEA] mb-4">
                Let's Build Something Great Together
              </h3>
              <p className="text-[#A0A7B0] text-lg mb-8 max-w-2xl mx-auto">
                We're taking on select projects and would love to hear about yours. Join the businesses already trusting us to bring their vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#contact" 
                  className="group px-8 py-4 bg-gradient-to-r from-[#007BFF] to-[#00C2CB] hover:from-[#00C2CB] hover:to-[#3EE4A8] text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center justify-center gap-2"
                >
                  <span>Start Your Project</span>
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#services" 
                  className="px-8 py-4 bg-transparent border-2 border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF]/10 hover:border-[#00C2CB] hover:text-[#00C2CB] rounded-lg transition-all duration-300 font-bold"
                >
                  View Our Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Enhanced Testimonials Section - Senior Level */}
      <section id="testimonials" className="relative py-20 px-6 overflow-hidden">
        {/* Sophisticated Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-[#007BFF] rounded-full blur-[150px] opacity-10 animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-[#00C2CB] rounded-full blur-[120px] opacity-10 animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#007BFF] to-[#00C2CB] rounded-full opacity-20 blur-lg group-hover:opacity-40 transition-all"></div>
                <span className="relative px-4 py-2 bg-[#007BFF]/10 border border-[#007BFF]/30 rounded-full text-sm text-[#00C2CB] font-semibold">
                  <Users size={14} className="inline mr-2" />
                  TESTIMONIALS
                </span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-[#EAEAEA]">What Our </span>
              <span className="bg-gradient-to-r from-[#007BFF] to-[#00C2CB] bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-[#A0A7B0] text-lg max-w-2xl mx-auto">
              Don't just take our word for it - hear from businesses we've helped succeed
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative"
              >
                {/* Multi-layer Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-br from-[#007BFF] via-[#00C2CB] to-[#3EE4A8] rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700"></div>
                
                <div className="relative h-full p-8 bg-[#142D4C]/30 hover:bg-[#142D4C]/50 rounded-xl border border-[#007BFF]/20 hover:border-[#00C2CB]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#007BFF]/20 hover:-translate-y-2">
                  
                  {/* Radial Dot Background Pattern */}
                  <div className="absolute inset-0 opacity-5 rounded-xl overflow-hidden">
                    <div className="h-full w-full" style={{
                      backgroundImage: 'radial-gradient(circle, #00C2CB 1px, transparent 1px)',
                      backgroundSize: '20px 20px'
                    }}></div>
                  </div>

                  {/* Large Decorative Quote with Glow */}
                  <div className="absolute top-4 right-4 text-[120px] leading-none font-serif text-[#007BFF] opacity-5 group-hover:opacity-10 transition-opacity select-none pointer-events-none">
                    "
                  </div>

                  {/* Stars with Individual Stagger Animation */}
                  <div className="relative flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div key={i} className="relative">
                        <Star 
                          size={18} 
                          className="fill-[#3EE4A8] text-[#3EE4A8] group-hover:scale-125 transition-transform duration-300" 
                          style={{ transitionDelay: `${i * 50}ms` }}
                        />
                        {/* Star Glow Effect */}
                        <div 
                          className="absolute inset-0 bg-[#3EE4A8] rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity" 
                          style={{ transitionDelay: `${i * 50}ms` }}
                        ></div>
                      </div>
                    ))}
                  </div>

                  {/* Content with Better Typography */}
                  <blockquote className="relative text-[#A0A7B0] text-base mb-6 leading-relaxed group-hover:text-[#C0C7D0] transition-colors">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author Section with Enhanced Design */}
                  <div className="relative flex items-center space-x-4 pt-6 border-t border-[#007BFF]/20 group-hover:border-[#00C2CB]/40 transition-colors">
                    {/* Avatar with Pulse Ring */}
                    <div className="relative flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#007BFF] to-[#00C2CB] rounded-full flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform shadow-lg">
                        {testimonial.name.charAt(0)}
                        {/* Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-full"></div>
                      </div>
                      {/* Pulse Ring Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#007BFF] to-[#00C2CB] rounded-full opacity-0 group-hover:opacity-30 animate-ping"></div>
                    </div>

                    {/* Author Info */}
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-base text-[#EAEAEA] group-hover:text-white transition-colors truncate">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-[#A0A7B0] group-hover:text-[#00C2CB] transition-colors truncate">
                        {testimonial.role} • {testimonial.company}
                      </div>
                    </div>

                    {/* Verified Badge - Appears on Hover */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex-shrink-0">
                      <div className="relative">
                        <div className="w-8 h-8 bg-gradient-to-br from-[#3EE4A8] to-[#00C2CB] rounded-full flex items-center justify-center shadow-lg">
                          <Check size={16} className="text-white" />
                        </div>
                        {/* Badge Glow */}
                        <div className="absolute inset-0 bg-[#3EE4A8] rounded-full blur-md opacity-50"></div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Corner Gradient Accent */}
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#007BFF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-tr-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-[#007BFF]/10 to-[#00C2CB]/10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-[#007BFF]/20 border border-[#007BFF]/30 rounded-full text-sm text-[#00C2CB] font-semibold">
              <Award size={14} className="inline mr-2" />
              LET'S GET STARTED
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-[#EAEAEA]">Ready to Transform Your </span>
            <span className="bg-gradient-to-r from-[#007BFF] to-[#00C2CB] bg-clip-text text-transparent">Digital Presence?</span>
          </h2>
          <p className="text-xl text-[#A0A7B0] max-w-2xl mx-auto">
            Let's discuss how Plexura can help your business thrive in the digital age. Schedule a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="#contact" className="group px-10 py-5 bg-[#007BFF] hover:bg-[#00C2CB] text-white text-lg rounded-lg transition-all duration-200 transform hover:scale-105 shadow-xl shadow-[#007BFF]/40 flex items-center justify-center space-x-2">
              <span className="font-semibold">Schedule a Consultation</span>
              <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="px-10 py-5 bg-transparent border-2 border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF]/10 hover:border-[#00C2CB] hover:text-[#00C2CB] text-lg rounded-lg transition-all duration-200">
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="relative py-20 px-6 bg-gradient-to-b from-[#0A1A2F] to-[#142D4C]/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-[#007BFF]/10 border border-[#007BFF]/30 rounded-full text-sm text-[#00C2CB] font-semibold">
                GET IN TOUCH
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-[#EAEAEA]">Let's Build </span>
              <span className="bg-gradient-to-r from-[#007BFF] to-[#00C2CB] bg-clip-text text-transparent">Something Great</span>
            </h2>
            <p className="text-[#A0A7B0] text-lg max-w-2xl mx-auto">
              Ready to take your business to the next level? Get in touch with our team
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Contact Info */}
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="group p-6 bg-[#142D4C]/30 hover:bg-[#142D4C]/50 rounded-xl border border-[#007BFF]/20 hover:border-[#00C2CB]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#007BFF]/10">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#007BFF] to-[#00C2CB] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Mail size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#EAEAEA] mb-1">Email Us</h3>
                      <p className="text-[#A0A7B0] mb-2">Send us an email anytime</p>
                      <a href="mailto:contact@plexura.com" className="text-[#00C2CB] hover:text-[#007BFF] transition-colors font-semibold">
                        contact@plexura.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group p-6 bg-[#142D4C]/30 hover:bg-[#142D4C]/50 rounded-xl border border-[#007BFF]/20 hover:border-[#00C2CB]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#007BFF]/10">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#007BFF] to-[#00C2CB] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Phone size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#EAEAEA] mb-1">Call Us</h3>
                      <p className="text-[#A0A7B0] mb-2">Mon-Fri from 8am to 6pm PST</p>
                      <a href="tel:+15551234567" className="text-[#00C2CB] hover:text-[#007BFF] transition-colors font-semibold">
                        (555) 123-4567
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group p-6 bg-[#142D4C]/30 hover:bg-[#142D4C]/50 rounded-xl border border-[#007BFF]/20 hover:border-[#00C2CB]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#007BFF]/10">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#007BFF] to-[#00C2CB] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <MapPin size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#EAEAEA] mb-1">Visit Us</h3>
                      <p className="text-[#A0A7B0] mb-2">Come say hello at our office</p>
                      <p className="text-[#00C2CB] font-semibold">
                        Las Vegas, Nevada<br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time Badge */}
              <div className="inline-flex items-center space-x-2 px-6 py-3 bg-[#3EE4A8]/10 border border-[#3EE4A8]/30 rounded-full">
                <div className="w-2 h-2 bg-[#3EE4A8] rounded-full animate-pulse"></div>
                <span className="text-[#3EE4A8] font-semibold text-sm">Average response time: 2 hours</span>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="relative">
              {formSubmitted && (
                <div className="absolute top-0 left-0 right-0 bg-[#3EE4A8]/10 border border-[#3EE4A8]/30 rounded-lg p-4 mb-4 animate-fadeIn z-10">
                  <div className="flex items-center space-x-2 text-[#3EE4A8]">
                    <Check size={20} />
                    <span className="font-semibold">Message sent successfully! We'll be in touch soon.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-6 p-8 bg-[#142D4C]/20 rounded-2xl border border-[#007BFF]/20 backdrop-blur-sm hover:border-[#007BFF]/40 transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-semibold text-[#EAEAEA]">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-[#0A1A2F] border border-[#007BFF]/30 rounded-lg text-[#EAEAEA] placeholder-[#A0A7B0] focus:border-[#00C2CB] focus:outline-none focus:ring-2 focus:ring-[#00C2CB]/20 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-semibold text-[#EAEAEA]">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-[#0A1A2F] border border-[#007BFF]/30 rounded-lg text-[#EAEAEA] placeholder-[#A0A7B0] focus:border-[#00C2CB] focus:outline-none focus:ring-2 focus:ring-[#00C2CB]/20 transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-semibold text-[#EAEAEA]">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 bg-[#0A1A2F] border border-[#007BFF]/30 rounded-lg text-[#EAEAEA] placeholder-[#A0A7B0] focus:border-[#00C2CB] focus:outline-none focus:ring-2 focus:ring-[#00C2CB]/20 transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="service" className="block text-sm font-semibold text-[#EAEAEA]">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full px-4 py-3 bg-[#0A1A2F] border border-[#007BFF]/30 rounded-lg text-[#EAEAEA] focus:border-[#00C2CB] focus:outline-none focus:ring-2 focus:ring-[#00C2CB]/20 transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="web-development">Web Development</option>
                      <option value="it-services">IT Services</option>
                      <option value="mobile-solutions">Mobile Solutions</option>
                      <option value="security-support">Security & Support</option>
                      <option value="consultation">General Consultation</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-[#EAEAEA]">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-[#0A1A2F] border border-[#007BFF]/30 rounded-lg text-[#EAEAEA] placeholder-[#A0A7B0] focus:border-[#00C2CB] focus:outline-none focus:ring-2 focus:ring-[#00C2CB]/20 transition-all resize-none"
                    placeholder="Tell us about your project and what you're looking to achieve..."
                  ></textarea>
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    required
                    className="mt-1 w-4 h-4 bg-[#0A1A2F] border border-[#007BFF]/30 rounded text-[#00C2CB] focus:ring-2 focus:ring-[#00C2CB]/20"
                  />
                  <label htmlFor="terms" className="text-sm text-[#A0A7B0]">
                    I agree to the terms and conditions and privacy policy *
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full group px-8 py-4 bg-[#007BFF] hover:bg-[#00C2CB] text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-xl shadow-[#007BFF]/40 hover:shadow-[#00C2CB]/40 flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-xs text-center text-[#A0A7B0]">
                  We'll get back to you within 24 hours
                </p>
              </form>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#007BFF] rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#00C2CB] rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="relative py-12 px-6 border-t border-[#142D4C]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 group cursor-pointer">
                <div className="w-10 h-10 bg-gradient-to-br from-[#007BFF] to-[#00C2CB] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-xl font-bold text-white">P</span>
                </div>
                <span className="text-2xl font-bold group-hover:text-[#00C2CB] transition-colors">Plexura</span>
              </div>
              <p className="text-[#A0A7B0]">
                Your trusted partner for web development and IT services in Las Vegas
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-[#142D4C] hover:bg-[#007BFF] rounded-lg flex items-center justify-center transition-all hover:scale-110">
                  <span className="text-[#EAEAEA]">𝕏</span>
                </a>
                <a href="#" className="w-10 h-10 bg-[#142D4C] hover:bg-[#007BFF] rounded-lg flex items-center justify-center transition-all hover:scale-110">
                  <span className="text-[#EAEAEA]">in</span>
                </a>
                <a href="#" className="w-10 h-10 bg-[#142D4C] hover:bg-[#007BFF] rounded-lg flex items-center justify-center transition-all hover:scale-110">
                  <span className="text-[#EAEAEA]">f</span>
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[#EAEAEA]">Services</h3>
              <div className="space-y-2">
                <a href="#services" className="block text-[#A0A7B0] hover:text-[#00C2CB] transition-colors hover:translate-x-1 transform duration-200">Web Development</a>
                <a href="#services" className="block text-[#A0A7B0] hover:text-[#00C2CB] transition-colors hover:translate-x-1 transform duration-200">IT Services</a>
                <a href="#services" className="block text-[#A0A7B0] hover:text-[#00C2CB] transition-colors hover:translate-x-1 transform duration-200">Mobile Solutions</a>
                <a href="#services" className="block text-[#A0A7B0] hover:text-[#00C2CB] transition-colors hover:translate-x-1 transform duration-200">Security & Support</a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[#EAEAEA]">Quick Links</h3>
              <div className="space-y-2">
                <a href="#about" className="block text-[#A0A7B0] hover:text-[#00C2CB] transition-colors hover:translate-x-1 transform duration-200">About Us</a>
                <a href="#testimonials" className="block text-[#A0A7B0] hover:text-[#00C2CB] transition-colors hover:translate-x-1 transform duration-200">Testimonials</a>
                <a href="#contact" className="block text-[#A0A7B0] hover:text-[#00C2CB] transition-colors hover:translate-x-1 transform duration-200">Contact</a>
                <a href="#" className="block text-[#A0A7B0] hover:text-[#00C2CB] transition-colors hover:translate-x-1 transform duration-200">Privacy Policy</a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[#EAEAEA]">Contact Info</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-[#A0A7B0] hover:text-[#00C2CB] transition-colors cursor-pointer">
                  <MapPin size={18} className="text-[#00C2CB] flex-shrink-0" />
                  <span>Las Vegas, Nevada</span>
                </div>
                <a href="mailto:contact@plexura.com" className="flex items-center space-x-2 text-[#A0A7B0] hover:text-[#00C2CB] transition-colors">
                  <Mail size={18} className="text-[#00C2CB] flex-shrink-0" />
                  <span>contact@plexura.com</span>
                </a>
                <a href="tel:+15551234567" className="flex items-center space-x-2 text-[#A0A7B0] hover:text-[#00C2CB] transition-colors">
                  <Phone size={18} className="text-[#00C2CB] flex-shrink-0" />
                  <span>(555) 123-4567</span>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-[#142D4C] flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[#A0A7B0] text-sm">&copy; 2025 Plexura. All rights reserved.</p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-[#A0A7B0] hover:text-[#00C2CB] transition-colors">Terms of Service</a>
              <a href="#" className="text-[#A0A7B0] hover:text-[#00C2CB] transition-colors">Privacy Policy</a>
              <a href="#" className="text-[#A0A7B0] hover:text-[#00C2CB] transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Enhanced Styles */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.05); }
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .delay-500 {
          animation-delay: 500ms;
        }

        .delay-700 {
          animation-delay: 700ms;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }

        .delay-2000 {
          animation-delay: 2000ms;
        }

        /* 3D Perspective Effects */
        .perspective-1000 {
          perspective: 1000px;
        }

        .preserve-3d {
          transform-style: preserve-3d;
        }

        .rotate-y-2:hover {
          transform: rotateY(2deg);
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #0A1A2F;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #007BFF, #00C2CB);
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #00C2CB, #007BFF);
        }
          @keyframes orbit {
  0% {
    transform: translate(-50%, -50%) rotate(0deg) translateX(35px) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg) translateX(35px) rotate(-360deg);
  }
}

.animate-orbit {
  animation: orbit linear infinite;
}
      `}</style>
    </div>
  );
}