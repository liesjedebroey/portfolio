document.addEventListener('DOMContentLoaded', () => {

    // ─── Smooth scrolling ────────────
    document.querySelectorAll('nav a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                document.querySelector('.nav-links')?.classList.remove('open');
            }
        });
    });

    // ─── Active nav on scroll ────────
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(s => {
            if (window.scrollY >= s.offsetTop - 150) current = s.id;
        });
        document.querySelectorAll('.nav-links a').forEach(a => {
            a.classList.toggle('active', a.getAttribute('href') === '#' + current);
        });
    }, { passive: true });

    // ─── Reveal on scroll ────────────
    const observer = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) e.target.classList.add('visible');
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // ─── ACCORDION ───────────────────
    document.querySelectorAll('.acc-header').forEach(header => {
        header.addEventListener('click', () => {
            const item = header.closest('.acc-item');
            const panel = item.querySelector('.acc-panel');
            const isOpen = item.classList.contains('open');

            // Close all open
            document.querySelectorAll('.acc-item.open').forEach(openItem => {
                if (openItem !== item) {
                    openItem.classList.remove('open');
                    openItem.querySelector('.acc-panel').style.maxHeight = '0px';
                }
            });

            // Toggle
            if (isOpen) {
                item.classList.remove('open');
                panel.style.maxHeight = '0px';
            } else {
                item.classList.add('open');
                panel.style.maxHeight = panel.scrollHeight + 'px';
            }
        });
    });

    // ─── HORIZONTAL TIMELINE — click to show info ───
    const tlItems = document.querySelectorAll('.htl-item');
    const tlInfos = document.querySelectorAll('.htl-info');

    tlItems.forEach(item => {
        const btn = item.querySelector('.htl-label');
        const infoId = 'info-' + item.dataset.info;

        btn.addEventListener('click', () => {
            const wasActive = item.classList.contains('active');

            // Remove all active states
            tlItems.forEach(i => i.classList.remove('active'));
            tlInfos.forEach(i => i.classList.remove('active'));

            // Toggle (if was active, just close)
            if (!wasActive) {
                item.classList.add('active');
                const infoEl = document.getElementById(infoId);
                if (infoEl) infoEl.classList.add('active');
            }
        });
    });

    // ─── CERTIFICATE LIGHTBOX ─────────
    const lightbox = document.getElementById('certLightbox');
    const lightboxBody = lightbox.querySelector('.lightbox-body');
    const lightboxTitle = lightbox.querySelector('.lightbox-title');
    const lightboxDownload = lightbox.querySelector('.lightbox-download');
    const lightboxClose = lightbox.querySelector('.lightbox-close');
    const lightboxOverlay = lightbox.querySelector('.lightbox-overlay');

    function openLightbox(src, type, title) {
        lightboxTitle.textContent = title;
        lightboxDownload.href = src;
        lightboxBody.innerHTML = '';

        if (type === 'pdf') {
            const iframe = document.createElement('iframe');
            iframe.src = src + '#toolbar=0&navpanes=0';
            lightboxBody.appendChild(iframe);
        } else {
            const img = document.createElement('img');
            img.src = src;
            img.alt = title;
            lightboxBody.appendChild(img);
        }

        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        lightboxBody.innerHTML = '';
    }

    document.querySelectorAll('.cert-btn[data-cert]').forEach(btn => {
        btn.addEventListener('click', () => {
            openLightbox(btn.dataset.cert, btn.dataset.type, btn.dataset.title);
        });
    });

    lightboxClose.addEventListener('click', closeLightbox);
    lightboxOverlay.addEventListener('click', closeLightbox);
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) closeLightbox();
    });

    // ─── Mobile nav ──────────────────
    const toggle = document.querySelector('.nav-toggle');
    const menu = document.querySelector('.nav-links');
    if (toggle) toggle.addEventListener('click', () => menu.classList.toggle('open'));

    // ─── Export CV ────────────────────
    const exportBtn = document.getElementById('exportCV');
    if (exportBtn) {
        exportBtn.addEventListener('click', e => {
            e.preventDefault();
            const url = 'assets/CV_Annelies_Debroey.pdf';
            const a = document.createElement('a');
            a.href = url; a.download = 'CV_Annelies_Debroey.pdf';
            fetch(url, { method: 'HEAD' })
                .then(r => r.ok ? a.click() : window.print())
                .catch(() => window.print());
        });
    }

});