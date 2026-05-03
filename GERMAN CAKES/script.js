/* ============================================
   GERMAN CAKES — Landing Page JavaScript
   Animations, Interactions & Polish
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  
  // ---- Header scroll effect ----
  const header = document.getElementById('header');
  let lastScrollY = 0;

  const handleScroll = () => {
    const scrollY = window.scrollY;
    
    if (scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    lastScrollY = scrollY;
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  // ---- Mobile menu toggle ----
  const menuToggle = document.getElementById('menu-toggle');
  const headerNav = document.getElementById('header-nav');

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      headerNav.classList.toggle('open');
      menuToggle.classList.toggle('active');
    });

    // Close menu when clicking a link
    headerNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        headerNav.classList.remove('open');
        menuToggle.classList.remove('active');
      });
    });
  }

  // ---- Smooth scroll for anchor links ----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ---- Intersection Observer for scroll animations ----
  const createObserver = (selector, options = {}) => {
    const elements = document.querySelectorAll(selector);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Stagger animations with delay
          const delay = options.stagger ? index * (options.staggerDelay || 150) : 0;
          
          setTimeout(() => {
            entry.target.classList.add(options.animateClass || 'animate-in');
            if (options.addVisible) {
              entry.target.classList.add('visible');
            }
          }, delay);
          
          if (!options.repeat) {
            observer.unobserve(entry.target);
          }
        }
      });
    }, {
      threshold: options.threshold || 0.15,
      rootMargin: options.rootMargin || '0px 0px -50px 0px'
    });
    
    elements.forEach(el => observer.observe(el));
    return observer;
  };

  // Cake cards bounce-in animation
  createObserver('.cake-card', {
    stagger: true,
    staggerDelay: 200,
    animateClass: 'animate-in'
  });

  // Why cards fade-in
  createObserver('.why-card', {
    stagger: true,
    staggerDelay: 150,
    animateClass: 'animate-in'
  });

  // Gallery items bounce-in
  createObserver('.gallery-item', {
    stagger: true,
    staggerDelay: 200,
    animateClass: 'animate-in'
  });

  // Testimonial cards fade-in
  createObserver('.testimonial-card', {
    stagger: true,
    staggerDelay: 200,
    animateClass: 'animate-in'
  });

  // Generic reveal elements
  createObserver('.reveal', {
    addVisible: true,
    animateClass: 'visible'
  });

  // ---- Cake card bounce on hover ----
  const cakeCards = document.querySelectorAll('.cake-card');
  
  cakeCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
    });
  });

  // ---- Cake image soft bounce on hover ----
  const cakeImages = document.querySelectorAll('.cake-card-image-wrapper img, .gallery-item img');
  
  cakeImages.forEach(img => {
    img.addEventListener('mouseenter', () => {
      img.style.animation = 'gentleBounce 0.6s ease-in-out';
      img.addEventListener('animationend', () => {
        img.style.animation = '';
      }, { once: true });
    });
  });

  // ---- Hero cake parallax-like subtle movement on mouse ----
  const heroVisual = document.querySelector('.hero-visual');
  const heroCakeWrapper = document.querySelector('.hero-cake-wrapper');
  
  if (heroVisual && heroCakeWrapper) {
    const hero = document.querySelector('.hero');
    
    hero.addEventListener('mousemove', (e) => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      
      requestAnimationFrame(() => {
        heroCakeWrapper.style.transform = `translateX(${x * 15}px) translateY(${y * 15}px)`;
      });
    });
    
    hero.addEventListener('mouseleave', () => {
      heroCakeWrapper.style.transition = 'transform 0.6s ease';
      heroCakeWrapper.style.transform = 'translateX(0) translateY(0)';
      setTimeout(() => {
        heroCakeWrapper.style.transition = '';
      }, 600);
    });
  }

  // ---- Sparkle generation (extra sparkles) ----
  const createSparkles = () => {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    setInterval(() => {
      const sparkle = document.createElement('div');
      sparkle.style.cssText = `
        position: absolute;
        pointer-events: none;
        z-index: 3;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        font-size: ${6 + Math.random() * 8}px;
        color: var(--golden-light);
        opacity: 0;
        animation: sparkle ${2 + Math.random() * 2}s ease-in-out forwards;
      `;
      sparkle.textContent = '✦';
      hero.appendChild(sparkle);
      
      setTimeout(() => sparkle.remove(), 4000);
    }, 2000);
  };
  
  createSparkles();

  // ---- Button hover ripple effect ----
  const buttons = document.querySelectorAll('.btn-primary, .btn-cta-primary, .btn-order-nav');
  
  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const ripple = document.createElement('span');
      ripple.style.cssText = `
        position: absolute;
        width: 0;
        height: 0;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.2);
        left: ${x}px;
        top: ${y}px;
        transform: translate(-50%, -50%);
        pointer-events: none;
        transition: all 0.6s ease;
      `;
      
      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);
      
      requestAnimationFrame(() => {
        ripple.style.width = '300px';
        ripple.style.height = '300px';
        ripple.style.opacity = '0';
      });
      
      setTimeout(() => ripple.remove(), 600);
    });
  });

  // ---- Counter animation for hero stats ----
  const animateCounters = () => {
    const stats = document.querySelectorAll('.hero-stat-number');
    
    stats.forEach(stat => {
      const text = stat.textContent;
      const match = text.match(/(\d+)/);
      if (!match) return;
      
      const target = parseInt(match[1]);
      const suffix = text.replace(match[1], '');
      let current = 0;
      const increment = target / 60;
      const duration = 2000;
      const stepTime = duration / 60;
      
      const updateCounter = () => {
        current += increment;
        if (current < target) {
          stat.textContent = Math.floor(current) + suffix;
          setTimeout(updateCounter, stepTime);
        } else {
          stat.textContent = target + suffix;
        }
      };
      
      // Trigger only when hero is visible
      const heroObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          updateCounter();
          heroObserver.disconnect();
        }
      }, { threshold: 0.5 });
      
      heroObserver.observe(document.querySelector('.hero-stats'));
    });
  };
  
  animateCounters();

  // ---- Gallery item lightbox-style hover label ----
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  galleryItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      const overlay = item.querySelector('.gallery-item-overlay');
      if (overlay) {
        overlay.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        overlay.style.transform = 'translateY(0)';
      }
    });
  });

  // ---- Testimonial card tilt on hover ----
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  
  testimonialCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      
      card.style.transform = `
        perspective(800px)
        rotateX(${-y * 5}deg)
        rotateY(${x * 5}deg)
        translateY(-5px)
      `;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform 0.5s ease';
      card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateY(0)';
      setTimeout(() => {
        card.style.transition = '';
      }, 500);
    });
  });

  // ---- Active nav link highlighting ----
  const sections = document.querySelectorAll('section[id]');
  
  const highlightNav = () => {
    const scrollY = window.scrollY + 120;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      const navLink = document.querySelector(`.header-nav a[href="#${sectionId}"]`);
      
      if (navLink && scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
        document.querySelectorAll('.header-nav a').forEach(link => {
          link.style.color = '';
        });
        navLink.style.color = 'var(--golden-light)';
      }
    });
  };
  
  window.addEventListener('scroll', highlightNav, { passive: true });

  // ---- Preloader for images (add subtle fade-in) ----
  const allImages = document.querySelectorAll('img');
  
  allImages.forEach(img => {
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.5s ease';
    
    if (img.complete) {
      img.style.opacity = '1';
    } else {
      img.addEventListener('load', () => {
        img.style.opacity = '1';
      });
      img.addEventListener('error', () => {
        img.style.opacity = '1';
      });
    }
  });

  // ---- Keyboard accessibility: Escape to close mobile menu ----
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && headerNav.classList.contains('open')) {
      headerNav.classList.remove('open');
      menuToggle.classList.remove('active');
    }
  });

  console.log('🎂 German Cakes — Landing page loaded successfully!');
});
