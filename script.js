document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.site-header');
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.main-nav');
    const lightbox = document.getElementById('image-lightbox');
    const lightboxImage = lightbox.querySelector('.lightbox-image');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    const lightboxClose = lightbox.querySelector('.lightbox-close');

    const backToTopButton = document.createElement('button');
    backToTopButton.textContent = '↑ Haut';
    backToTopButton.className = 'back-to-top';
    backToTopButton.type = 'button';
    document.body.appendChild(backToTopButton);

    function toggleHeaderState() {
        header.classList.toggle('scrolled', window.scrollY > 20);
        backToTopButton.classList.toggle('visible', window.scrollY > 350);
    }

    window.addEventListener('scroll', toggleHeaderState);
    toggleHeaderState();

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    menuToggle.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    document.querySelectorAll('.nav-link').forEach((link) => {
        link.addEventListener('click', () => {
            nav.classList.remove('open');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });

    function openLightbox(img) {
        lightboxImage.src = img.src;
        lightboxImage.alt = img.alt || 'Image du portfolio';
        lightboxCaption.textContent = img.alt || '';
        lightbox.classList.add('active');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.classList.add('lightbox-open');
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('lightbox-open');
        lightboxImage.src = '';
    }

    document.querySelectorAll('img.zoomable, .project-list img').forEach((img) => {
        img.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            openLightbox(img);
        });
    });

    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && lightbox.classList.contains('active')) closeLightbox();
    });



    document.querySelectorAll('.video-card video').forEach((video) => {
        video.addEventListener('play', () => {
            document.querySelectorAll('.video-card video').forEach((otherVideo) => {
                if (otherVideo !== video) otherVideo.pause();
            });
        });
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const subject = encodeURIComponent('Message depuis votre portfolio');
        const body = encodeURIComponent(`Nom: ${name}
Email: ${email}
Message: ${message}`);
        window.location.href = `mailto:tshsiewe@gmail.com?subject=${subject}&body=${body}`;
    });
});
