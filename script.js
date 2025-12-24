// Particle Animation
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Random positioning
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';

        // Random size variation
        const size = Math.random() * 3 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';

        particlesContainer.appendChild(particle);
    }
}

// Envelope Opening Animation
function setupEnvelopeAnimation() {
    const waxSeal = document.getElementById('waxSeal');
    const envelopeFlap = document.getElementById('envelopeFlap');
    const envelopeContainer = document.getElementById('envelopeContainer');
    const letterContainer = document.getElementById('letterContainer');

    waxSeal.addEventListener('click', function() {
        // Add clicked animation to seal
        waxSeal.classList.add('clicked');

        // Wait for seal animation, then open envelope
        setTimeout(() => {
            envelopeFlap.classList.add('open');
        }, 300);

        // Wait for envelope to open, then show letter
        setTimeout(() => {
            envelopeContainer.classList.add('hidden');
            letterContainer.classList.add('visible');

            // Prevent body scroll when letter is open
            document.body.style.overflow = 'hidden';
        }, 1300);
    });
}

// Close Letter and Return to Envelope
function setupCloseButton() {
    const closeButton = document.getElementById('closeButton');
    const envelopeContainer = document.getElementById('envelopeContainer');
    const letterContainer = document.getElementById('letterContainer');
    const envelopeFlap = document.getElementById('envelopeFlap');
    const waxSeal = document.getElementById('waxSeal');

    closeButton.addEventListener('click', function() {
        // Hide letter
        letterContainer.classList.remove('visible');

        // Reset envelope after letter fades out
        setTimeout(() => {
            envelopeFlap.classList.add('closing');
            envelopeFlap.classList.remove('open');
            envelopeContainer.classList.remove('hidden');

            // Wait for flap to fully close before showing wax seal
            setTimeout(() => {
                envelopeFlap.classList.remove('closing');
                waxSeal.classList.remove('clicked');
                waxSeal.style.pointerEvents = 'auto';
                isEnvelopeOpening = false; // Reset the flag to allow reopening
                isConfettiCreated = false; // Reset confetti flag
            }, 1000);

            // Re-enable body scroll
            document.body.style.overflow = 'auto';
        }, 500);
    });
}

// Smooth Scroll for Letter Content
function setupSmoothScroll() {
    const letter = document.querySelector('.letter');

    if (letter) {
        letter.style.scrollBehavior = 'smooth';
    }
}

// Add Shimmer Effect to Gold Elements
function addShimmerEffect() {
    const goldElements = document.querySelectorAll('.club-name, .seal-text, .section-title');

    goldElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.textShadow = '0 0 40px rgba(212, 175, 55, 0.8)';
        });

        element.addEventListener('mouseleave', function() {
            this.style.textShadow = '0 0 30px rgba(212, 175, 55, 0.3)';
        });
    });
}

// Parallax Effect for Letter (Disabled)
function setupParallax() {
    // Parallax effect disabled
}

// Add Floating Animation to Detail Items
function animateDetailItems() {
    const detailItems = document.querySelectorAll('.detail-item');

    detailItems.forEach((item, index) => {
        // Stagger animation
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';

        setTimeout(() => {
            item.style.transition = 'all 0.6s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 100 * index);
    });
}

// Observer for Letter Container
function setupLetterObserver() {
    const letterContainer = document.getElementById('letterContainer');

    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.attributeName === 'class') {
                if (letterContainer.classList.contains('visible')) {
                    // Trigger animations when letter becomes visible
                    setTimeout(animateDetailItems, 400);
                }
            }
        });
    });

    observer.observe(letterContainer, { attributes: true });
}

// Keyboard Navigation
function setupKeyboardNavigation() {
    document.addEventListener('keydown', function(e) {
        const letterContainer = document.getElementById('letterContainer');

        // Press Escape to close letter
        if (e.key === 'Escape' && letterContainer.classList.contains('visible')) {
            document.getElementById('closeButton').click();
        }
    });
}

// Add Sparkle Effect on Hover
function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.style.position = 'fixed';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.width = '4px';
    sparkle.style.height = '4px';
    sparkle.style.background = 'var(--gold)';
    sparkle.style.borderRadius = '50%';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '1000';
    sparkle.style.boxShadow = '0 0 10px var(--gold)';
    sparkle.style.animation = 'sparkleFloat 1s ease-out forwards';

    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}

