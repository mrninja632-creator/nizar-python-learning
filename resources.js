let currentLanguage = localStorage.getItem('niзarLanguage') || 'en';

const resources = {
    en: [
        { title: "Official Python Documentation", desc: "https://docs.python.org - The complete official Python documentation." },
        { title: "Real Python", desc: "https://realpython.com - In-depth tutorials and articles about Python." },
        { title: "Stack Overflow", desc: "https://stackoverflow.com - Q&A community for programming questions." },
        { title: "PyPI - Python Package Index", desc: "https://pypi.org - Official repository with thousands of Python packages." },
        { title: "GitHub", desc: "https://github.com - Host and collaborate on code projects." },
        { title: "Codecademy - Python Course", desc: "https://codecademy.com - Interactive Python learning platform." },
        { title: "Udemy - Python Courses", desc: "https://udemy.com - Affordable and comprehensive Python courses." },
        { title: "Coursera - Python Programs", desc: "https://coursera.org - University-level Python courses with certificates." },
        { title: "W3Schools Python Tutorial", desc: "https://w3schools.com/python - Simple and easy Python tutorials for beginners." },
        { title: "Python.org - Official Site", desc: "https://python.org - Official Python website with news and downloads." },
        { title: "GeeksforGeeks Python", desc: "https://geeksforgeeks.org - Comprehensive Python tutorials and examples." },
        { title: "LeetCode - Practice Problems", desc: "https://leetcode.com - Solve coding problems to improve skills." }
    ],
    fr: [
        { title: "Documentation Officielle de Python", desc: "https://docs.python.org - La documentation officielle complète de Python." },
        { title: "Real Python", desc: "https://realpython.com - Tutoriels et articles détaillés sur Python." },
        { title: "Stack Overflow", desc: "https://stackoverflow.com - Communauté Q&R pour les questions de programmation." },
        { title: "PyPI - Index des Packages Python", desc: "https://pypi.org - Dépôt officiel avec des milliers de packages Python." },
        { title: "GitHub", desc: "https://github.com - Hébergez et collaborez sur des projets de code." },
        { title: "Codecademy - Cours Python", desc: "https://codecademy.com - Plateforme d'apprentissage Python interactive." },
        { title: "Udemy - Cours Python", desc: "https://udemy.com - Cours Python abordables et complets." },
        { title: "Coursera - Programmes Python", desc: "https://coursera.org - Cours Python de niveau universitaire avec certificats." },
        { title: "W3Schools Tutoriel Python", desc: "https://w3schools.com/python - Tutoriels Python simples et faciles pour les débutants." },
        { title: "Python.org - Site Officiel", desc: "https://python.org - Site officiel de Python avec nouvelles et téléchargements." },
        { title: "GeeksforGeeks Python", desc: "https://geeksforgeeks.org - Tutoriels Python complets et exemples." },
        { title: "LeetCode - Problèmes de Pratique", desc: "https://leetcode.com - Résolvez des problèmes de codage pour améliorer vos compétences." }
    ],
    ar: [
        { title: "التوثيق الرسمي لـ Python", desc: "https://docs.python.org - التوثيق الرسمي الكامل لـ Python." },
        { title: "Real Python", desc: "https://realpython.com - دروس ومقالات متعمقة حول Python." },
        { title: "Stack Overflow", desc: "https://stackoverflow.com - مجتمع Q&A لأسئلة البرمجة." },
        { title: "PyPI - فهرس حزم Python", desc: "https://pypi.org - المستودع الرسمي مع آلاف حزم Python." },
        { title: "GitHub", desc: "https://github.com - استضيف وتعاون على مشاريع الأكواد." },
        { title: "Codecademy - دورة Python", desc: "https://codecademy.com - منصة تعليم بايثون التفاعلية." },
        { title: "Udemy - دورات Python", desc: "https://udemy.com - دورات بايثون ميسورة التكلفة وشاملة." },
        { title: "Coursera - برامج Python", desc: "https://coursera.org - دورات بايثون على مستوى الجامعة مع شهادات." },
        { title: "W3Schools دليل Python", desc: "https://w3schools.com/python - دروس بايثون بسيطة وسهلة للمبتدئين." },
        { title: "Python.org - الموقع الرسمي", desc: "https://python.org - الموقع الرسمي لـ Python مع الأخبار والتنزيلات." },
        { title: "GeeksforGeeks Python", desc: "https://geeksforgeeks.org - دروس بايثون شاملة وأمثلة." },
        { title: "LeetCode - مشاكل التدريب", desc: "https://leetcode.com - حل مشاكل الترميز لتحسين مهاراتك." }
    ]
};

const colors = ['color-1', 'color-2', 'color-3', 'color-4'];

function renderResources() {
    const resourcesDiv = document.getElementById('resources');
    if (!resourcesDiv) return;
    
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
