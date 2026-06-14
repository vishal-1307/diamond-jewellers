// Dynamic Product Detail Page — loads product from URL params or data attributes

import { products } from '../data/products.js';

export function initProductPage() {
    const layout = document.querySelector('.product-layout');
    if (!layout) return;

    // Get product ID from URL  ?id=g001
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
    if (!productId) return; // Keep static fallback if no ID

    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Update page title
    document.title = `${product.name} - Diamond Jewellers`;

    // Update image
    const mainImage = layout.querySelector('.main-image');
    if (mainImage) {
        mainImage.src = product.image;
        mainImage.alt = product.name;
    }

    // Update details
    const details = layout.querySelector('.product-details');
    if (details) {
        details.innerHTML = `
            <h1>${product.name}</h1>
            <p class="product-description">${product.purity || ''} ${product.category} · ${product.type} · ${product.weight || ''}</p>

            <ul class="product-specs">
                <li>Category: ${product.category}</li>
                <li>Type: ${product.type}</li>
                ${product.weight ? `<li>Weight: ${product.weight}</li>` : ''}
                ${product.purity ? `<li>Purity: ${product.purity}</li>` : ''}
                <li>Rating: ${'★'.repeat(Math.round(product.rating))}${'☆'.repeat(5 - Math.round(product.rating))} (${product.rating})</li>
            </ul>

            <div class="product-actions">
                <button class="btn btn-primary add-to-cart-btn" 
                    data-id="${product.id}" 
                    data-name="${product.name}" 
                    data-price="0" 
                    data-image="${product.image}">
                    Save Design
                </button>
                <a href="https://wa.me/919931454704?text=${encodeURIComponent('Hi, I am interested in: ' + product.name + ' (' + product.category + ' ' + product.type + ')')}" 
                         target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="background: #25D366; color: #fff; border-color: #25D366;">
                    <span class="material-symbols-outlined" style="vertical-align: middle; font-size:18px; margin-right:4px;">chat</span>
                    Enquire on WhatsApp
                </a>
            </div>

            <div class="product-info-tabs">
                <h4>Description</h4>
                <p>${product.description || 'Exquisite handcrafted jewellery from Diamond Jewellers. Custom sizing available.'}</p>
                <h4>Care Instructions</h4>
                <p>Avoid chemicals, store separately, clean with soft cloth. Free lifetime polishing on select pieces.</p>
            </div>
        `;
    }

    // Update similar items
    const similarSection = document.querySelector('.similar-items-section');
    if (similarSection) {
        const similar = products
            .filter(p => p.id !== product.id && (p.category === product.category || p.type === product.type))
            .slice(0, 3);

        if (similar.length > 0) {
            const grid = similarSection.querySelector('.grid');
            if (grid) {
                grid.innerHTML = similar.map(p => `
                    <div class="product-card">
                        <a href="product.html?id=${p.id}">
                            <img src="${p.image}" alt="${p.name}">
                        </a>
                        <div class="product-info">
                            <h3 class="product-title">${p.name}</h3>
                            <button class="btn btn-secondary add-to-cart-btn" 
                                data-name="${p.name}" 
                                data-price="0" 
                                data-image="${p.image}">Save Design</button>
                        </div>
                    </div>
                `).join('');
            }
        }
    }
}
