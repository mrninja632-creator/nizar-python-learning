let currentLanguage = localStorage.getItem('niзarLanguage') || 'en';

const tutorialContent = [
    { en: "Introduction to Python", fr: "Introduction à Python", ar: "مقدمة عن بايثون", en_desc: "Learn the basics of Python programming, why it's popular, and what you can build with it.", fr_desc: "Apprenez les bases de la programmation Python, pourquoi c'est si populaire et ce que vous pouvez construire avec.", ar_desc: "تعلم أساسيات برمجة بايثون وسبب شهرتها وما يمكنك بناؤه بها." },
    { en: "Setting Up Your Environment", fr: "Configuration de Votre Environnement", ar: "ضبط بيئتك", en_desc: "Install Python, set up a code editor, and create your first Python project.", fr_desc: "Installez Python, configurez un éditeur de code et créez votre premier projet Python.", ar_desc: "ثبّت بايثون وأعدّ محرر أكواد وأنشئ مشروعك الأول." },
    { en: "Variables and Data Types", fr: "Variables et Types de Données", ar: "المتغيرات وأنواع البيانات", en_desc: "Understand how to create and use variables, and learn about Python's data types.", fr_desc: "Comprenez comment créer et utiliser des variables et apprenez les types de données de Python.", ar_desc: "افهم كيفية إنشاء واستخدام المتغيرات وتعلم أنواع بيانات بايثون." },
    { en: "Working with Strings", fr: "Travailler avec des Chaînes", ar: "العمل مع النصوص", en_desc: "Learn string operations, string formatting, and how to manipulate text data.", fr_desc: "Apprenez les opérations de chaîne, le formatage de chaîne et comment manipuler les données textuelles.", ar_desc: "تعلم عمليات النصوص وتنسيقها وكيفية التعامل مع البيانات النصية." },
    { en: "Conditional Statements (If/Else)", fr: "Déclarations Conditionnelles (If/Else)", ar: "الجمل الشرطية", en_desc: "Master if, elif, and else statements to make decisions in your code.", fr_desc: "Maîtrisez les instructions if, elif et else pour prendre des décisions dans votre code.", ar_desc: "أتقن جمل if و elif و else لاتخاذ قرارات في أكوادك." },
    { en: "Loops: For and While", fr: "Boucles: For et While", ar: "الحلقات: For و While", en_desc: "Learn how to repeat code blocks efficiently using for loops and while loops.", fr_desc: "Apprenez comment répéter les blocs de code efficacement en utilisant les boucles for et while.", ar_desc: "تعلم كيفية تكرار كتل الأكواد باستخدام حلقات for و while." },
    { en: "Lists and List Methods", fr: "Listes et Méthodes de Listes", ar: "القوائم وطرقها", en_desc: "Work with Python lists, learn list methods, and understand list comprehensions.", fr_desc: "Travaillez avec les listes Python, apprenez les méthodes de liste et comprenez les compréhensions de liste.", ar_desc: "اعمل مع قوائم بايثون وتعلم طرقها وافهم استيعاب القائمة." },
    { en: "Dictionaries and Key-Value Pairs", fr: "Dictionnaires et Paires Clé-Valeur", ar: "القواموس وأزواج المفتاح والقيمة", en_desc: "Understand dictionaries and how to store and retrieve data using key-value pairs.", fr_desc: "Comprenez les dictionnaires et comment stocker et récupérer des données en utilisant des paires clé-valeur.", ar_desc: "افهم القواموس وكيفية تخزين واسترجاع البيانات باستخدام أزواج المفتاح والقيمة." },
    { en: "Defining Functions", fr: "Définir des Fonctions", ar: "تعريف الدوال", en_desc: "Learn how to define functions, pass parameters, and return values.", fr_desc: "Apprenez à définir des fonctions, à transmettre des paramètres et à retourner des valeurs.", ar_desc: "تعلم كيفية تعريف الدوال ومرور المعاملات وإرجاع القيم." },
    { en: "Handling Errors with Try-Except", fr: "Gestion des Erreurs avec Try-Except", ar: "التعامل مع الأخطاء", en_desc: "Learn to handle errors gracefully using try-except blocks to prevent crashes.", fr_desc: "Apprenez à gérer les erreurs avec élégance en utilisant les blocs try-except pour éviter les plantages.", ar_desc: "تعلم التعامل مع الأخطاء باستخدام كتل try-except لمنع التعطل." },
    { en: "Working with Files", fr: "Travailler avec des Fichiers", ar: "العمل مع الملفات", en_desc: "Learn how to read from and write to files using Python's file operations.", fr_desc: "Apprenez à lire et écrire des fichiers en utilisant les opérations de fichiers de Python.", ar_desc: "تعلم كيفية القراءة من الملفات والكتابة إليها باستخدام عمليات الملفات." },
    { en: "Introduction to OOP", fr: "Introduction à la Programmation Orientée Objet", ar: "مقدمة البرمجة الكائنية", en_desc: "Learn about classes and objects in Python, the foundation of object-oriented programming.", fr_desc: "Apprenez les classes et les objets en Python, la base de la programmation orientée objet.", ar_desc: "تعلم عن الفئات والأشياء في بايثون، أساس البرمجة الكائنية." },
    { en: "Debugging Your Code", fr: "Déboguer Votre Code", ar: "تصحيح أكوادك", en_desc: "Learn debugging techniques and tools to find and fix bugs in your Python code.", fr_desc: "Apprenez les techniques et les outils de débogage pour trouver et corriger les bogues dans votre code Python.", ar_desc: "تعلم تقنيات وأدوات تصحيح الأخطاء لإيجاد وإصلاح الأخطاء في أكوادك." }
];

const colors = ['color-1', 'color-2', 'color-3', 'color-4'];
qq
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
