let currentLanguage = localStorage.getItem('niзarLanguage') || 'en';

const resourcesContent = [
    { en: "Official Python Documentation", fr: "Documentation Officielle de Python", ar: "التوثيق الرسمي لبايثون", en_url: "https://docs.python.org/3/", en_desc: "Complete official Python documentation with API reference and tutorials." , fr_desc: "Documentation officielle complète de Python avec référence API et tutoriels.", ar_desc: "توثيق بايثون الرسمي الكامل مع مرجع API والبرامج التعليمية." },
    { en: "Real Python", fr: "Real Python", ar: "Real Python", en_url: "https://realpython.com", en_desc: "High-quality tutorials and in-depth articles on all Python topics.", fr_desc: "Tutoriels de haute qualité et articles approfondis sur tous les sujets Python.", ar_desc: "برامج تعليمية عالية الجودة ومقالات متعمقة عن جميع موضوعات بايثون." },
    { en: "GeeksforGeeks Python", fr: "GeeksforGeeks Python", ar: "GeeksforGeeks Python", en_url: "https://www.geeksforgeeks.org/python/", en_desc: "Comprehensive tutorials with examples and practice problems for all levels.", fr_desc: "Tutoriels complets avec des exemples et des problèmes de pratique pour tous les niveaux.", ar_desc: "برامج تعليمية شاملة مع أمثلة ومشاكل تطبيقية لجميع المستويات." },
    { en: "W3Schools Python", fr: "W3Schools Python", ar: "W3Schools Python", en_url: "https://www.w3schools.com/python/", en_desc: "Interactive tutorials with 'Try It Yourself' editor for hands-on learning.", fr_desc: "Tutoriels interactifs avec éditeur 'Try It Yourself' pour un apprentissage pratique.", ar_desc: "برامج تعليمية تفاعلية مع محرر 'جرب بنفسك' للتعلم العملي." },
    { en: "Stack Overflow", fr: "Stack Overflow", ar: "Stack Overflow", en_url: "https://stackoverflow.com/questions/tagged/python", en_desc: "Q&A community platform with millions of answered Python programming questions.", fr_desc: "Plateforme communautaire Q&R avec des millions de questions Python répondues.", ar_desc: "منصة أسئلة وأجوبة مجتمعية بها ملايين أسئلة بايثون المجابة." },
    { en: "Codecademy Python Course", fr: "Cours Python Codecademy", ar: "دورة Codecademy Python", en_url: "https://www.codecademy.com/learn/learn-python", en_desc: "Interactive hands-on course with coding exercises and projects.", fr_desc: "Cours pratique interactif avec des exercices de codage et des projets.", ar_desc: "دورة تفاعلية عملية مع تمارين برمجة ومشاريع." },
    { en: "Python Package Index (PyPI)", fr: "Indice des Paquets Python (PyPI)", ar: "فهرس حزم بايثون", en_url: "https://pypi.org/", en_desc: "Repository of over 400,000 Python packages you can install and use.", fr_desc: "Référentiel de plus de 400 000 paquets Python que vous pouvez installer et utiliser.", ar_desc: "مستودع يحتوي على أكثر من 400000 حزمة بايثون يمكنك تثبيتها واستخدامها." },
    { en: "GitHub Awesome Python", fr: "Awesome Python GitHub", ar: "GitHub Awesome Python", en_url: "https://github.com/vinta/awesome-python", en_desc: "Curated list of awesome Python frameworks, libraries, and resources.", fr_desc: "Liste organisée de merveilleux frameworks Python, bibliothèques et ressources.", ar_desc: "قائمة منظمة من أطر وحزم وموارد بايثون الرائعة." },
    { en: "LeetCode Python Problems", fr: "Problèmes LeetCode Python", ar: "مشاكل LeetCode Python", en_url: "https://leetcode.com", en_desc: "Platform with coding challenges to practice Python programming skills.", fr_desc: "Plateforme avec des défis de codage pour pratiquer les compétences de programmation Python.", ar_desc: "منصة بها تحديات برمجة لممارسة مهارات برمجة بايثون." },
    { en: "Kaggle Learning", fr: "Apprentissage Kaggle", ar: "تعلم Kaggle", en_url: "https://www.kaggle.com/learn", en_desc: "Free micro-courses and notebooks for Python data science and machine learning.", fr_desc: "Micro-cours gratuits et carnets pour la science des données et l'apprentissage automatique en Python.", ar_desc: "دورات صغيرة مجانية ودفاتر لعلوم البيانات والتعلم الآلي بايثون." },
    { en: "Automate the Boring Stuff", fr: "Automatiser les Trucs Ennuyeux", ar: "أتمتة الأشياء الممله", en_url: "https://automatetheboringstuff.com/", en_desc: "Free online book teaching practical Python programming for automation.", fr_desc: "Livre gratuit en ligne enseignant la programmation Python pratique pour l'automatisation.", ar_desc: "كتاب مجاني على الإنترنت يعلم برمجة بايثون العملية للأتمتة." },
    { en: "100 Days of Code", fr: "100 Jours de Code", ar: "100 يوم من الأكواد", en_url: "https://www.100daysofcode.com/", en_desc: "Challenge to improve your coding skills by coding 1 hour daily for 100 days.", fr_desc: "Défi pour améliorer vos compétences en codage en codant 1 heure par jour pendant 100 jours.", ar_desc: "تحدٍ لتحسين مهارات البرمجة من خلال البرمجة لمدة ساعة واحدة يومياً لمدة 100 يوم." }
];

const colors = ['color-1', 'color-2', 'color-3', 'color-4'];

function renderResources(items = resourcesContent) {
    const resourcesDiv = document.getElementById('resources');
    if (!resourcesDiv) return;

    resourcesDiv.innerHTML = items.map((item, idx) => {
        const lang = currentLanguage;
        const title = item[lang];
        const desc = item[`${lang}_desc`];
        const url = item['en_url'];
        return `
            <div class="term-item">
                <div class="term-header">
                    <div class="term-number ${colors[idx % 4]}">${idx + 1}</div>
                    <h2 class="term-name">${title}</h2>
                </div>
                <p class="term-definition">${desc}</p>
                <a href="${url}" target="_blank" style="color: #60a5fa; text-decoration: none; margin-top: 10px; display: inline-block; font-weight: 600; font-size: 0.95em;">🔗 Visit Resource →</a>
            </div>
        `;
    }).join('');
}

renderResources();
