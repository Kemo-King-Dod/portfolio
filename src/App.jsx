import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Github,
    ExternalLink,
    Code2,
    Terminal,
    Cpu,
    Smartphone,
    Apple,
    Play,
    ArrowRight,
    ChevronRight,
    TestTube2,
    Layers,
    Box,
    Download,
    CheckCircle2,
    Sparkles
} from 'lucide-react';

const App = () => {
    const [activeTab, setActiveTab] = useState('summary');

    // Animation variants
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const stagger = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const imageFloat = {
        animate: {
            y: [0, -20, 0],
            rotate: [0, 2, 0, -2, 0],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <div className="min-h-screen selection:bg-royal-gold/30">
            {/* Background Decoration */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-royal-gold/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-royal-green-light/10 blur-[100px] rounded-full" />
                <div className="absolute top-[20%] right-[10%] w-[15%] h-[15%] bg-royal-gold/5 blur-[80px] rounded-full" />
            </div>

            <nav className="fixed top-0 w-full z-50 glass border-b border-white/5 py-4 px-6 md:px-12 flex justify-between items-center backdrop-blur-md">
                <div className="text-2xl font-outfit font-bold tracking-tight flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-royal-gold flex items-center justify-center text-royal-green-dark">
                        <Smartphone size={18} />
                    </div>
                    <span className="text-royal-gold">Abo</span> Ishaq
                </div>
                <div className="hidden md:flex gap-8 text-sm font-medium text-white/70 uppercase tracking-widest">
                    <a href="#expertise" className="hover:text-royal-gold transition-colors">Expertise</a>
                    <a href="#apps" className="hover:text-royal-gold transition-colors">Launchpad</a>
                    <a href="#code" className="hover:text-royal-gold transition-colors">Architecture</a>
                    <a href="#contact" className="hover:text-royal-gold transition-colors">Connect</a>
                </div>
                <a
                    href="https://github.com/Kemo-King-Dod"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 glass rounded-full hover:border-royal-gold/50 transition-all font-medium text-sm"
                >
                    <Github size={18} /> <span className="hidden sm:inline">GitHub</span>
                </a>
            </nav>

            <main className="pt-24 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
                {/* Hero Section */}
                <motion.section
                    initial="initial"
                    animate="animate"
                    variants={stagger}
                    className="min-h-[80vh] flex flex-col-reverse lg:flex-row items-center justify-between gap-12 py-20"
                >
                    <div className="flex-1 text-center lg:text-left">
                        <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-royal-gold/20 text-royal-gold font-medium mb-8 text-xs uppercase tracking-[0.2em]">
                            <Sparkles size={14} /> Available for Elite Projects
                        </motion.div>

                        <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl lg:text-8xl font-outfit font-extrabold mb-8 leading-[1.05]">
                            <span className="text-royal-gold">ABO</span> ISHAQ <span className="text-royal-gold">.</span> <br />
                            <span className="text-gradient text-3xl md:text-[0.6em]">Flutter Architect.</span>
                        </motion.h1>

                        <motion.p variants={fadeIn} className="text-lg md:text-xl text-white/60 max-w-2xl mb-12 leading-relaxed">
                            Crafting industrial-grade mobile solutions with <span className="text-white font-semibold">Clean Architecture</span>.
                            Implementing <span className="text-white font-semibold">TDD</span> and <span className="text-white font-semibold">BLoC</span> to ensure every line of code is 100% reliable and scalable.
                        </motion.p>

                        <motion.div variants={fadeIn} className="flex flex-wrap gap-4 justify-center lg:justify-start">
                            <a href="#apps" className="btn-primary shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                                Explore My Work <ArrowRight size={20} />
                            </a>
                            <a href="#contact" className="btn-secondary">
                                Get In Touch
                            </a>
                        </motion.div>
                    </div>

                    <motion.div
                        variants={fadeIn}
                        className="flex-1 relative"
                    >
                        <motion.div
                            variants={imageFloat}
                            animate="animate"
                            className="relative z-10"
                        >
                            {/* Profile Image Container - Professional Frame */}
                            <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-4 border-royal-gold/20 shadow-[0_0_50px_rgba(212,175,55,0.1)] relative group">
                                <div className="absolute inset-0 bg-royal-gold/5 group-hover:bg-transparent transition-colors duration-500" />
                                <img
                                    src="/avatar.jpeg"
                                    alt="Abo Ishaq"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />

                                {/* Gloss effect on image */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            {/* Floating tech badges with enhanced presence */}
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-10 -right-8 glass p-5 rounded-3xl border-royal-gold/30 shadow-2xl hidden md:flex items-center gap-3 backdrop-blur-2xl"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-royal-gold/20 flex items-center justify-center text-royal-gold">
                                    <CheckCircle2 size={24} />
                                </div>
                                <div>
                                    <div className="text-2xl font-black font-outfit leading-none">100%</div>
                                    <div className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Reliability</div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute bottom-10 -left-12 glass p-5 rounded-3xl border-royal-green-light/30 shadow-2xl hidden md:flex items-center gap-3 backdrop-blur-2xl"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-royal-green-light/20 flex items-center justify-center text-royal-green-light">
                                    <Layers size={24} />
                                </div>
                                <div>
                                    <div className="text-xl font-black font-outfit leading-none italic uppercase">Clean</div>
                                    <div className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Architecture</div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Orbiting rings */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-royal-gold/5 rounded-full -z-10 animate-[spin_40s_linear_infinite]" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-white/5 rounded-full -z-10 animate-[spin_60s_linear_infinite_reverse]" />
                    </motion.div>
                </motion.section>

                {/* Expertise Section */}
                <section id="expertise" className="mb-48 scroll-mt-32">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-outfit font-bold mb-6"
                        >
                            The Modern <span className="text-royal-gold italic underline decoration-royal-gold/30 underline-offset-8">Arsenal</span>
                        </motion.h2>
                        <p className="text-white/40 max-w-xl mx-auto">Expertise forged in complex systems and mission-critical applications.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Box, title: "BLoC State", desc: "Rigidly predictable state management for complex logic flows." },
                            { icon: Layers, title: "Clean Arch", desc: "Decoupled layers ensuring long-term maintenance & testability." },
                            { icon: TestTube2, title: "TDD Expert", desc: "Writing testable code first to guarantee 0% production bugs." },
                            { icon: Smartphone, title: "High-Perf UI", desc: "60FPS animations and pixel-perfect native experiences." }
                        ].map((skill, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="glass-card group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-royal-gold/5 flex items-center justify-center text-royal-gold mb-8 group-hover:bg-royal-gold group-hover:text-royal-green-dark transition-all duration-500">
                                    <skill.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold mb-4">{skill.title}</h3>
                                <p className="text-sm text-white/50 leading-relaxed">
                                    {skill.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Apps Showcase - Launchpad */}
                <section id="apps" className="mb-48 scroll-mt-32">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-outfit font-bold mb-4">Launchpad</h2>
                            <div className="h-1.5 w-32 bg-gradient-to-r from-royal-gold to-transparent rounded-full" />
                        </div>
                        <p className="text-white/40 max-w-md text-right hidden md:block italic">
                            "Building applications that don't just work, but scale and inspire."
                        </p>
                    </div>

                    <div className="space-y-24">
                        {/* Project 1: Fasto */}
                        <div className="glass-card overflow-hidden !p-0 grid lg:grid-cols-2 gap-0 border-white/10 group shadow-2xl">
                            <div className="p-8 md:p-16 flex flex-col justify-center bg-gradient-to-br from-royal-green-dark to-royal-green/20">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal-gold/10 text-royal-gold text-[10px] font-bold uppercase tracking-widest mb-8 border border-royal-gold/20">
                                    <Smartphone size={12} /> Logistics & Fintech
                                </div>

                                <div className="flex items-center gap-6 mb-8">
                                    <div className="w-24 h-24 rounded-[2rem] bg-white p-4 shadow-2xl transform rotate-3 group-hover:rotate-0 transition-all duration-500">
                                        <img src="/fastoLogo.webp" alt="Fasto Logo" className="w-full h-full object-contain" />
                                    </div>
                                    <div>
                                        <h3 className="text-4xl md:text-5xl font-outfit font-extrabold mb-1">Fasto <span className="text-royal-gold opacity-50">.</span></h3>
                                        <p className="text-royal-gold font-medium tracking-wide">فاستو - Super App Ecosystem</p>
                                    </div>
                                </div>

                                <p className="text-white/60 text-lg mb-10 leading-relaxed italic border-l-2 border-royal-gold/30 pl-6">
                                    "A masterclass in BLoC implementation and clean architecture, handling real-time logistics with surgical precision."
                                </p>

                                <div className="flex flex-wrap gap-4 mb-12">
                                    <a
                                        href="https://apps.apple.com/us/app/%D9%81%D8%A7%D8%B3%D8%AA%D9%88/id6754520489"
                                        className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-2xl font-bold hover:bg-neutral-200 transition-all shadow-lg text-sm"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Apple size={20} fill="black" /> App Store
                                    </a>
                                    <a
                                        href="https://play.google.com/store/apps/details?id=com.fasto.ly&pcampaignid=web_share"
                                        className="flex items-center gap-2 glass px-6 py-3 rounded-2xl font-bold hover:bg-white/10 transition-all text-sm border-white/20"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Play size={20} fill="currentColor" /> Play Store
                                    </a>
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="border-t border-white/10 pt-6">
                                        <div className="text-2xl font-bold text-royal-gold font-outfit mb-1">1k+</div>
                                        <div className="text-[10px] text-white/30 uppercase tracking-widest">Active Users</div>
                                    </div>
                                    <div className="border-t border-white/10 pt-6">
                                        <div className="text-2xl font-bold text-royal-gold font-outfit mb-1">100%</div>
                                        <div className="text-[10px] text-white/30 uppercase tracking-widest">TDD Coverage</div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#112D24] min-h-[600px] relative overflow-hidden flex items-center justify-center p-12 group/device">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent opacity-20" />

                                <div className="relative w-full max-w-[320px] aspect-[9/19.5] z-20">
                                    <motion.div
                                        animate={{ y: [0, -20, 0] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute inset-0 bg-neutral-900 border-[10px] border-neutral-800 rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden"
                                    >
                                        <div className="absolute top-0 w-full h-8 flex justify-center items-end pb-1 z-30">
                                            <div className="w-24 h-6 bg-neutral-800 rounded-b-3xl" />
                                        </div>
                                        <img src="/screen.jpg" alt="Fasto App Interface" className="w-full h-full object-cover group-hover/device:scale-105 transition-transform duration-1000" />
                                    </motion.div>
                                    <div className="absolute inset-[-40px] bg-royal-gold/10 blur-3xl -z-10 group-hover/device:bg-royal-gold/20 transition-colors duration-700" />
                                </div>

                                <div className="absolute top-12 right-12 glass px-3 py-1.5 rounded-xl border-royal-gold/20 text-royal-gold font-bold text-[10px] z-30 animate-pulse">
                                    BLoC CORE
                                </div>
                            </div>
                        </div>

                        {/* Project 2: Murafiq */}
                        <div className="glass-card overflow-hidden !p-0 grid lg:grid-cols-2 gap-0 border-white/10 group shadow-2xl">
                            <div className="bg-[#0A2A20] min-h-[600px] relative overflow-hidden flex items-center justify-center p-12 group/device lg:order-1 order-2">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-royal-gold/5 to-transparent opacity-30" />

                                <div className="relative w-full max-w-[320px] aspect-[9/19.5] z-20">
                                    <motion.div
                                        animate={{ y: [0, 20, 0] }}
                                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute inset-0 bg-neutral-800 border-[10px] border-neutral-700/50 rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden"
                                    >
                                        <div className="absolute top-0 w-full h-8 flex justify-center items-end pb-1 z-30">
                                            <div className="w-24 h-6 bg-neutral-700/50 rounded-b-3xl" />
                                        </div>
                                        <img src="/screenM.webp" alt="Murafiq App Interface" className="w-full h-full object-cover group-hover/device:scale-110 transition-transform duration-1000" />
                                    </motion.div>
                                    <div className="absolute inset-[-40px] bg-white/5 blur-3xl -z-10 group-hover/device:bg-white/10 transition-colors duration-700" />
                                </div>

                                <div className="absolute bottom-12 left-12 glass px-3 py-1.5 rounded-xl border-white/10 text-white/50 font-bold text-[10px] z-30 tracking-widest">
                                    CLEAN COMPONENT
                                </div>
                            </div>

                            <div className="p-8 md:p-16 flex flex-col justify-center bg-gradient-to-bl from-royal-green-dark to-royal-green/10 lg:order-2 order-1">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-white/50 text-[10px] font-bold uppercase tracking-widest mb-8 border border-white/10">
                                    <Sparkles size={12} /> Companion & Lifestyle
                                </div>

                                <div className="flex items-center gap-6 mb-8">
                                    <div className="w-24 h-24 rounded-[2rem] bg-neutral-900 border border-white/10 p-4 shadow-2xl transform -rotate-3 group-hover:rotate-0 transition-all duration-500">
                                        <img src="/murafiqLogo.webp" alt="Murafiq Logo" className="w-full h-full object-contain" />
                                    </div>
                                    <div>
                                        <h3 className="text-4xl md:text-5xl font-outfit font-extrabold mb-1">Murafiq <span className="text-white opacity-20">.</span></h3>
                                        <p className="text-white/40 font-medium tracking-wide">مُرافق - Lifestyle Companion</p>
                                    </div>
                                </div>

                                <p className="text-white/60 text-lg mb-10 leading-relaxed italic border-l-2 border-white/10 pl-6">
                                    "A sophisticated lifestyle companion focusing on seamless interaction design and high-performance data handling."
                                </p>

                                <div className="flex flex-wrap gap-4 mb-12">
                                    <div className="px-6 py-3 rounded-2xl glass border-white/10 text-white/50 text-sm font-bold cursor-default flex items-center gap-2">
                                        <Box size={18} /> Architecture Peak
                                    </div>
                                    <div className="px-6 py-3 rounded-2xl glass border-white/10 text-white/50 text-sm font-bold cursor-default flex items-center gap-2">
                                        <Layers size={18} /> Scalable Logic
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="border-t border-white/5 pt-6">
                                        <div className="text-2xl font-bold text-white/80 font-outfit mb-1 italic">Industrial</div>
                                        <div className="text-[10px] text-white/20 uppercase tracking-widest">Code Standards</div>
                                    </div>
                                    <div className="border-t border-white/5 pt-6">
                                        <div className="text-2xl font-bold text-white/80 font-outfit mb-1 italic">Modular</div>
                                        <div className="text-[10px] text-white/20 uppercase tracking-widest">Project Scaling</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Code Snippet Section */}
                <section id="code" className="mb-48 scroll-mt-32">
                    <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
                        <div className="text-center md:text-left">
                            <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-4">Elite Architecture</h2>
                            <p className="text-white/40">Demonstrating pure separation of concerns and surgical logic handling.</p>
                        </div>
                        <div className="hidden md:block flex-1 h-[1px] bg-gradient-to-r from-royal-gold/50 to-transparent" />
                    </div>

                    <div className="glass p-2 rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] group">
                        <div className="bg-[#0D1117] rounded-2xl overflow-hidden border border-white/5 relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-royal-gold/5 to-transparent pointer-events-none" />

                            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#161B22]/50 backdrop-blur-md">
                                <div className="flex gap-2">
                                    <div className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] opacity-50 shadow-inner" />
                                    <div className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] opacity-50 shadow-inner" />
                                    <div className="w-3.5 h-3.5 rounded-full bg-[#27C93F] opacity-50 shadow-inner" />
                                </div>
                                <div className="flex items-center gap-2">
                                    <Code2 size={14} className="text-royal-gold" />
                                    <div className="text-[10px] text-white/50 font-mono tracking-widest uppercase">Fasto_Auth_Bloc.dart</div>
                                </div>
                                <div className="w-10 flex justify-end">
                                    <Download size={14} className="text-white/20 hover:text-royal-gold cursor-pointer transition-colors" />
                                </div>
                            </div>
                            <div className="p-8 md:p-12 font-mono text-sm overflow-x-auto leading-relaxed">
                                <pre className="text-blue-300">
                                    {`// Surgical Separation of Logic via BLoC & Clean Arch
@injectable
class FastoAuthBloc extends Bloc<AuthEvent, AuthState> {
  final LoginUseCase _loginUseCase;
  
  FastoAuthBloc(this._loginUseCase) : super(const AuthState.initial()) {
    on<_LoginStarted>(_onLoginStarted);
  }

  Future<void> _onLoginStarted(
    _LoginStarted event, 
    Emitter<AuthState> emit
  ) async {
    emit(const AuthState.loading());
    
    // Pure Domain Logic Execution
    final result = await _loginUseCase(
      LoginParams(email: event.email, password: event.password)
    );

    result.fold(
      (failure) => emit(AuthState.error(failure.message)),
      (user) => emit(AuthState.authenticated(user)),
    );
  }
}`}
                                </pre>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8">
                        <div className="flex items-center gap-3 glass px-4 py-2 rounded-full border-royal-gold/10">
                            <CheckCircle2 size={16} className="text-royal-gold" />
                            <span className="text-xs font-medium text-white/50 tracking-wide uppercase">Dagger/Hilt Injection</span>
                        </div>
                        <div className="flex items-center gap-3 glass px-4 py-2 rounded-full border-royal-gold/10">
                            <CheckCircle2 size={16} className="text-royal-gold" />
                            <span className="text-xs font-medium text-white/50 tracking-wide uppercase">Fail-Safe Handling</span>
                        </div>
                        <div className="flex items-center gap-3 glass px-4 py-2 rounded-full border-royal-gold/10">
                            <CheckCircle2 size={16} className="text-royal-gold" />
                            <span className="text-xs font-medium text-white/50 tracking-wide uppercase">Immutable States</span>
                        </div>
                    </div>
                </section>

                {/* Dynamic Footer */}
                <footer id="contact" className="relative mt-60 pt-40 pb-20 overflow-hidden">
                    {/* Decorative background for footer */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-royal-gold/30 to-transparent" />

                    <div className="text-center relative z-10">
                        <motion.div
                            style={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-12"
                        >
                            <h2 className="text-5xl md:text-8xl font-outfit font-black mb-8 tracking-tighter">
                                LET'S <span className="text-gradient">TRANSCEND</span> <br />
                                TOGETHER.
                            </h2>
                            <p className="text-white/40 max-w-lg mx-auto mb-16 px-6">
                                Currently open for senior high-impact roles or exclusive freelance partnerships where quality is non-negotiable.
                            </p>
                        </motion.div>

                        <div className="flex justify-center flex-wrap gap-8 mb-32 px-6">
                            <a href="https://github.com/Kemo-King-Dod" target="_blank" rel="noopener noreferrer" className="p-8 rounded-3xl glass hover:border-royal-gold/50 transition-all text-white hover:text-royal-gold group shadow-xl">
                                <div className="flex flex-col items-center gap-4">
                                    <Github size={40} className="group-hover:scale-110 transition-transform" />
                                    <span className="text-xs font-bold tracking-widest uppercase">Open Source</span>
                                </div>
                            </a>
                            <a href="mailto:abuis7aq.dev@gmail.com" className="p-8 rounded-3xl glass hover:border-royal-gold/50 transition-all text-white hover:text-royal-gold group shadow-xl">
                                <div className="flex flex-col items-center gap-4">
                                    <ExternalLink size={40} className="group-hover:scale-110 transition-transform" />
                                    <span className="text-xs font-bold tracking-widest uppercase">Contact Me</span>
                                </div>
                            </a>
                        </div>

                        <div className="flex flex-col md:flex-row justify-between items-center gap-8 py-12 px-6 border-t border-white/5">
                            <div className="text-[10px] text-white/30 font-bold uppercase tracking-[0.3em]">
                                © 2026 ABO ISHAQ // BUILT FOR EXCELLENCE
                            </div>
                            <div className="flex gap-8 text-[10px] font-black text-white/40 tracking-[0.2em] uppercase">
                                <span className="hover:text-royal-gold transition-colors cursor-default">Flutter</span>
                                <span className="hover:text-royal-gold transition-colors cursor-default">TDD</span>
                                <span className="hover:text-royal-gold transition-colors cursor-default">Clean Arch</span>
                            </div>
                        </div>
                    </div>

                    {/* Background blurred sphere for footer */}
                    <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-royal-gold/5 blur-[150px] rounded-full -z-10" />
                </footer>
            </main>
        </div>
    );
};

export default App;
