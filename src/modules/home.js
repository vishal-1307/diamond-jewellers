import { products } from '../data/products.js';

export function initHomeSections() {
    renderBestSellers();
    renderNewArrivals();
    initHeroCarousel();
    initTestimonialCarousel();
}

function renderBestSellers() {
    const mount = document.getElementById('bestsellers-mount');
    if (!mount) return;

    const bestSellers = products.filter(p => p.isBestSeller).slice(0, 8);
    mount.innerHTML = bestSellers.map(p => createProductCard(p)).join('');
}

function renderNewArrivals() {
    const mount = document.getElementById('new-arrivals-mount');
    if (!mount) return;

    const newItems = products.filter(p => p.isNew).slice(0, 8);
    mount.innerHTML = newItems.map(p => createProductCard(p)).join('');
}

function createProductCard(product) {
    let badgeHTML = '';
    if (product.isNew) badgeHTML += '<span class="badge badge-new">New</span>';
    if (product.isBestSeller) badgeHTML += '<span class="badge badge-bestseller">Best Seller</span>';

    return `
        <div class="product-card">
            <div class="card-image">
                <a href="product.html?id=${product.id}">
                    <img src="${product.image}" loading="lazy" alt="${product.name}">
                </a>
                <div class="card-badges">${badgeHTML}</div>
            </div>
            <div class="product-info">
                <p class="category-tag">${product.category} · ${product.type}</p>
                <a href="product.html?id=${product.id}" class="product-title-link"><h3 class="product-title">${product.name}</h3></a>
                <div class="product-meta">${product.weight || ''} ${product.purity ? '· ' + product.purity : ''}</div>
                <button class="btn btn-primary add-to-cart-btn" 
                    data-id="${product.id}" 
                    data-name="${product.name}" 
                    data-price="0" 
                    data-image="${product.image}">
                    Save Design
                </button>
            </div>
        </div>
    `;
}

// Hero Carousel Logic
function initHeroCarousel() {
    const container = document.getElementById('hero-carousel');
    if (!container) return;

    const slides = container.querySelectorAll('.hero-slide');
    const prevBtn = document.getElementById('hero-prev');
    const nextBtn = document.getElementById('hero-next');
    const dotsContainer = document.getElementById('hero-dots');

    if (slides.length <= 1) return;

    let currentSlide = 0;

    // Create dots
    slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('button');

    function goToSlide(n) {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');

        currentSlide = (n + slides.length) % slides.length;

        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    function nextSlide() { goToSlide(currentSlide + 1); }
    function prevSlide() { goToSlide(currentSlide - 1); }

    nextBtn?.addEventListener('click', () => { nextSlide(); resetInterval(); });
    prevBtn?.addEventListener('click', () => { prevSlide(); resetInterval(); });

    // Auto-advance
    let slideInterval = setInterval(nextSlide, 5000);
    function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);
    }
}

// Testimonial Carousel Logic
function initTestimonialCarousel() {
    const container = document.getElementById('testimonial-carousel');
    if (!container) return;

    const slides = container.querySelectorAll('.testimonial-slide');
    const dotsContainer = document.getElementById('testimonial-dots');

    if (slides.length <= 1) return;

    let currentSlide = 0;

    slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.setAttribute('aria-label', `Go to testimonial ${i + 1}`);
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('button');

    function goToSlide(n) {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');

        currentSlide = (n + slides.length) % slides.length;

        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    setInterval(() => goToSlide(currentSlide + 1), 6000);
}
