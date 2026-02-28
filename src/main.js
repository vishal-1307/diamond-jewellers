import './styles/main.css';
import './styles/globalUI.css';
import './styles/search.css';
import { injectHeader, injectFooter } from './components/Layout';
import { initCart } from './modules/cart';
import { initContactForm } from './modules/contact';
import { initShop } from './modules/shop';
import { initFaqAccordion } from './modules/faq';
import { initHomeSections } from './modules/home';
import { initGlobalUI } from './modules/globalUI';
import { initQuickView } from './modules/quickView';
import { initProductPage } from './modules/productPage';
import { initWishlist } from './modules/wishlist';
import { initSearch } from './modules/search';

document.addEventListener('DOMContentLoaded', () => {
    injectHeader();
    injectFooter();

    // Initialize Logic Modules
    initCart();
    initContactForm();
    initShop();
    initFaqAccordion();
    initHomeSections();
    initGlobalUI();
    initQuickView();
    initProductPage();
    initWishlist();
    initSearch();
    initImageZoom();
    initBlurUpImages();

    console.log("Diamond Jewellers App Loaded — 100+ Products");
});

// Product Image Zoom (for product detail page)
function initImageZoom() {
    const gallery = document.querySelector('.product-image-gallery');
    const mainImg = gallery?.querySelector('.main-image');
    if (!gallery || !mainImg) return;

    gallery.addEventListener('click', () => {
        gallery.classList.toggle('zoomed');
    });

    // Pan-on-mouse-move when zoomed
    gallery.addEventListener('mousemove', (e) => {
        if (!gallery.classList.contains('zoomed')) return;
        const rect = gallery.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        mainImg.style.transformOrigin = `${x}% ${y}%`;
    });

    gallery.addEventListener('mouseleave', () => {
        gallery.classList.remove('zoomed');
        mainImg.style.transformOrigin = 'center center';
    });
}

// Blur-up image loading placeholders
function initBlurUpImages() {
    const images = document.querySelectorAll('.product-card .card-image img, .collection-card img, .type-card img');
    images.forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.classList.add('loading');
            img.addEventListener('load', () => {
                img.classList.remove('loading');
                img.classList.add('loaded');
            });
            img.addEventListener('error', () => {
                img.classList.remove('loading');
            });
        }
    });
}
