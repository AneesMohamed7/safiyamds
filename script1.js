// Mobile navigation toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});


// Simple animation trigger on scroll
        document.addEventListener('DOMContentLoaded', function() {
            const serviceCards = document.querySelectorAll('.service-card');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationPlayState = 'running';
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            
            serviceCards.forEach(card => {
                card.style.animationPlayState = 'paused';
                observer.observe(card);
            });
        });

// Continuous Marquee-Style Carousel Class
// class ContinuousCarousel {
//     constructor(carouselId) {
//         this.carousel = document.querySelector(`#${carouselId} .carousel-wrapper`);
//         this.container = this.carousel.querySelector('.carousel-container');
//         this.slides = this.carousel.querySelectorAll('.carousel-slide');
//         this.prevBtn = this.carousel.querySelector('.carousel-prev');
//         this.nextBtn = this.carousel.querySelector('.carousel-next');
//         this.dots = this.carousel.querySelectorAll('.dot');
        
//         this.currentSlide = 0;
//         this.totalSlides = this.slides.length;
//         this.isAnimating = false;
//         this.autoplayInterval = null;
//         this.autoplayDelay = null;
//         this.animationDuration = 600;
        
//         // Clone slides for seamless looping
//         this.setupSlideClones();
//         this.init();
//     }
    
//     setupSlideClones() {
//         // Create clones of first and last slides for seamless looping
//         const firstClone = this.slides[0].cloneNode(true);
//         const lastClone = this.slides[this.totalSlides - 1].cloneNode(true);
        
//         firstClone.classList.add('clone');
//         lastClone.classList.add('clone');
        
//         this.container.appendChild(firstClone);
//         this.container.insertBefore(lastClone, this.slides[0]);
        
//         // Update slides reference to include clones
//         this.slides = this.container.querySelectorAll('.carousel-slide');
//         this.totalSlides = this.slides.length;
//     }
    
//     init() {
//         this.setupSlides();
//         this.bindEvents();
//         this.startAutoplay();
//         this.updateDots();
//     }
    
//     setupSlides() {
//         // Set initial positions with clones
//         this.slides.forEach((slide, index) => {
//             slide.style.transform = `translateX(${index * 100}%)`;
//             slide.style.transition = `transform ${this.animationDuration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
//         });
        
//         // Start at the first real slide (position 1 because of the clone at beginning)
//         this.currentSlide = 1;
//         this.container.style.transform = `translateX(-${this.currentSlide * 100}%)`;
//     }
    
//     bindEvents() {
//         this.prevBtn.addEventListener('click', () => this.prevSlide());
//         this.nextBtn.addEventListener('click', () => this.nextSlide());
        
//         // Dot navigation
//         this.dots.forEach((dot, index) => {
//             dot.addEventListener('click', () => this.goToSlide(index));
//         });
        
//         // Touch/Swipe support
//         this.addTouchSupport();
        
//         // Pause autoplay on hover
//         this.carousel.addEventListener('mouseenter', () => this.pauseAutoplay());
//         this.carousel.addEventListener('mouseleave', () => this.startAutoplay());
        
//         // Keyboard navigation
//         document.addEventListener('keydown', (e) => {
//             if (this.carousel.closest('.gallery-slider.active')) {
//                 if (e.key === 'ArrowLeft') this.prevSlide();
//                 if (e.key === 'ArrowRight') this.nextSlide();
//             }
//         });
//     }
    
//     addTouchSupport() {
//         let startX = 0;
//         let endX = 0;
//         let startY = 0;
//         let endY = 0;
        
//         this.container.addEventListener('touchstart', (e) => {
//             startX = e.touches[0].clientX;
//             startY = e.touches[0].clientY;
//         }, { passive: true });
        
//         this.container.addEventListener('touchend', (e) => {
//             endX = e.changedTouches[0].clientX;
//             endY = e.changedTouches[0].clientY;
            
//             const deltaX = startX - endX;
//             const deltaY = startY - endY;
            
//             // Only trigger if horizontal swipe is more significant than vertical
//             if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
//                 if (deltaX > 0) {
//                     this.nextSlide();
//                 } else {
//                     this.prevSlide();
//                 }
//             }
//         }, { passive: true });
//     }
    
//     goToSlide(slideIndex, direction = 'next') {
//         if (this.isAnimating) return;
        
//         this.isAnimating = true;
//         const realSlideIndex = slideIndex;
        
//         // Adjust for clone slides - real slides start at index 1
//         slideIndex = slideIndex + 1;
        
//         this.currentSlide = slideIndex;
        
//         // Smooth transition
//         this.container.style.transition = `transform ${this.animationDuration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
//         this.container.style.transform = `translateX(-${this.currentSlide * 100}%)`;
        
//         this.updateDots(realSlideIndex);
//         this.updateButtons();
        
//         // Handle seamless looping after animation completes
//         setTimeout(() => {
//             this.isAnimating = false;
            
