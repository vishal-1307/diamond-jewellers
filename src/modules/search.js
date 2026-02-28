// Search module — adds a search bar to the header and handles live search

import { products } from '../data/products.js';

export function initSearch() {
    injectSearchBar();
    initSearchLogic();
}

function injectSearchBar() {
    const headerActions = document.querySelector('.header-actions');
    if (!headerActions) return;

    const searchHTML = `
        <div class="header-search">
            <button class="icon-btn search-toggle" aria-label="Search">
                <span class="material-symbols-outlined">search</span>
            </button>
            <div class="search-overlay" id="search-overlay">
                <div class="search-container">
                    <div class="search-input-wrap">
                        <span class="material-symbols-outlined">search</span>
                        <input type="text" id="search-input" placeholder="Search rings, necklaces, earrings..." autocomplete="off">
                        <button class="search-close-btn" id="search-close">&times;</button>
                    </div>
                    <div class="search-results" id="search-results"></div>
                </div>
            </div>
        </div>
    `;

    headerActions.insertAdjacentHTML('afterbegin', searchHTML);
}

function initSearchLogic() {
    const toggle = document.querySelector('.search-toggle');
    const overlay = document.getElementById('search-overlay');
    const input = document.getElementById('search-input');
    const closeBtn = document.getElementById('search-close');
    const resultsEl = document.getElementById('search-results');

    if (!toggle || !overlay) return;

    // Toggle search overlay
    toggle.addEventListener('click', () => {
        overlay.classList.add('active');
        setTimeout(() => input?.focus(), 200);
    });

    closeBtn?.addEventListener('click', () => {
        overlay.classList.remove('active');
        input.value = '';
        resultsEl.innerHTML = '';
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.remove('active');
            input.value = '';
            resultsEl.innerHTML = '';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('active')) {
            overlay.classList.remove('active');
            input.value = '';
            resultsEl.innerHTML = '';
        }
    });

    // Live search
    let debounceTimer;
    input?.addEventListener('input', () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            const query = input.value.trim().toLowerCase();
            if (query.length < 2) {
                resultsEl.innerHTML = '<p class="search-hint">Type at least 2 characters to search…</p>';
                return;
            }

            const matches = products.filter(p =>
                p.name.toLowerCase().includes(query) ||
                p.category.toLowerCase().includes(query) ||
                p.type.toLowerCase().includes(query) ||
                (p.description && p.description.toLowerCase().includes(query))
            ).slice(0, 8);

            if (matches.length === 0) {
                resultsEl.innerHTML = '<p class="search-hint">No products found. Try a different term.</p>';
                return;
            }

            resultsEl.innerHTML = matches.map(p => `
                <a href="product.html?id=${p.id}" class="search-result-item">
                    <img src="${p.image}" alt="${p.name}">
                    <div>
                        <strong>${p.name}</strong>
                        <span>${p.category} · ${p.type}</span>
                    </div>
                </a>
            `).join('');
        }, 250);
    });
}
