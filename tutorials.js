const tutorials = {
    en: [
        { title: "Getting Started with Python", icon: "📖", desc: "Learn how to install Python and write your first program." },
        { title: "Variables and Data Types", icon: "🎯", desc: "Understanding how to store and work with different data types." },
        { title: "Control Flow: If, Else, Elif", icon: "🔀", desc: "Make decisions in your code with conditional statements." },
        { title: "Loops: For and While", icon: "🔄", desc: "Repeat code execution with different types of loops." },
        { title: "Functions and Parameters", icon: "⚙️", desc: "Create reusable code blocks with functions." },
        { title: "Lists and Indexing", icon: "📝", desc: "Work with collections of data efficiently." },
        { title: "Dictionaries and Key-Value Pairs", icon: "🗂️", desc: "Store and access data using dictionaries." },
        { title: "String Operations", icon: "✍️", desc: "Manipulate and format text strings." },
        { title: "File Reading and Writing", icon: "📄", desc: "Read from and write to files." },
        { title: "Object-Oriented Programming", icon: "🏗️", desc: "Create classes and objects for structured code." },
        { title: "Error Handling with Try-Except", icon: "🛡️", desc: "Handle errors gracefully in your programs." },
        { title: "Working with Modules", icon: "📦", desc: "Import and use Python modules and libraries." },
        { title: "List Comprehensions", icon: "🎁", desc: "Create lists efficiently with concise syntax." },
        { title: "Lambda Functions", icon: "⚡", desc: "Create small anonymous functions." },
        { title: "Decorators and Higher-Order Functions", icon: "🎭", desc: "Enhance functions with decorators." },
        { title: "Generators and Iterators", icon: "🔁", desc: "Create memory-efficient sequences." },
        { title: "Working with APIs", icon: "🌐", desc: "Interact with web APIs using Python." },
        { title: "Database Operations", icon: "🗄️", desc: "Connect and manage databases with Python." },
        { title: "Web Development with Flask", icon: "🌍", desc: "Build web applications with Flask framework." },
        { title: "Data Analysis with Pandas", icon: "📊", desc: "Analyze and manipulate data with Pandas." },
    ],
    fr: [
        { title: "Commencer avec Python", icon: "📖", desc: "Apprenez à installer Python et à écrire votre premier programme." },
        { title: "Variables et Types de Données", icon: "🎯", desc: "Comprendre comment stocker et travailler avec différents types de données." },
        { title: "Flux de Contrôle: If, Else, Elif", icon: "🔀", desc: "Prenez des décisions dans votre code avec des instructions conditionnelles." },
        { title: "Boucles: For et While", icon: "🔄", desc: "Répétez l'exécution du code avec différents types de boucles." },
        { title: "Fonctions et Paramètres", icon: "⚙️", desc: "Créez des blocs de code réutilisables avec des fonctions." },
        { title: "Listes et Indexation", icon: "📝", desc: "Travaillez efficacement avec des collections de données." },
        { title: "Dictionnaires et Paires Clé-Valeur", icon: "🗂️", desc: "Stockez et accédez aux données à l'aide de dictionnaires." },
        { title: "Opérations sur les Chaînes", icon: "✍️", desc: "Manipulez et formatez les chaînes de texte." },
        { title: "Lecture et Écriture de Fichiers", icon: "📄", desc: "Lire et écrire dans des fichiers." },
        { title: "Programmation Orientée Objet", icon: "🏗️", desc: "Créez des classes et des objets pour un code structuré." },
        { title: "Gestion des Erreurs avec Try-Except", icon: "🛡️", desc: "Gérez les erreurs avec élégance dans vos programmes." },
        { title: "Travail avec les Modules", icon: "📦", desc: "Importez et utilisez les modules et bibliothèques Python." },
        { title: "Compréhensions de Liste", icon: "🎁", desc: "Créez des listes efficacement avec une syntaxe concise." },
        { title: "Fonctions Lambda", icon: "⚡", desc: "Créez de petites fonctions anonymes." },
        { title: "Décorateurs et Fonctions d'Ordre Supérieur", icon: "🎭", desc: "Améliorez les fonctions avec des décorateurs." },
        { title: "Générateurs et Itérateurs", icon: "🔁", desc: "Créez des séquences efficaces en mémoire." },
        { title: "Travailler avec les API", icon: "🌐", desc: "Interagissez avec les API Web à l'aide de Python." },
        { title: "Opérations de Base de Données", icon: "🗄️", desc: "Connectez et gérez des bases de données avec Python." },
        { title: "Développement Web avec Flask", icon: "🌍", desc: "Créez des applications Web avec le framework Flask." },
        { title: "Analyse de Données avec Pandas", icon: "📊", desc: "Analysez et manipulez les données avec Pandas." },
    ],
    ar: [
        { title: "البدء مع بايثون", icon: "📖", desc: "تعلم كيفية تثبيت بايثون وكتابة برنامجك الأول." },
        { title: "المتغيرات وأنواع البيانات", icon: "🎯", desc: "فهم كيفية تخزين والعمل مع أنواع البيانات المختلفة." },
        { title: "تدفق التحكم: If و Else و Elif", icon: "🔀", desc: "اتخذ قرارات في الكود الخاص بك باستخدام البيانات الشرطية." },
        { title: "الحلقات: For و While", icon: "🔄", desc: "كرر تنفيذ الكود مع أنواع مختلفة من الحلقات." },
        { title: "الدوال والمعاملات", icon: "⚙️", desc: "أنشئ كتل أكواد قابلة لإعادة الاستخدام باستخدام الدوال." },
        { title: "القوائم والفهرسة", icon: "📝", desc: "اعمل بكفاءة مع مجموعات البيانات." },
        { title: "القواموس وأزواج المفتاح والقيمة", icon: "🗂️", desc: "خزّن والوصول إلى البيانات باستخدام القواموس." },
        { title: "عمليات السلسلة النصية", icon: "✍️", desc: "التعامل مع وتنسيق سلاسل النصوص." },
        { title: "قراءة وكتابة الملفات", icon: "📄", desc: "اقرأ من وكتب إلى الملفات." },
        { title: "البرمجة الموجهة للكائنات", icon: "🏗️", desc: "أنشئ فئات وكائنات للحصول على كود منظم." },
        { title: "معالجة الأخطاء مع Try-Except", icon: "🛡️", desc: "تعامل مع الأخطاء بسلاسة في برامجك." },
        { title: "العمل مع الوحدات", icon: "📦", desc: "استيراد واستخدام وحدات ومكتبات بايثون." },
        { title: "استيعاب القوائم", icon: "🎁", desc: "أنشئ قوائم بكفاءة باستخدام بناء الجملة المختصر." },
        { title: "دوال Lambda", icon: "⚡", desc: "أنشئ دوال مجهولة صغيرة." },
        { title: "الديكوريتور والدوال من الدرجة العليا", icon: "🎭", desc: "عزّز الدوال باستخدام الديكوريتور." },
        { title: "المولدات والمكررات", icon: "🔁", desc: "أنشئ سلاسل فعالة في الذاكرة." },
        { title: "العمل مع واجهات برمجة التطبيقات", icon: "🌐", desc: "تفاعل مع واجهات برمجة تطبيقات الويب باستخدام بايثون." },
        { title: "عمليات قاعدة البيانات", icon: "🗄️", desc: "الاتصال وإدارة قواعد البيانات باستخدام بايثون." },
        { title: "تطوير الويب مع Flask", icon: "🌍", desc: "بناء تطبيقات الويب باستخدام إطار عمل Flask." },
        { title: "تحليل البيانات باستخدام Pandas", icon: "📊", desc: "تحليل ومعالجة البيانات باستخدام Pandas." },
    ]
};

const colors = ['color-1', 'color-2', 'color-3', 'color-4'];

function renderTutorials() {
    const tutorialsDiv = document.getElementById('tutorials');
    const tutList = tutorials[currentLanguage];
    tutorialsDiv.innerHTML = tutList.map((tut, idx) => `
        <div class="term-item">
            <div class="term-header">
                <div class="term-number ${colors[idx % 4]}">${tut.icon}</div>
                <h2 class="term-name">${tut.title}</h2>
            </div>
            <p class="term-definition">${tut.desc}</p>
        </div>
    `).join('');
}

renderTutorials();
z