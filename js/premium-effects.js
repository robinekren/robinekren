// ===== ULTRA PREMIUM EFFECTS & ANIMATIONS =====
// Inspired by Apple, Tesla, and luxury brands

class PremiumEffects {
    constructor() {
        this.init();
        this.setupCursor();
        this.setupParallax();
        this.setupScrollAnimations();
        this.setupMagneticElements();
        this.setupParticleSystem();
    }

    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.start());
        } else {
            this.start();
        }
    }

    start() {
        this.addPremiumStyles();
        this.initCinematicLoading();
        this.setupAdvancedScrollEffects();
        this.initMicroInteractions();
        console.log('🎬 Ultra Premium Effects Loaded');
    }

    // ===== CINEMATIC LOADING =====
    initCinematicLoading() {
        const loader = document.createElement('div');
        loader.className = 'premium-loader';
        loader.innerHTML = `
            <div class="loader-content">
                <div class="loader-logo">
                    <span class="logo-text">Robin Ekren</span>
                    <div class="loader-line"></div>
                </div>
                <div class="loader-progress">
                    <div class="progress-bar"></div>
                </div>
            </div>
        `;
        document.body.appendChild(loader);

        // Animate loading
        setTimeout(() => {
            loader.classList.add('loaded');
            setTimeout(() => loader.remove(), 1000);
        }, 2000);
    }

    // ===== PREMIUM CURSOR =====
    setupCursor() {
        const cursor = document.createElement('div');
        cursor.className = 'premium-cursor';
        document.body.appendChild(cursor);

        const cursorDot = document.createElement('div');
        cursorDot.className = 'cursor-dot';
        cursor.appendChild(cursorDot);

        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        // Smooth cursor follow
        const animateCursor = () => {
            cursorX += (mouseX - cursorX) * 0.1;
            cursorY += (mouseY - cursorY) * 0.1;
            
            cursor.style.transform = `translate(${cursorX - 20}px, ${cursorY - 20}px)`;
            requestAnimationFrame(animateCursor);
        };
        animateCursor();

        // Cursor interactions
        document.querySelectorAll('a, button, .btn').forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
        });
    }

    // ===== 3D PARALLAX EFFECTS =====
    setupParallax() {
        const parallaxElements = document.querySelectorAll('.hero, .about-section, .projects-section');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            
            parallaxElements.forEach((el, index) => {
                const rate = scrolled * -0.5 * (index + 1);
                el.style.transform = `translate3d(0, ${rate}px, 0)`;
            });
        });
    }

    // ===== MAGNETIC ELEMENTS =====
    setupMagneticElements() {
        const magneticElements = document.querySelectorAll('.btn, .nav-link, .nav-logo');
        
        magneticElements.forEach(el => {
            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) scale(1.05)`;
            });
            
            el.addEventListener('mouseleave', () => {
                el.style.transform = 'translate(0, 0) scale(1)';
            });
        });
    }

    // ===== PARTICLE SYSTEM =====
    setupParticleSystem() {
        const canvas = document.createElement('canvas');
        canvas.className = 'particle-canvas';
        document.body.appendChild(canvas);
        
        const ctx = canvas.getContext('2d');
        const particles = [];
        
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        
        // Create particles
        for (let i = 0; i < 50; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.2
            });
        }
        
        const animateParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(particle => {
                particle.x += particle.vx;
                particle.y += particle.vy;
                
                if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
                
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 215, 0, ${particle.opacity})`;
                ctx.fill();
            });
            
            requestAnimationFrame(animateParticles);
        };
        animateParticles();
    }

    // ===== ADVANCED SCROLL ANIMATIONS =====
    setupAdvancedScrollEffects() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    
                    // Stagger animations for children
                    const children = entry.target.querySelectorAll('h1, h2, h3, p, .btn');
                    children.forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('animate-in');
                        }, index * 100);
                    });
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        });

        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });
    }

    // ===== MICRO INTERACTIONS =====
    initMicroInteractions() {
        // Button ripple effects
        document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const ripple = document.createElement('span');
                ripple.className = 'ripple';
                
                const rect = btn.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                
                btn.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 600);
            });
        });

        // Text reveal animations
        document.querySelectorAll('h1, h2, h3').forEach(heading => {
            const text = heading.textContent;
            heading.innerHTML = '';
            
            text.split('').forEach((char, index) => {
                const span = document.createElement('span');
                span.textContent = char === ' ' ? '\u00A0' : char;
                span.style.animationDelay = `${index * 0.05}s`;
                span.className = 'char-reveal';
                heading.appendChild(span);
            });
        });
    }

    // ===== PREMIUM STYLES INJECTION =====
    addPremiumStyles() {
        const styles = `
            /* Premium Cursor */
            .premium-cursor {
                position: fixed;
                top: 0;
                left: 0;
                width: 40px;
                height: 40px;
                pointer-events: none;
                z-index: 9999;
                mix-blend-mode: difference;
                transition: transform 0.3s ease;
            }
            
            .cursor-dot {
                width: 100%;
                height: 100%;
                border-radius: 50%;
                background: radial-gradient(circle, #FFD700 0%, #FFA500 100%);
                opacity: 0.8;
                transform: scale(0.5);
                transition: transform 0.3s ease;
            }
            
            .premium-cursor.hover .cursor-dot {
                transform: scale(1.5);
                background: radial-gradient(circle, #FFD700 0%, #FF8C00 100%);
            }
            
            /* Premium Loader */
            .premium-loader {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
                z-index: 10000;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: opacity 1s ease, visibility 1s ease;
            }
            
            .premium-loader.loaded {
                opacity: 0;
                visibility: hidden;
            }
            
            .loader-content {
                text-align: center;
            }
            
            .logo-text {
                font-size: 3rem;
                font-weight: 900;
                background: linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF8C00 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                display: block;
                margin-bottom: 2rem;
                animation: logoGlow 2s ease-in-out infinite alternate;
            }
            
            @keyframes logoGlow {
                0% { filter: brightness(1); }
                100% { filter: brightness(1.3); }
            }
            
            .loader-line {
                width: 200px;
                height: 2px;
                background: #333;
                margin: 0 auto 2rem;
                position: relative;
                overflow: hidden;
            }
            
            .loader-line::after {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, #FFD700, transparent);
                animation: lineMove 2s ease-in-out infinite;
            }
            
            @keyframes lineMove {
                0% { left: -100%; }
                100% { left: 100%; }
            }
            
            .progress-bar {
                width: 0;
                height: 4px;
                background: linear-gradient(90deg, #FFD700, #FFA500);
                border-radius: 2px;
                animation: progressLoad 2s ease-out forwards;
            }
            
            @keyframes progressLoad {
                0% { width: 0; }
                100% { width: 100%; }
            }
            
            /* Particle Canvas */
            .particle-canvas {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: 1;
                opacity: 0.6;
            }
            
            /* Ripple Effect */
            .ripple {
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.4);
                transform: scale(0);
                animation: rippleEffect 0.6s ease-out;
                pointer-events: none;
            }
            
            @keyframes rippleEffect {
                0% { transform: scale(0); opacity: 1; }
                100% { transform: scale(4); opacity: 0; }
            }
            
            /* Character Reveal */
            .char-reveal {
                display: inline-block;
                opacity: 0;
                transform: translateY(20px);
                animation: charReveal 0.6s ease-out forwards;
            }
            
            @keyframes charReveal {
                0% { opacity: 0; transform: translateY(20px); }
                100% { opacity: 1; transform: translateY(0); }
            }
            
            /* Section Animations */
            section {
                opacity: 0;
                transform: translateY(50px);
                transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            }
            
            section.animate-in {
                opacity: 1;
                transform: translateY(0);
            }
            
            /* Hide cursor on touch devices */
            @media (hover: none) {
                .premium-cursor { display: none; }
            }
        `;
        
        const styleSheet = document.createElement('style');
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
    }
}

// Initialize Premium Effects
new PremiumEffects();
