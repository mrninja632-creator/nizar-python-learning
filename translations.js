const allTranslations = {
    en: {
        'header-title': '🎓 Python Tutorials',
        'header-tagline': 'Learn Python Step by Step',
        'tip-header-title': '💡 Tips & Tricks',
        'tip-header-tagline': 'Pro Tips for Better Python Code',
        'resource-header-title': '🔗 Resources',
        'resource-header-tagline': 'Essential Learning Resources',
        'glossary-header-title': '📚 Python Glossary',
        'glossary-header-tagline': '75+ Terms with Definitions in Multiple Languages',
        'footer-title': '🐍 NIZAR - Learn Python Like Never Before',
        'footer-copy': '© 2024 NIZAR Learning Platform. All Rights Reserved.'
    },
    fr: {
        'header-title': '🎓 Tutoriels Python',
        'header-tagline': 'Apprenez Python Étape par Étape',
        'tip-header-title': '💡 Astuces et Conseils',
        'tip-header-tagline': 'Conseils Pro pour un Meilleur Code Python',
        'resource-header-title': '🔗 Ressources',
        'resource-header-tagline': 'Ressources Essentielles pour l\'Apprentissage',
        'glossary-header-title': '📚 Glossaire Python',
        'glossary-header-tagline': '75+ Termes avec Définitions en Plusieurs Langues',
        'footer-title': '🐍 NIZAR - Apprenez Python Comme Jamais Avant',
        'footer-copy': '© 2024 Plateforme d\'Apprentissage NIZAR. Tous Droits Réservés.'
    },
    ar: {
        'header-title': '🎓 برامج تعليمية بايثون',
        'header-tagline': 'تعلم بايثون خطوة بخطوة',
        'tip-header-title': '💡 نصائح واستراتيجيات',
        'tip-header-tagline': 'نصائح احترافية لأفضل كود بايثون',
        'resource-header-title': '🔗 موارد',
        'resource-header-tagline': 'موارد تعليمية أساسية',
        'glossary-header-title': '📚 قاموس با��ثون',
        'glossary-header-tagline': '75+ مصطلح مع تعريفات بلغات متعددة',
        'footer-title': '🐍 نيزار - تعلم بايثون كما لم تفعل من قبل',
        'footer-copy': '© 2024 منصة نيزار للتعلم. جميع الحقوق محفوظة.'
    }
};

function applyTranslations(lang) {
    document.querySelectorAll('[data-translate]').forEach(elem => {
        const key = elem.getAttribute('data-translate');
        if (allTranslations[lang] && allTranslations[lang][key]) {
            elem.textContent = allTranslations[lang][key];
        }
    });
    localStorage.setItem('niзarLanguage', lang);
}

function changeLanguage(lang) {
    applyTranslations(lang);
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    location.reload();
}
