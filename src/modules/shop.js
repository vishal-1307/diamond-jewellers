import { products } from '../data/products.js';
import { categories, types, priceRanges } from '../data/categories.js';

export function initShop() {
    const productsGrid = document.getElementById('products-grid');
    const filterContainer = document.getElementById('filters-sidebar');
    const searchInput = document.getElementById('collection-search-input') || document.getElementById('search-input');
    const sortSelect = document.getElementById('sort-select');

    // Only run on pages with a product grid
    if (!productsGrid) return;

    let currentFilters = {
        category: 'all',
        type: 'all',
        minPrice: 0,
        maxPrice: Infinity,
        search: ''
    };

    // 1. Initial Render
    renderSidebar();
    applyFilters(); // Use applyFilters to show count from start

    // Mobile filter toggle
    const filterToggle = document.getElementById('filter-toggle');
    if (filterToggle) {
        filterToggle.addEventListener('click', () => {
            const sidebar = document.getElementById('filters-sidebar');
            if (sidebar) {
                sidebar.classList.toggle('sidebar-open');
                filterToggle.innerHTML = sidebar.classList.contains('sidebar-open')
                    ? '<span class="material-symbols-outlined">close</span> Hide Filters'
                    : '<span class="material-symbols-outlined">tune</span> Filters';
            }
        });
    }

    // 2. Sidebar Rendering Logic
    function renderSidebar() {
        if (!filterContainer) return;

        let html = `
            <div class="filter-section">
                <h3>Categories</h3>
                <ul class="filter-list">
                    ${categories.map(cat => `
                        <li><button class="filter-btn ${cat.id === 'all' ? 'active' : ''}" data-type="category" data-value="${cat.id}">${cat.name} <span class="filter-count">(${getCountForCategory(cat.id)})</span></button></li>
                    `).join('')}
                </ul>
            </div>

            <div class="filter-section">
                <h3>Shop by Type</h3>
                <ul class="filter-list">
                    ${types.map(t => `
                        <li><button class="filter-btn ${t.id === 'all' ? 'active' : ''}" data-type="itemtype" data-value="${t.id}">${t.name} <span class="filter-count">(${getCountForType(t.id)})</span></button></li>
                    `).join('')}
                </ul>
            </div>

            <div class="filter-section">
                <h3>Price Range</h3>
                <ul class="filter-list">
                    ${priceRanges.map(range => `
                        <li><button class="filter-btn ${range.id === 'all' ? 'active' : ''}" data-type="price" data-value="${range.max}" data-min="${range.min}">${range.name}</button></li>
                    `).join('')}
                </ul>
            </div>

            <button class="btn btn-clear-filters" id="clear-filters-btn">Clear All Filters</button>
        `;
        filterContainer.innerHTML = html;

        // Attach Events to Sidebar Buttons
        filterContainer.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const type = e.currentTarget.dataset.type;
                const value = e.currentTarget.dataset.value;

                // Update UI Active State
                e.currentTarget.closest('.filter-list').querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.currentTarget.classList.add('active');

                // Update Filter State
                if (type === 'category') {
                    currentFilters.category = value;
                } else if (type === 'itemtype') {
                    currentFilters.type = value;
                } else if (type === 'price') {
                    currentFilters.maxPrice = parseFloat(value);
                    currentFilters.minPrice = parseFloat(e.currentTarget.dataset.min);
                }

                applyFilters();
            });
        });

        // Clear All Filters
        const clearBtn = document.getElementById('clear-filters-btn');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                currentFilters = { category: 'all', type: 'all', minPrice: 0, maxPrice: Infinity, search: '' };
                if (searchInput) searchInput.value = '';
                if (sortSelect) sortSelect.value = 'featured';
                renderSidebar(); // Re-render to reset active states
                applyFilters();
            });
        }
    }

    // Helper: count products per category
    function getCountForCategory(catId) {
        if (catId === 'all') return products.length;
        return products.filter(p => p.category.toLowerCase() === catId.toLowerCase()).length;
    }

    // Helper: count products per type
    function getCountForType(typeId) {
        if (typeId === 'all') return products.length;
        return products.filter(p => p.type.toLowerCase() === typeId.toLowerCase()).length;
    }

    // 3. Product Rendering Logic
    function renderProducts(items) {
        productsGrid.innerHTML = '';

        if (items.length === 0) {
            productsGrid.innerHTML = `<div class="no-results"><h3>No products found matching your criteria.</h3><p>Try adjusting your filters or search.</p></div>`;
            return;
        }

        items.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card animate-fade-in';

            // Badge HTML
            let badgeHTML = '';
            if (product.isNew) {
                badgeHTML += '<span class="badge badge-new">New</span>';
            }
            if (product.isBestSeller) {
                badgeHTML += '<span class="badge badge-bestseller">Best Seller</span>';
            }

            card.innerHTML = `
                <div class="card-image">
                    <a href="product.html?id=${product.id}">
                        <img src="${product.image}" loading="lazy" alt="${product.name}">
                    </a>
                    <div class="card-badges">${badgeHTML}</div>
                    <button class="btn-wishlist" title="Add to Wishlist">
                        <span class="material-symbols-outlined">favorite</span>
                    </button>
                    <div class="card-overlay">
                        <button class="btn-quick-view" data-id="${product.id}">Quick View</button>
                    </div>
                </div>
                <div class="product-info">
                    <p class="category-tag">${product.category} · ${product.type}</p>
                    <a href="product.html?id=${product.id}" class="product-title-link"><h3 class="product-title">${product.name}</h3></a>
                    <div class="rating">
                        ${'★'.repeat(Math.round(product.rating))}${'☆'.repeat(5 - Math.round(product.rating))}
                        <span class="rating-value">${product.rating}</span>
                    </div>
                    <div class="product-meta">${product.weight || ''} ${product.purity ? '· ' + product.purity : ''}</div>
                    <button class="btn btn-primary add-to-cart-btn" 
                        data-id="${product.id}" 
                        data-name="${product.name}" 
                        data-price="0" 
                        data-image="${product.image}">
                        Save Design
                    </button>
                </div>
            `;
            productsGrid.appendChild(card);
        });
    }

    // 4. Filtering Logic
    function applyFilters() {
        let filtered = products.filter(product => {
            // Category Match
            const catMatch = currentFilters.category === 'all' ||
                product.category.toLowerCase() === currentFilters.category.toLowerCase();

            // Type Match
            const typeMatch = currentFilters.type === 'all' ||
                product.type.toLowerCase() === currentFilters.type.toLowerCase();

            // Price Match
            const priceMatch = (product.price >= (currentFilters.minPrice || 0)) &&
                (product.price <= currentFilters.maxPrice);

            // Search Match
            const searchTerm = currentFilters.search.toLowerCase();
            const searchMatch = !searchTerm ||
                product.name.toLowerCase().includes(searchTerm) ||
                product.type.toLowerCase().includes(searchTerm) ||
                product.category.toLowerCase().includes(searchTerm) ||
                (product.description && product.description.toLowerCase().includes(searchTerm)) ||
                (product.purity && product.purity.toLowerCase().includes(searchTerm));

            return catMatch && typeMatch && priceMatch && searchMatch;
        });

        // Sorting
        if (sortSelect) {
            const sortValue = sortSelect.value;
            if (sortValue === 'low-high') {
                filtered.sort((a, b) => a.price - b.price);
            } else if (sortValue === 'high-low') {
                filtered.sort((a, b) => b.price - a.price);
            } else if (sortValue === 'rating') {
                filtered.sort((a, b) => b.rating - a.rating);
            } else if (sortValue === 'newest') {
                // New items first
                filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
            }
        }

        // Update product count
        updateProductCount(filtered.length, products.length);

        renderProducts(filtered);
    }

    // 5. Product Count Indicator
    function updateProductCount(shown, total) {
        let countEl = document.getElementById('product-count');
        if (!countEl) {
            // Create the element if it doesn't exist
            const toolbar = document.querySelector('.toolbar');
            if (toolbar) {
                countEl = document.createElement('div');
                countEl.id = 'product-count';
                countEl.className = 'product-count';
                toolbar.parentElement.appendChild(countEl);
            }
        }
        if (countEl) {
            countEl.textContent = shown === total
                ? `Showing all ${total} products`
                : `Showing ${shown} of ${total} products`;
        }
    }

    // 6. Search & Sort Event Listeners
    if (searchInput) {
        let debounceTimer;
        searchInput.addEventListener('input', (e) => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                currentFilters.search = e.target.value.trim();
                applyFilters();
            }, 250);
        });
    }

    if (sortSelect) {
        sortSelect.addEventListener('change', () => {
            applyFilters();
        });
    }
}
