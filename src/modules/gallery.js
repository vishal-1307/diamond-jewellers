
export function initGalleryLightbox() {
    const galleryImages = document.querySelectorAll('.gallery-grid img');

    if (galleryImages.length === 0) return;

    // Create lightbox overlay
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <button class="lightbox-close">&times;</button>
            <button class="lightbox-prev">&larr;</button>
            <img src="" alt="Gallery Image">
            <button class="lightbox-next">&rarr;</button>
        </div>
    `;
    document.body.appendChild(lightbox);

    // Lightbox Styles (inject via JS for simplicity)
    const style = document.createElement('style');
    style.textContent = `
        #lightbox {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.9);
            display: none;
            align-items: center;
            justify-content: center;
            z-index: 10000;
        }
        #lightbox.active { display: flex; }
        .lightbox-content {
            position: relative;
            max-width: 90%;
            max-height: 90%;
        }
        .lightbox-content img {
            max-width: 100%;
            max-height: 85vh;
            border-radius: 8px;
        }
        .lightbox-close {
            position: absolute;
            top: -40px;
            right: 0;
            background: none;
            border: none;
            color: #fff;
            font-size: 32px;
            cursor: pointer;
        }
        .lightbox-prev, .lightbox-next {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(255,255,255,0.2);
            border: none;
            color: #fff;
            font-size: 24px;
            padding: 15px;
            cursor: pointer;
            border-radius: 4px;
        }
        .lightbox-prev { left: -60px; }
        .lightbox-next { right: -60px; }
        .lightbox-prev:hover, .lightbox-next:hover { background: rgba(255,255,255,0.4); }
    `;
    document.head.appendChild(style);

    const lbImg = lightbox.querySelector('img');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');

    let currentIndex = 0;
    const images = Array.from(galleryImages);

    function showImage(index) {
        if (index < 0) index = images.length - 1;
        if (index >= images.length) index = 0;
        currentIndex = index;
        lbImg.src = images[currentIndex].src;
    }

    galleryImages.forEach((img, i) => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
            currentIndex = i;
            showImage(currentIndex);
            lightbox.classList.add('active');
        });
    });

    closeBtn.addEventListener('click', () => lightbox.classList.remove('active'));
    prevBtn.addEventListener('click', () => showImage(currentIndex - 1));
    nextBtn.addEventListener('click', () => showImage(currentIndex + 1));

    // Close on background click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) lightbox.classList.remove('active');
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') lightbox.classList.remove('active');
        if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
        if (e.key === 'ArrowRight') showImage(currentIndex + 1);
    });
}