// Add sparkle animation keyframes
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkleFloat {
        0% {
            transform: translateY(0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translateY(-30px) scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(sparkleStyle);

// Global sparkle interval variable
let sparkleInterval;

// Add sparkles to wax seal on hover
function setupSparkles() {
    const waxSeal = document.getElementById('waxSeal');

    waxSeal.addEventListener('mouseenter', function() {
        // Clear any existing interval first
        if (sparkleInterval) {
            clearInterval(sparkleInterval);
        }

        sparkleInterval = setInterval(() => {
            const rect = waxSeal.getBoundingClientRect();
            const x = rect.left + Math.random() * rect.width;
            const y = rect.top + Math.random() * rect.height;
            createSparkle(x, y);
        }, 100);
    });

    waxSeal.addEventListener('mouseleave', function() {
        clearInterval(sparkleInterval);
        sparkleInterval = null;
    });
}

// Global flag for confetti creation
let isConfettiCreated = false;

// Confetti Effect when Opening
function createConfetti() {
    // Prevent multiple confetti creation
    if (isConfettiCreated) return;
    isConfettiCreated = true;

    const colors = ['#d4af37', '#f4e4b8', '#b8941e'];
    const confettiCount = 30;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.left = '50%';
        confetti.style.top = '50%';
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = Math.random() * 10 + 5 + 'px';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '100';
        confetti.style.opacity = '0.8';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';

        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 200 + 100;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;

        document.body.appendChild(confetti);

        const duration = Math.random() * 1000 + 1000;

        const animation = confetti.animate([
            {
                transform: 'translate(0, 0) rotate(0deg)',
                opacity: 0.8
            },
            {
                transform: `translate(${tx}px, ${ty}px) rotate(${Math.random() * 360}deg)`,
                opacity: 0
            }
        ], {
            duration: duration,
            easing: 'cubic-bezier(0, .9, .57, 1)'
        });

        // Remove immediately after animation finishes
        animation.onfinish = () => {
            confetti.remove();
        };
    }
}

// Global flag for envelope opening state
let isEnvelopeOpening = false;

// Update envelope opening to include confetti
function setupEnvelopeWithConfetti() {
    const waxSeal = document.getElementById('waxSeal');
    const envelopeFlap = document.getElementById('envelopeFlap');
    const envelopeContainer = document.getElementById('envelopeContainer');
    const letterContainer = document.getElementById('letterContainer');

    waxSeal.addEventListener('click', function() {
        // Prevent multiple clicks
        if (isEnvelopeOpening) return;
        isEnvelopeOpening = true;

        // Stop sparkle interval
        if (sparkleInterval) {
            clearInterval(sparkleInterval);
            sparkleInterval = null;
        }

        // Add clicked animation to seal
        waxSeal.classList.add('clicked');

        // Disable pointer events on seal
        waxSeal.style.pointerEvents = 'none';

        // Create confetti effect
        setTimeout(createConfetti, 200);

        // Wait for seal animation, then open envelope
        setTimeout(() => {
            envelopeFlap.classList.add('open');
        }, 300);

        // Wait for envelope to open, then show letter
        setTimeout(() => {
            envelopeContainer.classList.add('hidden');
            letterContainer.classList.add('visible');

            // Prevent body scroll when letter is open
            document.body.style.overflow = 'hidden';
        }, 1300);
    });
}

// Initialize all functions
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    setupEnvelopeWithConfetti();
    setupCloseButton();
    setupSmoothScroll();
    addShimmerEffect();
    setupParallax();
    setupLetterObserver();
    setupKeyboardNavigation();
    setupSparkles();

    // Prevent right-click on images (optional)
    document.addEventListener('contextmenu', function(e) {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
        }
    });
});

// Handle window resize
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        // Recalculate positions if needed
        const letterContainer = document.getElementById('letterContainer');
        if (letterContainer.classList.contains('visible')) {
            // Reset parallax effect on resize
            const letter = document.querySelector('.letter');
            if (letter) {
                letter.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)';
            }
        }
    }, 250);
});
