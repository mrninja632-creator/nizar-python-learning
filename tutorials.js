let currentLanguage = localStorage.getItem('niзarLanguage') || 'en';

const tutorialContent = [
    { en: "Introduction to Python", fr: "Introduction à Python", ar: "مقدمة عن بايثون", en_desc: "Learn the basics of Python programming and why it's so popular.", fr_desc: "Apprenez les bases de la programmation Python et pourquoi c'est si populaire.", ar_desc: "تعلم أساسيات برمجة بايثون ولماذا هي شهيرة جداً." },
    { en: "Variables and Data Types", fr: "Variables et Types de Données", ar: "المتغيرات وأنواع البيانات", en_desc: "Understand how to create variables and work with different data types.", fr_desc: "Comprendre comment créer des variables et travailler avec différents types de données.", ar_desc: "فهم كيفية إنشاء المتغيرات والعمل مع أنواع البيانات المختلفة." },
    { en: "Control Flow: If Statements", fr: "Flux de Contrôle: Déclarations If", ar: "تدفق التحكم: بيانات If", en_desc: "Master conditional statements to make decisions in your code.", fr_desc: "Maîtrisez les déclarations conditionnelles pour prendre des décisions dans votre code.", ar_desc: "أتقن البيانات الشرطية لاتخاذ قرارات في الأكواد الخاصة بك." },
    { en: "Loops: For and While", fr: "Boucles: For et While", ar: "الحلقات: For و While", en_desc: "Learn how to repeat code blocks efficiently using loops.", fr_desc: "Apprenez comment répéter les blocs de code efficacement en utilisant des boucles.", ar_desc: "تعلم كيفية تكرار كتل الأكواد بكفاءة باستخدام الحلقات." },
    { en: "Functions and Parameters", fr: "Fonctions et Paramètres", ar: "الدوال والمعاملات", en_desc: "Create reusable code blocks with functions and understand parameters.", fr_desc: "Créez des blocs de code réutilisables avec des fonctions et comprenez les paramètres.", ar_desc: "أنشئ كتل أكواد قابلة لإعادة الاستخدام مع الدوال وافهم المعاملات." },
    { en: "Working with Lists", fr: "Travailler avec des Listes", ar: "العمل مع القوائم", en_desc: "Master Python lists and perform operations on collections of data.", fr_desc: "Maîtrisez les listes Python et effectuez des opérations sur des collections de données.", ar_desc: "أتقن قوائم بايثون وقم بعمليات على مجموعات البيانات." },
    { en: "Dictionaries Explained", fr: "Les Dictionnaires Expliqués", ar: "القواميس موضحة", en_desc: "Understand key-value pairs and how to use dictionaries efficiently.", fr_desc: "Comprenez les paires clé-valeur et comment utiliser les dictionnaires efficacement.", ar_desc: "افهم أزواج المفتاح والقيمة وكيفية استخدام القواميس بكفاءة." },
    { en: "String Manipulation", fr: "Manipulation de Chaînes", ar: "معالجة النصوص", en_desc: "Learn powerful string methods and text processing techniques.", fr_desc: "Apprenez les méthodes de chaîne puissantes et les techniques de traitement du texte.", ar_desc: "تعلم طرق النصوص القوية وتقنيات معالجة النصوص." },
    { en: "File Handling", fr: "Gestion des Fichiers", ar: "التعامل مع الملفات", en_desc: "Read, write, and manage files using Python file operations.", fr_desc: "Lire, écrire et gérer les fichiers en utilisant les opérations de fichiers Python.", ar_desc: "اقرأ واكتب وإدارة الملفات باستخدام عمليات ملفات بايثون." },
    { en: "Error Handling with Try-Except", fr: "Gestion des Erreurs avec Try-Except", ar: "معالجة الأخطاء مع Try-Except", en_desc: "Handle errors gracefully and make your code more robust.", fr_desc: "Gérez les erreurs avec élégance et rendez votre code plus robuste.", ar_desc: "تعامل مع الأخطاء بأناقة واجعل أكوادك أكثر قوة." },
    { en: "Working with Modules", fr: "Travailler avec des Modules", ar: "العمل مع الوحدات", en_desc: "Import and use external modules to extend Python's functionality.", fr_desc: "Importez et utilisez des modules externes pour étendre les fonctionnalités de Python.", ar_desc: "استورد واستخدم الوحدات الخارجية لتوسيع وظائف بايثون." },
    { en: "Object-Oriented Programming", fr: "Programmation Orientée Objet", ar: "البرمجة موجهة للكائنات", en_desc: "Create classes and objects to write organized, scalable code.", fr_desc: "Créez des classes et des objets pour écrire du code organisé et évolutif.", ar_desc: "أنشئ فئات وكائنات لكتابة أكواد منظمة وقابلة للتوسع." }
];

const colors = ['color-1', 'color-2', 'color-3', 'color-4'];

function renderTutorials(items = tutorialContent) {
    const tutorialsDiv = document.getElementById('tutorials');
    if (!tutorialsDiv) return;

    tutorialsDiv.innerHTML = items.map((item, idx) => {
        const lang = currentLanguage;
        const title = item[lang];
        const desc = item[`${lang}_desc`];
        return `
            <div class="term-item">
                <div class="term-header">
                    <div class="term-number ${colors[idx % 4]}">${idx + 1}</div>
                    <h2 class="term-name">${title}</h2>
                </div>
                <p class="term-definition">${desc}</p>
            </div>
        `;
    }).join('');
}

renderTutorials();
