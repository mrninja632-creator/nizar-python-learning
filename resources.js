let currentLanguage = localStorage.getItem('niзarLanguage') || 'en';

const resourcesContent = [
    { en: "Official Python Documentation", fr: "Documentation Officielle de Python", ar: "التوثيق الرسمي لبايثون", en_url: "https://docs.python.org/3/", en_desc: "The official Python documentation with complete API reference.", fr_desc: "La documentation officielle de Python avec référence API complète.", ar_desc: "التوثيق الرسمي لبايثون مع مرجع API كامل." },
    { en: "Python.org Tutorial", fr: "Tutoriel Python.org", ar: "برنامج تعليمي من Python.org", en_url: "https://docs.python.org/3/tutorial/", en_desc: "Step-by-step official tutorial for beginners.", fr_desc: "Tutoriel officiel étape par étape pour les débutants.", ar_desc: "برنامج تعليمي رسمي خطوة بخطوة للمبتدئين." },
    { en: "Real Python", fr: "Real Python", ar: "Real Python", en_url: "https://realpython.com", en_desc: "High-quality tutorials and articles on Python programming.", fr_desc: "Tutoriels et articles de haute qualité sur la programmation Python.", ar_desc: "دروس ومقالات عالية الجودة حول برمجة بايثون." },
    { en: "Stack Overflow Python Tag", fr: "Balise Stack Overflow Python", ar: "علامة Stack Overflow Python", en_url: "https://stackoverflow.com/questions/tagged/python", en_desc: "Community Q&A platform with millions of answered questions.", fr_desc: "Plateforme Q&R communautaire avec des millions de questions répondues.", ar_desc: "منصة أسئلة وأجوبة مجتمعية بها ملايين الأسئلة المجابة." },
    { en: "GeeksforGeeks Python", fr: "GeeksforGeeks Python", ar: "GeeksforGeeks Python", en_url: "https://www.geeksforgeeks.org/python/", en_desc: "Comprehensive tutorials with code examples and practice problems.", fr_desc: "Tutoriels complets avec des exemples de code et des problèmes de pratique.", ar_desc: "دروس شاملة مع أمثلة أكواد ومشاكل تطبيقية." },
    { en: "W3Schools Python", fr: "W3Schools Python", ar: "W3Schools Python", en_url: "https://www.w3schools.com/python/", en_desc: "Interactive tutorials with exercises and 'Try It Yourself' editor.", fr_desc: "Tutoriels interactifs avec des exercices et l'éditeur 'Try It Yourself'.", ar_desc: "دروس تفاعلية مع تمارين و��رض تجريبي للكود." },
    { en: "Codecademy Python Course", fr: "Cours Python Codecademy", ar: "دورة Codecademy Python", en_url: "https://www.codecademy.com/learn/learn-python", en_desc: "Interactive hands-on course to learn Python programming.", fr_desc: "Cours interactif pratique pour apprendre la programmation Python.", ar_desc: "دورة تفاعلية عملية لتعلم برمجة بايثون." },
    { en: "Python Package Index (PyPI)", fr: "Indice des Paquets Python (PyPI)", ar: "فهرس حزم بايثون (PyPI)", en_url: "https://pypi.org/", en_desc: "Repository of Python packages you can install and use.", fr_desc: "Référentiel de paquets Python que vous pouvez installer et utiliser.", ar_desc: "مستودع حزم بايثون التي يمكنك تثبيتها واستخدامها." },
    { en: "GitHub Awesome Python", fr: "Awesome Python GitHub", ar: "GitHub Awesome Python", en_url: "https://github.com/vinta/awesome-python", en_desc: "Curated list of awesome Python frameworks and libraries.", fr_desc: "Liste organisée de merveilleux frameworks et bibliothèques Python.", ar_desc: "قائمة منظمة من أطر وحزم بايثون الرائعة." },
    { en: "Kaggle Python Notebooks", fr: "Carnets Kaggle Python", ar: "دفاتر Kaggle Python", en_url: "https://www.kaggle.com/notebooks", en_desc: "Real-world Python projects and data science examples.", fr_desc: "Projets Python du monde réel et exemples de science des données.", ar_desc: "مشاريع بايثون من العالم الحقيقي وأمثلة علوم البيانات." }
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
                <a href="${url}" target="_blank" style="color: #60a5fa; text-decoration: none; margin-top: 10px; display: inline-block; font-weight: 600;">Visit Resource →</a>
            </div>
        `;
    }).join('');
}

renderResources();
