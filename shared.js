let currentLanguage = localStorage.getItem('niзarLanguage') || 'en';
let currentZoom = parseInt(localStorage.getItem('niзarZoom')) || 100;

function updateZoom() {
    document.body.style.zoom = currentZoom + '%';
    const zoomLevel = document.getElementById('zoomLevel');
    if (zoomLevel) zoomLevel.textContent = currentZoom + '%';
    localStorage.setItem('niзarZoom', currentZoom);
}

const zoomIn = document.getElementById('zoomIn');
if (zoomIn) {
    zoomIn.addEventListener('click', () => {
        if (currentZoom < 200) {
            currentZoom += 10;
            updateZoom();
        }
    });
}

const zoomOut = document.getElementById('zoomOut');
if (zoomOut) {
    zoomOut.addEventListener('click', () => {
        if (currentZoom > 50) {
            currentZoom -= 10;
            updateZoom();
        }
    });
}

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

const scrollToTop = document.getElementById('scrollToTop');
if (scrollToTop) {
    scrollToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('niзarLanguage', lang);
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    if (event && event.target) event.target.classList.add('active');
    location.reload();
}

updateZoom();
