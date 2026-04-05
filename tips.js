let currentLanguage = localStorage.getItem('niзarLanguage') || 'en';

const tipsContent = [
    { en: "Use List Comprehensions", fr: "Utilisez les Compréhensions de Liste", ar: "استخدم استيعاب القائمة", en_desc: "Make your code cleaner and faster with list comprehensions instead of loops.", fr_desc: "Rendez votre code plus propre et plus rapide avec les compréhensions de liste.", ar_desc: "اجعل أكوادك أنظف وأسرع باستخدام استيعاب القائمة." },
    { en: "Follow PEP 8 Style Guide", fr: "Suivez le Guide de Style PEP 8", ar: "اتبع دليل أسلوب PEP 8", en_desc: "Write readable code by following Python's official style guidelines.", fr_desc: "Écrivez du code lisible en suivant les directives de style officielles de Python.", ar_desc: "اكتب أكواداً قابلة للقراءة باتباع معايير نمط بايثون الرسمية." },
    { en: "Use Virtual Environments", fr: "Utilisez les Environnements Virtuels", ar: "استخدم البيئات الافتراضية", en_desc: "Isolate projects to avoid dependency conflicts and keep code organized.", fr_desc: "Isolez les projets pour éviter les conflits de dépendances et garder le code organisé.", ar_desc: "عزل المشاريع لتجنب تضارب التبعيات والحفاظ على تنظيم الأكواد." },
    { en: "Comment Your Code", fr: "Commentez Votre Code", ar: "علق على أكوادك", en_desc: "Write clear comments to explain complex logic and help future developers.", fr_desc: "Écrivez des commentaires clairs pour expliquer la logique complexe et aider les développeurs.", ar_desc: "اكتب تعليقات واضحة لشرح المنطق المعقد ومساعدة المطورين الآخرين." },
    { en: "Avoid Global Variables", fr: "Évitez les Variables Globales", ar: "تجنب المتغيرات العامة", en_desc: "Keep variables local when possible to prevent bugs and side effects.", fr_desc: "Gardez les variables locales autant que possible pour éviter les bogues et les effets secondaires.", ar_desc: "احفظ المتغيرات محلية قدر الإمكان لتجنب الأخطاء والآثار الجانبية." },
    { en: "Use Meaningful Names", fr: "Utilisez des Noms Significatifs", ar: "استخدم أسماء ذات مغزى", en_desc: "Choose variable and function names that clearly describe their purpose.", fr_desc: "Choisissez des noms de variables et de fonctions qui décrivent clairement leur objectif.", ar_desc: "اختر أسماء المتغيرات والدوال التي تصف بوضوح غرضها." },
    { en: "Test Your Code", fr: "Testez Votre Code", ar: "اختبر أكوادك", en_desc: "Write unit tests to catch bugs early and ensure code reliability.", fr_desc: "Écrivez des tests unitaires pour détecter les bogues tôt et assurer la fiabilité du code.", ar_desc: "اكتب اختبارات الوحدة لاكتشاف الأخطاء مبكراً وضمان موثوقية الأكواد." },
    { en: "Handle Exceptions Properly", fr: "Gérez les Exceptions Correctement", ar: "تعامل مع الاستثناءات بشكل صحيح", en_desc: "Use try-except blocks to handle errors gracefully without crashes.", fr_desc: "Utilisez les blocs try-except pour gérer les erreurs avec élégance sans plantage.", ar_desc: "استخدم كتل try-except للتعامل مع الأخطاء بدون تعطل البرنامج." },
    { en: "Use Built-in Functions", fr: "Utilisez les Fonctions Intégrées", ar: "استخدم الدوال المدمجة", en_desc: "Leverage Python's powerful built-in functions instead of writing from scratch.", fr_desc: "Tirez parti des puissantes fonctions intégrées de Python au lieu d'écrire à partir de zéro.", ar_desc: "استفد من دوال بايثون المدمجة القوية بدلاً من كتابتها من الصفر." },
    { en: "Optimize Performance", fr: "Optimisez les Performances", ar: "حسّن الأداء", en_desc: "Profile your code and use efficient algorithms to improve speed.", fr_desc: "Profilez votre code et utilisez des algorithmes efficaces pour améliorer la vitesse.", ar_desc: "قيّم أكوادك واستخدم خوارزميات فعالة لتحسين السرعة." }
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
