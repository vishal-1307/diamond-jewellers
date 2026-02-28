
export function initCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    updateHeaderCount(cart);

    // 1. Event Delegation for "Add to Cart" (Global)
    document.body.addEventListener('click', (e) => {
        const btn = e.target.closest('.add-to-cart-btn');
        if (btn && btn.hasAttribute('data-name')) {
            e.preventDefault();
            const product = {
                id: btn.getAttribute('data-id') || Date.now() + Math.random(),
                name: btn.getAttribute('data-name'),
                image: btn.getAttribute('data-image') || 'Assets/default.png',
                quantity: 1
            };
            addToCart(product);
        }
    });

    // 2. Render Cart if on Cart Page
    if (document.querySelector('.cart-layout') || document.querySelector('.cart-items-list')) {
        renderCartPage(cart);

        // Handle Remove Buttons in Cart Page
        document.body.addEventListener('click', (e) => {
            if (e.target.classList.contains('remove-btn')) {
                const index = parseInt(e.target.getAttribute('data-index'));
                removeFromCart(index);
            }
        });
    }

    function addToCart(product) {
        const existingItem = cart.find(item => item.name === product.name);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push(product);
        }
        saveCart();
        showToast(`"${product.name}" added to your list!`);
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        saveCart();
        renderCartPage(cart);
    }

    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
        updateHeaderCount(cart);
    }

    function updateHeaderCount(cart) {
        const count = cart.reduce((total, item) => total + item.quantity, 0);
        const badge = document.getElementById('cart-count');
        if (badge) {
            badge.textContent = count > 0 ? count : '';
        }
    }

    // Simple toast notification
    function showToast(message) {
        let toast = document.getElementById('cart-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'cart-toast';
            toast.style.cssText = `
                position: fixed; bottom: 30px; right: 30px; 
                background: #333; color: #fff; padding: 14px 24px; 
                border-radius: 8px; font-size: 14px; z-index: 9999;
                box-shadow: 0 4px 15px rgba(0,0,0,0.2);
                transform: translateY(100px); opacity: 0;
                transition: all 0.3s ease;
            `;
            document.body.appendChild(toast);
        }
        toast.textContent = message;
        // Trigger show
        requestAnimationFrame(() => {
            toast.style.transform = 'translateY(0)';
            toast.style.opacity = '1';
        });
        // Auto-hide
        setTimeout(() => {
            toast.style.transform = 'translateY(100px)';
            toast.style.opacity = '0';
        }, 2500);
    }

    function renderCartPage(currentCart) {
        const container = document.querySelector('.cart-items-list');
        if (!container) return;

        container.innerHTML = '';

        if (currentCart.length === 0) {
            // Hide the enquiry sidebar when cart is empty
            const sidebar = document.querySelector('.order-summary');
            if (sidebar) sidebar.style.display = 'none';

            container.innerHTML = `
                <div class="empty-cart-message">
                    <span class="material-symbols-outlined" style="font-size: 48px; color: var(--color-text-muted); margin-bottom: 20px;">shopping_bag</span>
                    <h3>Your list is empty.</h3>
                    <p style="text-align: center; margin-top: 10px;">Browse our designs and add the ones you like!</p>
                    <a href="collections.html" class="btn btn-primary" style="margin-top: 20px;">Browse Designs</a>
                </div>`;
            return;
        }

        // Show sidebar when cart has items
        const sidebar = document.querySelector('.order-summary');
        if (sidebar) sidebar.style.display = '';

        currentCart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';

            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <h3>${item.name}</h3>
                    <p>Qty: ${item.quantity}</p>
                </div>
                <div class="cart-item-actions" style="margin-left: auto;">
                    <button class="remove-btn" data-index="${index}" style="border:none; background:none; color:red; cursor:pointer; font-size: 0.9em;">Remove</button>
                </div>
            `;
            container.appendChild(cartItem);
        });
    }

    // WhatsApp Enquiry
    const whatsappBtn = document.getElementById('whatsapp-checkout');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (cart.length === 0) {
                alert('Your list is empty! Add some designs first.');
                return;
            }

            const phone = '919931454704';
            let message = '💎 *Design Enquiry from Diamond Jewellers Website*\n\n';
            message += 'Hi, I am interested in the following designs:\n\n';

            cart.forEach((item, i) => {
                message += `${i + 1}. ${item.name} (Qty: ${item.quantity})\n`;
            });

            message += `\n_Please share the latest prices and availability._`;
            message += `\n_Thank you!_`;

            const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        });
    }
}
