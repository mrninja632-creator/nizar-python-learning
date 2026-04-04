const resources = {
    en: [
        { title: "Official Python Documentation", desc: "https://docs.python.org - The complete official Python documentation." },
        { title: "Real Python", desc: "https://realpython.com - In-depth tutorials and articles about Python." },
        { title: "Stack Overflow", desc: "https://stackoverflow.com - Q&A community for programming questions." },
        { title: "PyPI", desc: "https://pypi.org - Python Package Index with thousands of packages." },
        { title: "GitHub", desc: "https://github.com - Repository hosting for code projects." },
        { title: "Codecademy", desc: "https://codecademy.com - Interactive Python courses." },
        { title: "Udemy", desc: "https://udemy.com - Affordable Python courses." },
        { title: "Coursera", desc: "https://coursera.org - University-level Python courses." },
        { title: "W3Schools Python", desc: "https://w3schools.com/python - Simple Python tutorials." },
        { title: "Python.org", desc: "https://python.org - Official Python website." }
    ],
    fr: [
        { title: "Documentation Officielle de Python", desc: "https://docs.python.org - La documentation officielle complète de Python." },
        { title: "Real Python", desc: "https://realpython.com - Tutoriels et articles détaillés sur Python." },
        { title: "Stack Overflow", desc: "https://stackoverflow.com - Communauté Q&R pour les questions de programmation." },
        { title: "PyPI", desc: "https://pypi.org - Index des packages Python avec des milliers de packages." },
        { title: "GitHub", desc: "https://github.com - Hébergement de dépôt pour les projets de code." },
        { title: "Codecademy", desc: "https://codecademy.com - Cours de Python interactifs." },
        { title: "Udemy", desc: "https://udemy.com - Cours de Python abordables." },
        { title: "Coursera", desc: "https://coursera.org - Cours de Python de niveau universitaire." },
        { title: "W3Schools Python", desc: "https://w3schools.com/python - Tutoriels Python simples." },
        { title: "Python.org", desc: "https://python.org - Site officiel de Python." }
    ],
    ar: [
        { title: "التوثيق الرسمي لـ Python", desc: "https://docs.python.org - التوثيق الرسمي الكامل لـ Python." },
        { title: "Real Python", desc: "https://realpython.com - دروس ومقالات متعمقة حول Python." },
        { title: "Stack Overflow", desc: "https://stackoverflow.com - مجتمع Q&A لأسئلة البرمجة." },
        { title: "PyPI", desc: "https://pypi.org - فهرس حزم Python مع آلاف الحزم." },
        { title: "GitHub", desc: "https://github.com - استضافة المستودع لمشاريع التعليمات البرمجية." },
        { title: "Codecademy", desc: "https://codecademy.com - دورات بايثون التفاعلية." },
        { title: "Udemy", desc: "https://udemy.com - دورات بايثون ميسورة التكلفة." },
        { title: "Coursera", desc: "https://coursera.org - دورات بايثون على مستوى الجامعة." },
        { title: "W3Schools Python", desc: "https://w3schools.com/python - دروس بايثون بسيطة." },
        { title: "Python.org", desc: "https://python.org - الموقع الرسمي لـ بايثون." }
    ]
};

const colors = ['color-1', 'color-2', 'color-3', 'color-4'];

function renderResources() {
    const resourcesDiv = document.getElementById('resources');
    const resourcesList = resources[currentLanguage];
    resourcesDiv.innerHTML = resourcesList.map((res, idx) => `
        <div class="term-item">
            <div class="term-header">
                <div class="term-number ${colors[idx % 4]}">🔗</div>
                <h2 class="term-name">${res.title}</h2>
            </div>
            <p class="term-definition">${res.desc}</p>
        </div>
    `).join('');
}

renderResources();
