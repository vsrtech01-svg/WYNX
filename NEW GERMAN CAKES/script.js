/* ============================================
   GERMAN CAKES — Premium Landing Page Script
   Ballpit (Three.js), Animations & Interactions
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    /* ============================================
       CINEMATIC INTRO — Scroll-Driven Cloud Scene
       ============================================ */
    const initIntro = () => {
        const overlay = document.getElementById('intro-overlay');
        if (!overlay) return;

        // Cache DOM references
        const els = {
            left: document.getElementById('introCloudsLeft'),
            right: document.getElementById('introCloudsRight'),
            top: document.getElementById('introCloudsTop'),
            haze: document.getElementById('introHaze'),
            hazeBottom: document.getElementById('introHazeBottom'),
            logo: document.getElementById('introLogo'),
            cue: document.getElementById('introScrollCue'),
            skip: document.getElementById('introSkipBtn'),
        };

        // --- Lock page scroll ---
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';

        // --- State ---
        let progress = 0;       // current animated progress [0..1]
        let targetProg = 0;       // driven by user input
        let rafId = null;
        let isComplete = false;

        // Thresholds for each stage
        const S2_START = 0.28;    // clouds begin parting
        const S3_START = 0.62;    // logo fades, overlay exits

        // --- Easing helpers ---
        const easeOut3 = t => 1 - Math.pow(1 - t, 3);
        const easeOut4 = t => 1 - Math.pow(1 - t, 4);
        const easeInOut = t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        const clamp01 = t => Math.min(1, Math.max(0, t));

        // --- Input handlers ---
        const onWheel = e => {
            if (isComplete) return;
            e.preventDefault();
            targetProg = clamp01(targetProg + e.deltaY * 0.0014);
        };

        let touchY = 0;
        const onTouchStart = e => { touchY = e.touches[0].clientY; };
        const onTouchMove = e => {
            if (isComplete) return;
            e.preventDefault();
            const dy = touchY - e.touches[0].clientY;
            targetProg = clamp01(targetProg + dy * 0.005);
            touchY = e.touches[0].clientY;
        };

        // Keyboard support (arrow down / space / page down)
        const onKey = e => {
            if (isComplete) return;
            if ([' ', 'ArrowDown', 'PageDown'].includes(e.key)) {
                e.preventDefault();
                targetProg = clamp01(targetProg + 0.18);
            }
            if (e.key === 'ArrowUp' || e.key === 'PageUp') {
                e.preventDefault();
                targetProg = clamp01(targetProg - 0.1);
            }
        };

        window.addEventListener('wheel', onWheel, { passive: false });
        window.addEventListener('touchstart', onTouchStart, { passive: true });
        window.addEventListener('touchmove', onTouchMove, { passive: false });
        window.addEventListener('keydown', onKey);

        // --- Mobile: auto-advance slowly after 1.5 seconds if no interaction ---
        let mobileAutoTimer = null;
        const isMobile = window.innerWidth < 768;
        if (isMobile) {
            mobileAutoTimer = setTimeout(() => {
                if (targetProg < 0.05) {
                    // Gentle automatic advance so mobile users don't get stuck
                    const autoAdvance = () => {
                        if (isComplete || targetProg > 0.98) return;
                        targetProg = clamp01(targetProg + 0.003);
                        setTimeout(autoAdvance, 45);
                    };
                    autoAdvance();
                }
            }, 2000);
        }

        // --- Skip button ---
        if (els.skip) {
            els.skip.addEventListener('click', () => {
                targetProg = 1;
            });
        }

        // --- Cleanup & complete ---
        const completeIntro = () => {
            if (isComplete) return;
            isComplete = true;

            clearTimeout(mobileAutoTimer);

            // Remove event listeners
            window.removeEventListener('wheel', onWheel);
            window.removeEventListener('touchstart', onTouchStart);
            window.removeEventListener('touchmove', onTouchMove);
            window.removeEventListener('keydown', onKey);

            // Final opacity fade
            overlay.style.transition = 'opacity 0.7s cubic-bezier(0.4,0,0.2,1)';
            overlay.style.opacity = '0';

            // Re-enable scroll
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';

            // Remove overlay from DOM
            setTimeout(() => {
                overlay.remove();
            }, 750);

            cancelAnimationFrame(rafId);
        };

        // --- Core animation frame ---
        const applyProgress = p => {

            // Stage sub-values
            const s1 = clamp01(p / S2_START);
            const s2Raw = clamp01((p - S2_START) / (S3_START - S2_START));
            const s2 = easeOut4(s2Raw);
            const s3 = easeInOut(clamp01((p - S3_START) / (1 - S3_START)));

            // ─── SCROLL CUE: fades with early scroll ───
            if (els.cue) {
                const cueOpacity = clamp01(1 - s1 * 2.5);
                els.cue.style.opacity = cueOpacity;
            }

            // ─── LEFT CLOUD GROUP ───
            if (els.left) {
                const xPct = -(s2 * 115);     // slide left  (vw units via %)
                const yPct = -(s2 * 12);      // drift upward
                const op = clamp01(1 - s2 * 1.05);
                els.left.style.transform = `translateX(${xPct}vw) translateY(${yPct}vh)`;
                els.left.style.opacity = op;
            }

            // ─── RIGHT CLOUD GROUP ───
            if (els.right) {
                const xPct = s2 * 115;
                const yPct = -(s2 * 12);
                const op = clamp01(1 - s2 * 1.05);
                els.right.style.transform = `translateX(${xPct}vw) translateY(${yPct}vh)`;
                els.right.style.opacity = op;
            }

            // ─── TOP CLOUD GROUP ───
            if (els.top) {
                const yPct = -(s2 * 75);      // rises steeply
                const op = clamp01(1 - s2 * 1.1);
                els.top.style.transform = `translateY(${yPct}vh)`;
                els.top.style.opacity = op;
            }

            // ─── CENTER HAZE ───
            if (els.haze) {
                els.haze.style.opacity = clamp01(1 - s2 * 1.3);
            }
            if (els.hazeBottom) {
                els.hazeBottom.style.opacity = clamp01(1 - s2 * 0.9);
            }

            // ─── LOGO REVEAL ───
            // Starts at s2Raw=0.22, peaks at s2Raw=0.7, fades out in stage 3
            if (els.logo) {
                const logoIn = easeOut3(clamp01((s2Raw - 0.22) / 0.55));
                const logoOut = s3;
                const opacity = clamp01(logoIn * (1 - logoOut * 1.3));
                const yOff = (1 - logoIn) * 45 - logoOut * 25;
                const scale = 0.86 + logoIn * 0.14 - logoOut * 0.06;
                // Drive the blur on the logo image for misty emergence
                const blurVal = (1 - logoIn) * 18;

                els.logo.style.opacity = opacity;
                els.logo.style.transform = `translate(-50%, calc(-50% + ${yOff}px)) scale(${scale})`;

                const logoImg = els.logo.querySelector('.ilr-img');
                if (logoImg) {
                    logoImg.style.filter =
                        `drop-shadow(0 0 ${30 + logoIn * 20}px rgba(232,201,110,${0.4 + logoIn * 0.4}))` +
                        ` drop-shadow(0 0 ${60 + logoIn * 30}px rgba(212,168,67,${0.2 + logoIn * 0.25}))` +
                        ` blur(${blurVal}px)`;
                }
            }

            // ─── OVERLAY FADE (Stage 3) ───
            if (s3 > 0.45) {
                const fadeStart = 0.45;
                const overlayOp = clamp01(1 - (s3 - fadeStart) / (1 - fadeStart));
                overlay.style.opacity = overlayOp;
            }

            // ─── COMPLETION CHECK ───
            if (p > 0.995 && Math.abs(targetProg - progress) < 0.002) {
                completeIntro();
            }
        };

        // --- RAF loop with smooth lerp ---
        const tick = () => {
            if (isComplete) return;

            // Smooth lerp toward target (slower = more cinematic)
            const lerpSpeed = 0.048;
            progress += (targetProg - progress) * lerpSpeed;

            applyProgress(progress);

            rafId = requestAnimationFrame(tick);
        };

        // Kick off
        rafId = requestAnimationFrame(tick);
    };

    initIntro();

    /* ============================================
       BALLPIT — Three.js Hero Background
       ============================================ */
    const initBallpit = () => {
        const canvas = document.getElementById('ballpit-canvas');
        if (!canvas || typeof THREE === 'undefined') return;

        const scene = new THREE.Scene();
        const W = canvas.offsetWidth || window.innerWidth;
        const H = canvas.offsetHeight || window.innerHeight;

        const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 1000);
        camera.position.z = 28;

        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
        renderer.setSize(W, H);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 0);

        // Brand palette colours — Golden, White, Sky Blue only
        const COLORS = [
            0xffffff,  // pure white
            0xE3F2F8,  // ice white/pale blue
            0x86D1EA,  // sky blue
            0xf0d87a,  // golden light
            0xe8c96e,  // warm golden
            0xD4A843,  // deep gold
            0xfaf5e4,  // cream white
            0xb8e4f5,  // soft sky blue
        ];

        // Create balls
        const balls = [];
        const COUNT = window.innerWidth < 768 ? 28 : 55;
        const FIELD_W = 30, FIELD_H = 18;

        const geometry = new THREE.SphereGeometry(1, 28, 20);

        for (let i = 0; i < COUNT; i++) {
            const color = COLORS[i % COLORS.length];
            const material = new THREE.MeshPhongMaterial({
                color,
                shininess: 120,
                specular: new THREE.Color(0xffffff),
                transparent: true,
                opacity: 0.85,
            });

            const radius = 0.55 + Math.random() * 0.85;
            const mesh = new THREE.Mesh(geometry, material);
            mesh.scale.setScalar(radius);

            mesh.position.set(
                (Math.random() - 0.5) * FIELD_W,
                (Math.random() - 0.5) * FIELD_H,
                (Math.random() - 0.5) * 8
            );

            const ball = {
                mesh,
                radius,
                vx: (Math.random() - 0.5) * 0.025,
                vy: (Math.random() - 0.5) * 0.025,
                vz: (Math.random() - 0.5) * 0.012,
                phase: Math.random() * Math.PI * 2,
                freq: 0.3 + Math.random() * 0.5,
            };

            scene.add(mesh);
            balls.push(ball);
        }

        // Lighting
        const ambient = new THREE.AmbientLight(0xffffff, 0.55);
        scene.add(ambient);

        const light1 = new THREE.PointLight(0x86D1EA, 1.4, 60);
        light1.position.set(10, 14, 15);
        scene.add(light1);

        const light2 = new THREE.PointLight(0xe8c96e, 1.0, 50);
        light2.position.set(-14, -8, 12);
        scene.add(light2);

        const light3 = new THREE.PointLight(0xffffff, 0.6, 40);
        light3.position.set(0, -10, 8);
        scene.add(light3);

        let animId;
        let time = 0;

        const animate = () => {
            animId = requestAnimationFrame(animate);
            time += 0.008;

            balls.forEach((b, i) => {
                b.mesh.position.x += b.vx;
                b.mesh.position.y += b.vy + Math.sin(time * b.freq + b.phase) * 0.004;
                b.mesh.position.z += b.vz;

                // Bounce off walls
                if (Math.abs(b.mesh.position.x) > FIELD_W / 2 - b.radius) b.vx *= -1;
                if (Math.abs(b.mesh.position.y) > FIELD_H / 2 - b.radius) b.vy *= -1;
                if (Math.abs(b.mesh.position.z) > 5 - b.radius) b.vz *= -1;

                // Gentle rotation
                b.mesh.rotation.x += 0.004;
                b.mesh.rotation.y += 0.006;
            });

            renderer.render(scene, camera);
        };

        animate();

        // Resize handler
        const handleResize = () => {
            const w = canvas.offsetWidth;
            const h = canvas.offsetHeight;
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
        };
        window.addEventListener('resize', handleResize, { passive: true });

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', handleResize);
        };
    };

    initBallpit();

    /* ============================================
       HEADER SCROLL
       ============================================ */
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });

    /* ============================================
       MOBILE MENU
       ============================================ */
    const menuToggle = document.getElementById('menu-toggle');
    const headerNav = document.getElementById('header-nav');
    if (menuToggle && headerNav) {
        menuToggle.addEventListener('click', () => {
            headerNav.classList.toggle('open');
            menuToggle.classList.toggle('active');
        });
        headerNav.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                headerNav.classList.remove('open');
                menuToggle.classList.remove('active');
            });
        });
    }

    /* ============================================
       SMOOTH SCROLL
       ============================================ */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offset = 80;
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    /* ============================================
       INTERSECTION OBSERVER — REVEAL
       ============================================ */
    const observeElements = (selector, opts = {}) => {
        const els = document.querySelectorAll(selector);
        if (!els.length) return;

        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry, idx) => {
                if (entry.isIntersecting) {
                    const delay = opts.stagger ? idx * (opts.staggerDelay || 150) : 0;
                    setTimeout(() => {
                        entry.target.classList.add(opts.cls || 'visible');
                    }, delay);
                    if (!opts.repeat) io.unobserve(entry.target);
                }
            });
        }, { threshold: opts.threshold || 0.12, rootMargin: opts.rootMargin || '0px 0px -40px 0px' });

        els.forEach(el => io.observe(el));
    };

    // Generic reveals
    observeElements('.reveal-up', { cls: 'visible' });
    observeElements('.reveal-left', { cls: 'visible' });
    observeElements('.reveal-right', { cls: 'visible' });

    // Staggered card reveals
    observeElements('.cake-card', { cls: 'animate-in', stagger: true, staggerDelay: 120 });
    observeElements('.why-card', { cls: 'animate-in', stagger: true, staggerDelay: 100 });
    observeElements('.gallery-item', { cls: 'animate-in', stagger: true, staggerDelay: 140 });
    observeElements('.testimonial-card', { cls: 'animate-in', stagger: true, staggerDelay: 180 });
    observeElements('.featured-cta', { cls: 'animate-in' });

    /* ============================================
       HERO STAT COUNTERS
       ============================================ */
    const animateStats = () => {
        const stats = document.querySelectorAll('.hero-stat-number');
        if (!stats.length) return;

        const io = new IntersectionObserver((entries) => {
            if (!entries[0].isIntersecting) return;
            io.disconnect();

            stats.forEach(el => {
                const target = parseFloat(el.getAttribute('data-count') || el.textContent);
                let start = 0;
                const dur = 1800;
                const step = 16;
                const inc = target / (dur / step);
                const isInt = Number.isInteger(target);

                const tick = () => {
                    start = Math.min(start + inc, target);
                    el.textContent = isInt ? Math.floor(start) : start.toFixed(1);
                    if (start < target) setTimeout(tick, step);
                    else el.textContent = isInt ? target : target.toFixed(1);
                };
                tick();
            });
        }, { threshold: 0.5 });

        const statsEl = document.querySelector('.hero-stats');
        if (statsEl) io.observe(statsEl);
    };
    animateStats();

    /* ============================================
       SPARKLE GENERATOR — HERO
       ============================================ */
    const heroEl = document.querySelector('.hero');
    if (heroEl) {
        setInterval(() => {
            const spk = document.createElement('div');
            const symbols = ['✦', '✧', '✶', '⋆', '✸'];
            spk.textContent = symbols[Math.floor(Math.random() * symbols.length)];
            spk.style.cssText = `
        position:absolute;
        left:${10 + Math.random() * 80}%;
        top:${10 + Math.random() * 80}%;
        font-size:${8 + Math.random() * 10}px;
        color:rgba(232,201,110,${0.4 + Math.random() * 0.5});
        pointer-events:none;
        z-index:4;
        opacity:0;
        animation:sparkleAnim ${2 + Math.random() * 2}s ease-in-out forwards;
      `;
            heroEl.appendChild(spk);
            setTimeout(() => spk.remove(), 4200);
        }, 1400);
    }

    /* ============================================
       BUTTON RIPPLE
       ============================================ */
    document.querySelectorAll('.btn-hero-primary, .btn-section-cta, .btn-form-submit, .btn-nav-order').forEach(btn => {
        btn.addEventListener('click', function (e) {
            const r = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            r.style.cssText = `
        position:absolute;left:${e.clientX - rect.left - size / 2}px;
        top:${e.clientY - rect.top - size / 2}px;
        width:${size}px;height:${size}px;
        border-radius:50%;
        background:rgba(255,255,255,0.22);
        pointer-events:none;
        transform:scale(0);
        animation:rippleEffect 0.55s ease-out forwards;
      `;
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(r);
            setTimeout(() => r.remove(), 600);
        });
    });

    /* Ripple keyframe (injected) */
    const styleEl = document.createElement('style');
    styleEl.textContent = `
    @keyframes rippleEffect {
      to { transform: scale(2.5); opacity: 0; }
    }
  `;
    document.head.appendChild(styleEl);

    /* ============================================
       GALLERY ITEM BOUNCE ON HOVER
       ============================================ */
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-8px) scale(1.02)';
            item.style.transition = 'transform 0.5s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease';
        });
        item.addEventListener('mouseleave', () => {
            item.style.transform = '';
            item.style.transition = 'transform 0.4s ease, box-shadow 0.4s ease';
        });
    });

    /* ============================================
       TESTIMONIAL CARD 3D TILT
       ============================================ */
    document.querySelectorAll('.testimonial-card').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
            const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
            card.style.transform = `perspective(700px) rotateX(${-y}deg) rotateY(${x}deg) translateY(-8px)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transition = 'transform 0.5s ease';
            card.style.transform = '';
            setTimeout(() => card.style.transition = '', 500);
        });
    });

    /* ============================================
       ABOUT PILLARS STAGGER
       ============================================ */
    observeElements('.about-pillar', { cls: 'animate-in', stagger: true, staggerDelay: 120 });

    // Add base style for pillars
    const pillarStyle = document.createElement('style');
    pillarStyle.textContent = `
    .about-pillar {
      opacity: 0;
      transform: translateX(-20px);
      transition: opacity 0.5s ease, transform 0.6s cubic-bezier(0.34,1.3,0.64,1);
    }
    .about-pillar.animate-in {
      opacity: 1;
      transform: translateX(0);
    }
  `;
    document.head.appendChild(pillarStyle);

    /* ============================================
       ACTIVE NAV HIGHLIGHT
       ============================================ */
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY + 120;
        sections.forEach(sec => {
            const top = sec.offsetTop;
            const h = sec.offsetHeight;
            const id = sec.id;
            const link = document.querySelector(`.header-nav a[href="#${id}"]`);
            if (link) {
                link.style.color = (scrollY > top && scrollY < top + h)
                    ? 'var(--golden-light)'
                    : '';
            }
        });
    }, { passive: true });

    /* ============================================
       IMAGE LOAD FADE-IN
       ============================================ */
    document.querySelectorAll('img').forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease';
        const show = () => { img.style.opacity = '1'; };
        if (img.complete) show();
        else {
            img.addEventListener('load', show);
            img.addEventListener('error', show);
        }
    });

    /* ============================================
       CONTACT FORM SUBMIT
       ============================================ */
    const form = document.getElementById('contact-form');
    const submitBtn = document.getElementById('btn-submit');
    if (form && submitBtn) {
        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            if (!name || !phone) {
                submitBtn.textContent = '⚠️ Please fill in name & phone';
                setTimeout(() => {
                    submitBtn.innerHTML = '<span class="btn-icon">🎂</span><span>Send My Order Request</span>';
                }, 2000);
                return;
            }
            submitBtn.innerHTML = '<span>✓ Request Sent! We\'ll be in touch soon 🎂</span>';
            submitBtn.style.background = 'linear-gradient(135deg, #8BB661, #a8d47a)';
            submitBtn.style.color = '#fff';
            setTimeout(() => {
                submitBtn.innerHTML = '<span class="btn-icon">🎂</span><span>Send My Order Request</span>';
                submitBtn.style.background = '';
                submitBtn.style.color = '';
            }, 4000);
        });
    }

    /* ============================================
       WHY CARD BOUNCE — extra
       ============================================ */
    document.querySelectorAll('.why-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'transform 0.5s cubic-bezier(0.34,1.56,0.64,1), background 0.4s ease, box-shadow 0.4s ease';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transition = 'transform 0.4s ease, background 0.4s ease, box-shadow 0.4s ease';
        });
    });

    /* ============================================
       MUFFIN CURSOR
       ============================================ */
    const initMuffinCursor = () => {
        // Apply muffin cursor to the whole page
        const cursorStyle = document.createElement('style');
        cursorStyle.textContent = `
            *, *::before, *::after {
                cursor: url('images/muffin-cursor.png') 16 16, auto !important;
            }
            a, button, [role="button"], input, select, textarea, label {
                cursor: url('images/muffin-cursor.png') 16 16, pointer !important;
            }
        `;
        document.head.appendChild(cursorStyle);
    };
    initMuffinCursor();

    console.log('🎂 German Cakes — Premium landing page loaded!');
});


// --- NEW FEATURES FOR MENU SHOWCASE ---
document.addEventListener('DOMContentLoaded', () => {

    // Custom Cursor
    const cursor = document.getElementById('custom-cursor');
    if(cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        const interactives = document.querySelectorAll('a, button, .menu-filter-btn');
        interactives.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
        });

        const cakeImages = document.querySelectorAll('.cake-card-image-wrap');
        cakeImages.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hovering-cake'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hovering-cake'));
        });
    }

    // 3D Hover Effect for Menu Cards
    const cakeCards = document.querySelectorAll('.cake-card');
    cakeCards.forEach(card => {
        const img = card.querySelector('.cake-card-image-wrap img');
        if (img) img.classList.add('js-3d-hover');
        
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Limit rotation to a subtle max
            const rotateX = ((y - centerY) / centerY) * -18;
            const rotateY = ((x - centerX) / centerX) * 18;
            
            if (img) {
                img.style.transform = `scale(1.22) translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            }
        });
        
        card.addEventListener('mouseleave', () => {
            if (img) img.style.transform = '';
        });
    });

    // Filtering Logic
    const filterBtns = document.querySelectorAll('.menu-filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            let delayCount = 0;
            cakeCards.forEach(card => {
                const catElement = card.querySelector('.cake-card-category');
                const catText = catElement ? catElement.textContent.toLowerCase() : '';
                
                let show = false;
                if (filter === 'all') show = true;
                else if (filter === 'classic' && (catText.includes('classic') || catText.includes('traditional') || catText.includes('heritage'))) show = true;
                else if (filter === 'specialty' && (catText.includes('specialty') || catText.includes('signature') || catText.includes('showstopper'))) show = true;
                else if (filter === 'seasonal' && (catText.includes('season') || catText.includes('holiday'))) show = true;
                
                if (show) {
                    card.style.display = 'block';
                    // Re-trigger entrance animation with stagger
                    card.classList.remove('animate-in');
                    setTimeout(() => {
                        card.classList.add('animate-in');
                    }, 10 + (delayCount * 120));
                    delayCount++;
                } else {
                    card.style.display = 'none';
                    card.classList.remove('animate-in');
                }
            });
        });
    });
});
