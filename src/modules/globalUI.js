// Global UI enhancements that run on every page

export function initGlobalUI() {
    createFloatingWhatsApp();
    createBackToTop();
    initCartAnimation();
    initPageTransitions();
    initSmoothScroll();
}

// 1. Floating WhatsApp Button (all pages)
function createFloatingWhatsApp() {
    const btn = document.createElement('a');
    btn.href = 'https://wa.me/919931454704?text=Hi%2C%20I%20have%20a%20query%20about%20your%20jewellery%20designs.';
    btn.target = '_blank';
    btn.className = 'floating-whatsapp';
    btn.setAttribute('aria-label', 'Chat on WhatsApp');
    btn.innerHTML = `
        <svg viewBox="0 0 32 32" width="28" height="28" fill="#fff">
            <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.96A15.915 15.915 0 0016.004 32C24.826 32 32 24.826 32 16.004S24.826 0 16.004 0zm9.31 22.616c-.39 1.1-2.278 2.102-3.14 2.166-.786.058-1.75.082-2.822-.178-.65-.156-1.486-.39-2.558-.762-4.508-1.564-7.45-6.14-7.676-6.428-.226-.29-1.846-2.454-1.846-4.684 0-2.228 1.168-3.324 1.584-3.776.39-.422.872-.54 1.166-.54.29 0 .582.002.836.016.268.012.628-.102.982.748.39.936 1.326 3.234 1.44 3.468.116.234.194.508.04.814-.156.308-.234.5-.462.77-.228.272-.48.606-.686.814-.228.23-.466.478-.2.938.266.46 1.184 1.952 2.542 3.164 1.744 1.556 3.214 2.038 3.67 2.266.46.228.726.194.992-.116.266-.31 1.142-1.332 1.446-1.79.304-.46.608-.38 1.026-.228.418.15 2.652 1.25 3.108 1.478.456.228.76.344.872.53.116.188.116 1.09-.274 2.188z"/>
        </svg>
    `;
    document.body.appendChild(btn);
}

// 2. Back to Top Button
function createBackToTop() {
    const btn = document.createElement('button');
    btn.className = 'back-to-top';
    btn.setAttribute('aria-label', 'Back to top');
    btn.innerHTML = '<span class="material-symbols-outlined">arrow_upward</span>';
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    }, { passive: true });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// 3. Cart Count Bounce Animation
function initCartAnimation() {
    // Watch for changes to cart badge text
    const badge = document.getElementById('cart-count');
    if (!badge) return;

    const observer = new MutationObserver(() => {
        if (badge.textContent) {
            badge.classList.remove('bounce');
            void badge.offsetWidth; // force reflow
            badge.classList.add('bounce');
        }
    });

    observer.observe(badge, { childList: true, characterData: true, subtree: true });
}

// 4. Page Fade-In Transition
function initPageTransitions() {
    document.body.classList.add('page-loaded');
}

// 5. Smooth Scroll for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}
