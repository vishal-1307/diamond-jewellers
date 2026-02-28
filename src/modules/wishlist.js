// Wishlist module — save/remove designs with localStorage

export function initWishlist() {
    let wishlist = JSON.parse(localStorage.getItem('dj-wishlist')) || [];

    // Event delegation for wishlist heart buttons
    document.body.addEventListener('click', (e) => {
        const btn = e.target.closest('.btn-wishlist');
        if (!btn) return;
        e.preventDefault();
        e.stopPropagation();

        // Get product info from the card
        const card = btn.closest('.product-card');
        if (!card) return;

        const cartBtn = card.querySelector('.add-to-cart-btn');
        const titleEl = card.querySelector('.product-title');

        const productName = titleEl ? titleEl.textContent : '';
        const productId = cartBtn ? cartBtn.getAttribute('data-id') : productName;
        const productImage = cartBtn ? cartBtn.getAttribute('data-image') : '';

        const index = wishlist.findIndex(w => w.id === productId);

        if (index > -1) {
            // Remove from wishlist
            wishlist.splice(index, 1);
            btn.classList.remove('active');
            showToast(`Removed from wishlist`);
        } else {
            // Add to wishlist
            wishlist.push({ id: productId, name: productName, image: productImage });
            btn.classList.add('active');
            btn.style.animation = 'none';
            void btn.offsetWidth;
            btn.style.animation = 'heart-pop 0.4s ease';
            showToast(`"${productName}" added to wishlist ♥`);
        }

        localStorage.setItem('dj-wishlist', JSON.stringify(wishlist));
    });

    // Mark existing wishlist items on page load (with a slight delay for DOM rendering)
    setTimeout(() => markWishlistItems(), 500);

    function markWishlistItems() {
        const cards = document.querySelectorAll('.product-card');
        cards.forEach(card => {
            const cartBtn = card.querySelector('.add-to-cart-btn');
            const wishBtn = card.querySelector('.btn-wishlist');
            if (!cartBtn || !wishBtn) return;

            const productId = cartBtn.getAttribute('data-id');
            if (wishlist.some(w => w.id === productId)) {
                wishBtn.classList.add('active');
            }
        });
    }

    function showToast(message) {
        let toast = document.getElementById('wishlist-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'wishlist-toast';
            toast.style.cssText = `
                position: fixed; bottom: 30px; left: 30px; 
                background: #333; color: #fff; padding: 14px 24px; 
                border-radius: 8px; font-size: 14px; z-index: 9999;
                box-shadow: 0 4px 15px rgba(0,0,0,0.2);
                transform: translateY(100px); opacity: 0;
                transition: all 0.3s ease;
            `;
            document.body.appendChild(toast);
        }
        toast.textContent = message;
        requestAnimationFrame(() => {
            toast.style.transform = 'translateY(0)';
            toast.style.opacity = '1';
        });
        setTimeout(() => {
            toast.style.transform = 'translateY(100px)';
            toast.style.opacity = '0';
        }, 2000);
    }
}
