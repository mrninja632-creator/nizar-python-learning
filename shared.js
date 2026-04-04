let currentZoom = 100;
let currentLanguage = 'en';

function updateZoom() {
    document.body.style.zoom = currentZoom + '%';
    document.getElementById('zoomLevel').textContent = currentZoom + '%';
    localStorage.setItem('niзarZoom', currentZoom);
}

function changeLanguage(lang) {
    currentLanguage = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    localStorage.setItem('niзarLanguage', lang);
    location.reload();
}

document.getElementById('zoomIn') ? .addEventListener('click', () => {
    if (currentZoom < 200) {
        currentZoom += 10;
        updateZoom();
    }
});

document.getElementById('zoomOut') ? .addEventListener('click', () => {
    if (currentZoom > 50) {
        currentZoom -= 10;
        updateZoom();
    }
});

window.addEventListener('scroll', () => {
    const scrollBtn = document.getElementById('scrollToTop');
    if (scrollBtn) {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    }
});

document.getElementById('scrollToTop') ? .addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const savedZoom = localStorage.getItem('niзarZoom');
if (savedZoom) {
    currentZoom = parseInt(savedZoom);
    updateZoom();
}

currentLanguage = localStorage.getItem('niзarLanguage') || 'en';
const langBtn = document.querySelector(`button[onclick="changeLanguage('${currentLanguage}')"]`);
if (langBtn) {
    langBtn.classList.add('active');
}