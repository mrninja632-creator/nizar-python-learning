let currentLanguage = localStorage.getItem('niзarLanguage') || 'en';

const tipsContent = [
    { en: "Use List Comprehensions", fr: "Utilisez les Compréhensions de Liste", ar: "استخدم استيعاب القائمة", en_desc: "Write cleaner and faster code with list comprehensions. Example: [x*2 for x in range(5)]", fr_desc: "Écrivez du code plus propre et plus rapide avec les compréhensions de liste.", ar_desc: "اكتب أكواداً أنظف وأسرع باستخدام استيعاب القائمة." },
    { en: "Leverage Built-in Functions", fr: "Tirez Parti des Fonctions Intégrées", ar: "استفد من الدوال المدمجة", en_desc: "Use built-in functions like map(), filter(), and reduce() to save lines of code.", fr_desc: "Utilisez des fonctions intégrées comme map(), filter() et reduce() pour économiser des lignes de code.", ar_desc: "استخدم الدوال المدمجة مثل map() و filter() و reduce() لتوفير أسطر من الأكواد." },
    { en: "Utilize Virtual Environments", fr: "Utilisez des Environnements Virtuels", ar: "استخدم البيئات الافتراضية", en_desc: "Keep project dependencies separate using virtual environments to avoid conflicts.", fr_desc: "Gardez les dépendances du projet séparées en utilisant des environnements virtuels pour éviter les conflits.", ar_desc: "حافظ على اعتماديات المشروع منفصلة باستخدام البيئات الافتراضية لتجنب التضارب." },
    { en: "Write Clear Docstrings", fr: "Écrivez des Docstrings Clairs", ar: "اكتب وثائق واضحة", en_desc: "Document your functions and classes with docstrings for better maintainability.", fr_desc: "Documentez vos fonctions et vos classes avec des docstrings pour une meilleure maintenance.", ar_desc: "وثّق دوالك وفئاتك بوثائق واضحة لصيانة أفضل." },
    { en: "Use Context Managers (with)", fr: "Utilisez les Gestionnaires de Contexte", ar: "استخدم مديري السياق", en_desc: "Use 'with' statements to ensure proper resource acquisition and release.", fr_desc: "Utilisez les instructions 'with' pour assurer une acquisition et une libération appropriées des ressources.", ar_desc: "استخدم عبارات 'with' لضمان اكتساب وتحرير الموارد بشكل صحيح." },
    { en: "Practice Exception Handling", fr: "Pratiquez la Gestion des Exceptions", ar: "مارس التعامل مع الاستثناءات", en_desc: "Use try-except blocks to handle errors gracefully without crashing your program.", fr_desc: "Utilisez les blocs try-except pour gérer les erreurs avec élégance sans plantage.", ar_desc: "استخدم كتل try-except للتعامل مع الأخطاء بدون تعطل البرنامج." },
    { en: "Follow PEP 8 Style Guide", fr: "Suivez le Guide de Style PEP 8", ar: "اتبع دليل أسلوب PEP 8", en_desc: "Write readable and consistent code by following Python's official style guidelines.", fr_desc: "Écrivez du code lisible et cohérent en suivant les directives de style officielles de Python.", ar_desc: "اكتب أكواداً قابلة للقراءة ومتسقة باتباع معايير نمط بايثون الرسمية." },
    { en: "Use Type Hints", fr: "Utilisez les Indications de Type", ar: "استخدم تلميحات النوع", en_desc: "Add type hints to your functions to improve code clarity and catch bugs early.", fr_desc: "Ajoutez des indications de type à vos fonctions pour améliorer la clarté du code et détecter les bogues tôt.", ar_desc: "أضف تلميحات النوع إلى دوالك لتحسين وضوح الأكواد واكتشاف الأخطاء مبكراً." },
    { en: "Test Your Code Regularly", fr: "Testez Votre Code Régulièrement", ar: "اختبر أكوادك بانتظام", en_desc: "Write unit tests and practice test-driven development to ensure code reliability.", fr_desc: "Écrivez des tests unitaires et pratiquez le développement dirigé par les tests pour assurer la fiabilité du code.", ar_desc: "اكتب اختبارات الوحدة ومارس التطوير القائم على الاختبار لضمان موثوقية الأكواد." },
    { en: "Optimize Performance", fr: "Optimisez les Performances", ar: "حسّن الأداء", en_desc: "Profile your code and use efficient algorithms to identify and fix bottlenecks.", fr_desc: "Profilez votre code et utilisez des algorithmes efficaces pour identifier et corriger les goulets d'étranglement.", ar_desc: "قيّم أكوادك واستخدم خوارزميات فعالة لتحديد وإصلاح نقاط الاختناق." }
];

const colors = ['color-1', 'color-2', 'color-3', 'color-4'];

function renderTips(items = tipsContent) {
    const tipsDiv = document.getElementById('tips');
    if (!tipsDiv) return;

    tipsDiv.innerHTML = items.map((item, idx) => {
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

renderTips();
