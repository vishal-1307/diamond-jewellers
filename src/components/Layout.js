
export function injectHeader() {
    const headerHTML = `
    <header class="site-header">
        <div class="container header-inner">
            <a href="index.html" class="brand">
                <span class="material-symbols-outlined icon-gold">diamond</span>
                <span>Diamond Jewellers</span>
            </a>

            <!-- Mobile Toggle Button -->
            <button class="mobile-toggle" aria-label="Toggle Navigation">
                <span class="material-symbols-outlined">menu</span>
            </button>

            <nav class="main-nav">
                <a href="collections.html">Collections</a>
                <a href="custom.html">Custom Orders</a>
                <a href="gallery.html">Gallery</a>
                <a href="faq.html">FAQ</a>
                <a href="about.html">About</a>
                <a href="contact.html">Contact</a>
            </nav>

            <div class="header-actions">
                <a href="cart.html" class="icon-btn cart-icon">
                    <span class="material-symbols-outlined">shopping_bag</span>
                    <span id="cart-count" class="cart-badge"></span>
                </a>
            </div>
        </div>
    </header>
    `;

    const app = document.getElementById('app');
    // Prepend header
    // Use target div if exists, else first child
    const headerMount = document.querySelector('header') || document.getElementById('header-mount');
    if (headerMount) {
        headerMount.outerHTML = headerHTML;
    } else {
        document.body.insertAdjacentHTML('afterbegin', headerHTML);
    }

    // Initialize Mobile Menu
    const mobileToggle = document.querySelector('.mobile-toggle');
    const mainNav = document.querySelector('.main-nav');
    if (mobileToggle && mainNav) {
        mobileToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            const icon = mobileToggle.querySelector('.material-symbols-outlined');
            icon.textContent = mainNav.classList.contains('active') ? 'close' : 'menu';
        });
    }
}

export function injectFooter() {
    const footerHTML = `
    <footer class="site-footer">
        <div class="container footer-grid">
            <div class="footer-col">
                <div class="brand">
                    <span class="material-symbols-outlined icon-gold">diamond</span>
                    <span>Diamond Jewellers</span>
                </div>
                <p class="footer-about">
                    Crafting timeless elegance with ethically sourced diamonds and precious metals for your special moments.
                </p>
            </div>
            <div class="footer-col">
                <h4>Get in Touch</h4>
                <address class="footer-contact">
                    <p><span class="material-symbols-outlined">location_on</span> Infront of Hospital Road Benipatti<br>Madhubani, Bihar (847223)</p>
                    <p><span class="material-symbols-outlined">call</span> +91 99314 54704</p>
                    <p><span class="material-symbols-outlined">mail</span> diamondjewellersbenipatti@gmail.com</p>
                </address>
            </div>
            <div class="footer-col">
                <h4>Visit Us</h4>
                <div class="footer-timings">
                    <p><strong>Mon-Sat:</strong> 10:00AM–8:00PM</p>
                    <p><strong>Sunday:</strong> Closed</p>
                </div>
                <h4 class="footer-social-heading">Connect With Us</h4>
                <div class="footer-social">
                    <a href="https://wa.me/919931454704" target="_blank" rel="noopener noreferrer" class="social-icon" title="WhatsApp"><span class="material-symbols-outlined">chat</span></a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" class="social-icon" title="Instagram"><span class="material-symbols-outlined">photo_camera</span></a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" class="social-icon" title="Facebook"><span class="material-symbols-outlined">group</span></a>
                </div>
            </div>
        </div>
        <div class="footer-bottom-bar">
            <div class="container">
                <p>© 2026 Diamond Jewellers. All rights reserved.</p>
            </div>
        </div>
    </footer>
    `;

    const footerMount = document.querySelector('footer') || document.getElementById('footer-mount');
    if (footerMount) {
        footerMount.outerHTML = footerHTML;
    } else {
        document.body.insertAdjacentHTML('beforeend', footerHTML);
    }
}