//             // If we're at the first clone (last slide), jump to the real last slide
//             if (this.currentSlide === this.totalSlides - 1) {
//                 this.container.style.transition = 'none';
//                 this.currentSlide = 1;
//                 this.container.style.transform = `translateX(-${this.currentSlide * 100}%)`;
//             }
//             // If we're at the last clone (first slide), jump to the real first slide
//             else if (this.currentSlide === 0) {
//                 this.container.style.transition = 'none';
//                 this.currentSlide = this.totalSlides - 2;
//                 this.container.style.transform = `translateX(-${this.currentSlide * 100}%)`;
//             }
//         }, this.animationDuration);
//     }
    
//     nextSlide() {
//         const nextIndex = (this.currentSlide + 1) % this.totalSlides;
//         const realIndex = (this.getRealSlideIndex(this.currentSlide) + 1) % (this.totalSlides - 2);
//         this.goToSlide(realIndex, 'next');
//     }
    
//     prevSlide() {
//         const prevIndex = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
//         const realIndex = (this.getRealSlideIndex(this.currentSlide) - 1 + (this.totalSlides - 2)) % (this.totalSlides - 2);
//         this.goToSlide(realIndex, 'prev');
//     }
    
//     getRealSlideIndex(slideIndex) {
//         // Convert container index to real slide index
//         if (slideIndex === 0) return this.totalSlides - 3; // First clone is last real slide
//         if (slideIndex === this.totalSlides - 1) return 0; // Last clone is first real slide
//         return slideIndex - 1;
//     }
    
//     updateDots(realIndex = null) {
//         if (realIndex === null) {
//             realIndex = this.getRealSlideIndex(this.currentSlide);
//         }
//         this.dots.forEach((dot, index) => {
//             dot.classList.toggle('active', index === realIndex);
//         });
//     }
    
//     updateButtons() {
//         // Add visual feedback for button clicks
//         const activeBtn = event && event.target.closest('.carousel-btn');
//         if (activeBtn) {
//             activeBtn.style.transform = 'scale(0.95)';
//             setTimeout(() => {
//                 activeBtn.style.transform = '';
//             }, 150);
//         }
//     }
    
//     startAutoplay() {
//         this.pauseAutoplay(); // Clear any existing interval
//         this.autoplayInterval = setInterval(() => {
//             this.nextSlide();
//         }, this.autoplayDelay);
//     }
    
//     pauseAutoplay() {
//         if (this.autoplayInterval) {
//             clearInterval(this.autoplayInterval);
//             this.autoplayInterval = null;
//         }
//     }
    
//     destroy() {
//         this.pauseAutoplay();
//         // Remove event listeners if needed
//     }
// }

// Alternative Infinite Scroll Carousel (Simpler approach)
class InfiniteScrollCarousel {
    constructor(carouselId) {
        this.carousel = document.querySelector(`#${carouselId} .carousel-wrapper`);
        this.container = this.carousel.querySelector('.carousel-container');
        this.slides = Array.from(this.carousel.querySelectorAll('.carousel-slide'));
        this.prevBtn = this.carousel.querySelector('.carousel-prev');
        this.nextBtn = this.carousel.querySelector('.carousel-next');
        this.dots = this.carousel.querySelectorAll('.dot');
        
        this.currentIndex = 0;
        this.totalSlides = this.slides.length;
        this.isAnimating = false;
        this.autoplayInterval = null;
        this.autoplayDelay = 4000;
        
        // Duplicate slides for infinite effect
        this.setupInfiniteSlides();
        this.init();
    }
    
    setupInfiniteSlides() {
        // Clone all slides and append for infinite scroll
        const slideClones = this.slides.map(slide => slide.cloneNode(true));
        slideClones.forEach(clone => {
            clone.classList.add('clone');
            this.container.appendChild(clone);
        });
        
        this.allSlides = this.container.querySelectorAll('.carousel-slide');
    }
    
    init() {
        this.setupSlides();
        this.bindEvents();
        this.startAutoplay();
        this.updateDots();
    }
    
    setupSlides() {
        // Set initial width and position
        const slideWidth = 100 / this.totalSlides; // Percentage per slide
        this.allSlides.forEach(slide => {
            slide.style.flex = `0 0 ${slideWidth}%`;
        });
        
        this.container.style.transition = 'transform 0.6s ease';
    }
    
