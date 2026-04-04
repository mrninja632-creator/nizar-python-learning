const tips = {
    en: [
        { title: "Use List Comprehensions", desc: "Create lists more efficiently with list comprehensions instead of loops." },
        { title: "Virtual Environments", desc: "Always use virtual environments to manage project dependencies separately." },
        { title: "PEP 8 Style Guide", desc: "Follow Python's official style guide for clean and readable code." },
        { title: "Use F-strings", desc: "Use f-strings for easier and more readable string formatting." },
        { title: "Docstrings", desc: "Always write docstrings to document your functions and classes." },
        { title: "Type Hints", desc: "Use type hints to make your code more readable and catch errors early." },
        { title: "Context Managers", desc: "Use 'with' statements for proper resource management." },
        { title: "DRY Principle", desc: "Don't Repeat Yourself - write reusable functions instead of duplicate code." },
        { title: "Naming Conventions", desc: "Use clear, descriptive names for variables, functions, and classes." },
        { title: "Testing", desc: "Write unit tests to ensure your code works correctly." }
    ],
    fr: [
        { title: "Utilisez les Compréhensions de Liste", desc: "Créez des listes plus efficacement avec les compréhensions de liste au lieu de boucles." },
        { title: "Environnements Virtuels", desc: "Utilisez toujours des environnements virtuels pour gérer les dépendances du projet séparément." },
        { title: "Guide de Style PEP 8", desc: "Suivez le guide de style officiel de Python pour un code propre et lisible." },
        { title: "Utilisez les F-chaînes", desc: "Utilisez les f-chaînes pour un formatage de chaîne plus facile et plus lisible." },
        { title: "Docstrings", desc: "Écrivez toujours des docstrings pour documenter vos fonctions et classes." },
        { title: "Indices de Type", desc: "Utilisez les indices de type pour rendre votre code plus lisible et détecter les erreurs tôt." },
        { title: "Gestionnaires de Contexte", desc: "Utilisez les instructions 'with' pour une gestion appropriée des ressources." },
        { title: "Principe DRY", desc: "Ne vous Répétez pas - écrivez des fonctions réutilisables au lieu de code en double." },
        { title: "Conventions de Nommage", desc: "Utilisez des noms clairs et descriptifs pour les variables, fonctions et classes." },
        { title: "Test", desc: "Écrivez des tests unitaires pour vous assurer que votre code fonctionne correctement." }
    ],
    ar: [
        { title: "استخدم استيعاب القائمة", desc: "أنشئ القوائم بكفاءة أكبر باستخدام استيعاب القائمة بدلاً من الحلقات." },
        { title: "البيئات الافتراضية", desc: "استخدم دائماً البيئات الافتراضية لإدارة تبعيات المشروع بشكل منفصل." },
        { title: "دليل نمط PEP 8", desc: "اتبع دليل نمط Python الرسمي للحصول على كود نظيف وقابل للقراءة." },
        { title: "استخدم F-strings", desc: "استخدم f-strings لتنسيق نصوص أسهل وأكثر قابلية للقراءة." },
        { title: "Docstrings", desc: "اكتب دائماً docstrings لتوثيق الدوال والفئات الخاصة بك." },
        { title: "تلميحات النوع", desc: "استخدم تلميحات النوع لجعل الكود أكثر قابلية للقراءة واكتشاف الأخطاء مبكراً." },
        { title: "مديرو السياق", desc: "استخدم بيانات 'with' للإدارة الصحيحة للموارد." },
        { title: "مبدأ DRY", desc: "لا تكرر نفسك - اكتب دوال قابلة لإعادة الاستخدام بدلاً من الأكواد المكررة." },
        { title: "اتفاقيات التسمية", desc: "استخدم أسماء واضحة وموصوفة للمتغيرات والدوال والفئات." },
        { title: "الاختبار", desc: "اكتب اختبارات الوحدة للتأكد من أن الكود الخاص بك يعمل بشكل صحيح." }
    ]
};

const colors = ['color-1', 'color-2', 'color-3', 'color-4'];

function renderTips() {
    const tipsDiv = document.getElementById('tips');
    const tipsList = tips[currentLanguage];
    tipsDiv.innerHTML = tipsList.map((tip, idx) => `
        <div class="term-item">
            <div class="term-header">
                <div class="term-number ${colors[idx % 4]}">💡</div>
                <h2 class="term-name">${tip.title}</h2>
            </div>
            <p class="term-definition">${tip.desc}</p>
        </div>
    `).join('');
}

renderTips();
