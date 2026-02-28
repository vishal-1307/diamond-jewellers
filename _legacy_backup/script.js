document.addEventListener('DOMContentLoaded', () => {

    // Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (mobileToggle && mainNav) {
        mobileToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');

            const icon = mobileToggle.querySelector('.material-symbols-outlined');
            if (mainNav.classList.contains('active')) {
                icon.textContent = 'close';
            } else {
                icon.textContent = 'menu';
            }
        });
    }

    //  CART FUNCTIONALITY
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Initial Render
    const cartItemsContainer = document.querySelector('.cart-items-list');
    const orderSummary = document.querySelector('.order-summary');
    if (cartItemsContainer && orderSummary) {
        renderCart();
    }

    // Global Event Delegation for "Add to Cart"
    document.body.addEventListener('click', (e) => {
        // Target .add-to-cart-btn or .btn-secondary (fallback)
        const btn = e.target.closest('.add-to-cart-btn');

        if (btn && btn.hasAttribute('data-name')) {
            e.preventDefault();
            const product = {
                id: btn.getAttribute('data-id') || Date.now() + Math.random(),
                name: btn.getAttribute('data-name'),
                price: parseFloat(btn.getAttribute('data-price')),
                image: btn.getAttribute('data-image') || 'assets/default.png',
                quantity: 1
            };
            addToCart(product);
        }
    });

    function addToCart(product) {
        const existingItem = cart.find(item => item.name === product.name);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push(product);
        }

        saveCart();
        alert('Item added to your cart!');
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        saveCart();
        renderCart();
    }

    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    function renderCart() {
        if (!cartItemsContainer) return;

        cartItemsContainer.innerHTML = '';

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `
                <div class="empty-cart-message">
                    <span class="material-symbols-outlined" style="font-size: 48px; color: var(--color-text-muted); margin-bottom: 20px;">shopping_bag</span>
                    <h3>Your cart is empty.</h3>
                    <p style="text-align: center; margin-top: 10px;">Looks like you haven't added anything yet.</p>
                    <a href="collections.html" class="btn btn-primary" style="margin-top: 20px;">Start Shopping</a>
                </div>`;
            updateSummary(0);
            return;
        }

        let subtotal = 0;

        cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;

            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item-card';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <h3>${item.name}</h3>
                    <p>Price: ₹ ${item.price.toLocaleString()}</p>
                    <p><strong>Quantity: ${item.quantity}</strong></p>
                </div>
                <div class="cart-item-actions">
                    <div class="cart-item-price">₹ ${itemTotal.toLocaleString()}</div>
                    <button class="remove-btn" data-index="${index}" style="border:none; background:none; color:red; cursor:pointer;">Remove</button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
        });


        document.querySelectorAll('.remove-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.target.getAttribute('data-index'));
                removeFromCart(index);
            });
        });

        updateSummary(subtotal);
    }

    function updateSummary(subtotal) {
        if (!orderSummary) return;

        const shipping = subtotal > 0 ? 150 : 0;
        const total = subtotal + shipping;

        const summaryRows = orderSummary.querySelectorAll('.summary-row span:last-child');
        if (summaryRows.length >= 3) {
            summaryRows[0].textContent = `₹ ${subtotal.toLocaleString()}`;
            summaryRows[1].textContent = `₹ ${shipping}`;
            summaryRows[2].textContent = `₹ ${total.toLocaleString()}`;
        }
    }

    // 3. Contact Form Validation
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            let isValid = true;
            let errorMessage = '';

            if (!nameInput.value.trim()) {
                isValid = false;
                errorMessage += 'Please enter your name.\n';
            }
            if (!emailInput.value.trim() || !validateEmail(emailInput.value)) {
                isValid = false;
                errorMessage += 'Please enter a valid email.\n';
            }
            if (!messageInput.value.trim()) {
                isValid = false;
                errorMessage += 'Please enter a message.\n';
            }

            if (isValid) {
                alert('Thank you, ' + nameInput.value + '! Your message has been sent.');
                contactForm.reset();
            } else {
                alert(errorMessage);
            }
        });
    }

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).toLowerCase());
    }

    //  Category Filtering (Collections Page)
    const filterButtons = document.querySelectorAll('.btn-filter');
    const productCards = document.querySelectorAll('.product-card[data-category]');

    if (filterButtons.length > 0 && productCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active to clicked
                button.classList.add('active');

                const filterValue = button.textContent.trim();

                productCards.forEach(card => {
                    const category = card.getAttribute('data-category');

                    if (filterValue === 'All' || category === filterValue) {
                        card.style.display = 'block'; // Or 'flex' depending on layout, block is usually safe for grid items if wrapper is grid
                        // Actually for grid items, display block keeps them as grid items. 
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

});