    bindEvents() {
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());
        
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });
        
        // Touch support
        this.addTouchSupport();
        
        // Pause autoplay on hover
        this.carousel.addEventListener('mouseenter', () => this.pauseAutoplay());
        this.carousel.addEventListener('mouseleave', () => this.startAutoplay());
    }
    
    addTouchSupport() {
        let startX = 0;
        
        this.container.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        }, { passive: true });
        
        this.container.addEventListener('touchend', (e) => {
            const endX = e.changedTouches[0].clientX;
            const deltaX = startX - endX;
            
            if (Math.abs(deltaX) > 50) {
                if (deltaX > 0) this.nextSlide();
                else this.prevSlide();
            }
        }, { passive: true });
    }
    
    goToSlide(index) {
        if (this.isAnimating) return;
        
        this.isAnimating = true;
        this.currentIndex = index;
        
        const translateX = -this.currentIndex * (100 / this.totalSlides);
        this.container.style.transform = `translateX(${translateX}%)`;
        
        this.updateDots();
        
        setTimeout(() => {
            this.isAnimating = false;
            
            // Reset to beginning when reaching cloned slides
            if (this.currentIndex >= this.totalSlides) {
                this.container.style.transition = 'none';
                this.currentIndex = 0;
                this.container.style.transform = `translateX(0%)`;
                setTimeout(() => {
                    this.container.style.transition = 'transform 0.6s ease';
                }, 50);
            }
        }, 600);
    }
    
    nextSlide() {
        this.goToSlide(this.currentIndex + 1);
    }
    
    prevSlide() {
        const prevIndex = this.currentIndex - 1;
        if (prevIndex < 0) {
            // Jump to the last original slide (which is before clones)
            this.container.style.transition = 'none';
            this.currentIndex = this.totalSlides;
            this.container.style.transform = `translateX(-${this.totalSlides * (100 / this.totalSlides)}%)`;
            
            setTimeout(() => {
                this.container.style.transition = 'transform 0.6s ease';
                this.goToSlide(this.totalSlides - 1);
            }, 50);
        } else {
            this.goToSlide(prevIndex);
        }
    }
    
    updateDots() {
        const realIndex = this.currentIndex % this.totalSlides;
        this.dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === realIndex);
        });
    }
    
    startAutoplay() {
        this.pauseAutoplay();
        this.autoplayInterval = setInterval(() => {
            this.nextSlide();
        }, this.autoplayDelay);
    }
    
    pauseAutoplay() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
            this.autoplayInterval = null;
        }
    }
}

// Initialize carousels
let carousels = {};

function initializeCarousels() {
    // Use ContinuousCarousel for seamless infinite scrolling
    carousels['training-ground'] = new ContinuousCarousel('training-ground');
    carousels['vehicles'] = new ContinuousCarousel('vehicles');
    carousels['facilities'] = new ContinuousCarousel('facilities');
}

// Gallery tabs functionality with carousel integration
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons and sliders
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.gallery-slider').forEach(s => s.classList.remove('active'));
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Show corresponding slider
        const targetTab = btn.getAttribute('data-tab');
        const targetSlider = document.getElementById(targetTab);
        targetSlider.classList.add('active');
        
        // Restart autoplay for the active carousel
        if (carousels[targetTab]) {
            carousels[targetTab].startAutoplay();
        }
        
        // Pause autoplay for inactive carousels
        Object.keys(carousels).forEach(key => {
            if (key !== targetTab && carousels[key]) {
                carousels[key].pauseAutoplay();
            }
        });
    });
});

// Contact form handling
document.getElementById('inquiryForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const email = formData.get('email');
    const branch = formData.get('branch');
    const message = formData.get('message');
    
    // Simple validation
    if (!name || !phone || !email || !branch) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Success message
    alert('Thank you for your inquiry! We will contact you shortly.');
    this.reset();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 110; // Account for fixed call bar + navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Animated Counter Function
function animateCounter(element, target, duration = 2000, suffix = '') {
    const start = 0;
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        // Easing function for smooth animation
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(start + (target - start) * easeOut);
        
        element.textContent = current + suffix;
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + suffix;
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// Stats Counter Animation
function initStatsAnimation() {
    const statsSection = document.getElementById('statsSection');
    const statItems = statsSection.querySelectorAll('.stat-item');
    let hasAnimated = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                
                // Animate each stat with appropriate suffix
                statItems.forEach((item, index) => {
                    const numberElement = item.querySelector('.stat-number');
                    const target = parseInt(numberElement.getAttribute('data-target'));
                    let suffix = '';
                    
                    // Add appropriate suffix based on the stat
                    if (index === 0) suffix = '+'; // Happy Students: 8500+
                    if (index === 1) suffix = '%'; // Pass Rate: 99%
                    if (index === 2) suffix = '+'; // Years Experience: 15+
                    
                    // Add animation class for CSS animation
                    item.classList.add('animate');
                    
                    // Start counter animation with delay for each item
                    setTimeout(() => {
                        animateCounter(numberElement, target, 2000, suffix);
                    }, index * 200);
                });
            }
        });
    }, {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    });

    observer.observe(statsSection);
}

// Initialize stats animation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initStatsAnimation();
    // Initialize carousels after DOM is loaded
    setTimeout(() => {
        initializeCarousels();
    }, 100);
});

// Intersection Observer for other animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animations (excluding stat items as they have their own animation)
document.querySelectorAll('.feature-card, .branch-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    Object.values(carousels).forEach(carousel => {
        if (carousel && carousel.destroy) {
            carousel.destroy();
        }
    });
});
