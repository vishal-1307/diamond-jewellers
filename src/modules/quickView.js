// Quick View Modal — shows product details in a popup

import { products } from '../data/products.js';

export function initQuickView() {
    if (!document.querySelector('.btn-quick-view')) return;

    // Create modal element
    const modal = document.createElement('div');
    modal.id = 'quick-view-modal';
    modal.innerHTML = `
        <div class="qv-content" style="position: relative;">
            <button class="qv-close">&times;</button>
            <div class="qv-image"><img src="" alt=""></div>
            <div class="qv-details">
                <p class="category-tag"></p>
                <h2></h2>
                <div class="qv-rating"></div>
                <div class="qv-meta"></div>
                <p class="qv-desc"></p>
                <div class="qv-actions">
                    <button class="btn btn-primary add-to-cart-btn">Save Design</button>
                    <button class="qv-share-btn" title="Share via WhatsApp">
                        <span class="material-symbols-outlined" style="font-size:18px">share</span> Share
                    </button>
                </div>
            </div>
        </div>
    `;
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', 'Quick view');
    document.body.appendChild(modal);

    const closeBtn = modal.querySelector('.qv-close');
    const imgEl = modal.querySelector('.qv-image img');
    const catEl = modal.querySelector('.category-tag');
    const titleEl = modal.querySelector('h2');
    const ratingEl = modal.querySelector('.qv-rating');
    const metaEl = modal.querySelector('.qv-meta');
    const descEl = modal.querySelector('.qv-desc');
    const cartBtn = modal.querySelector('.add-to-cart-btn');
    const shareBtn = modal.querySelector('.qv-share-btn');

    let currentProduct = null;

    function openModal(product) {
        currentProduct = product;
        imgEl.src = product.image;
        imgEl.alt = product.name;
        catEl.textContent = `${product.category} · ${product.type}`;
        titleEl.textContent = product.name;
        ratingEl.innerHTML = '★'.repeat(Math.round(product.rating)) + '☆'.repeat(5 - Math.round(product.rating));
        metaEl.textContent = `${product.weight || ''} ${product.purity ? '· ' + product.purity : ''}`;
        descEl.textContent = product.description || 'Exquisite handcrafted jewellery piece from Diamond Jewellers.';

        cartBtn.setAttribute('data-id', product.id);
        cartBtn.setAttribute('data-name', product.name);
        cartBtn.setAttribute('data-price', '0');
        cartBtn.setAttribute('data-image', product.image);

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Close handlers
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
    });

    // Share via WhatsApp
    shareBtn.addEventListener('click', () => {
        if (!currentProduct) return;
        const msg = `Check out this design from Diamond Jewellers: *${currentProduct.name}* (${currentProduct.category} · ${currentProduct.type})`;
        window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank');
    });

    // Listen for Quick View button clicks (event delegation)
    document.body.addEventListener('click', (e) => {
        const btn = e.target.closest('.btn-quick-view');
        if (!btn) return;
        e.preventDefault();
        const productId = btn.getAttribute('data-id');
        const product = products.find(p => p.id === productId);
        if (product) openModal(product);
    });
}
