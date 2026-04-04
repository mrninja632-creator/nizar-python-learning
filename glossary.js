const pythonTerms = [
    { en: "Variable", fr: "Variable", ar: "متغير", en_def: "A named storage location that holds a value.", fr_def: "Un emplacement de stockage nommé qui contient une valeur.", ar_def: "موقع تخزين مسمى يحتوي على قيمة." },
    { en: "Function", fr: "Fonction", ar: "دالة", en_def: "A reusable block of code that performs a specific task.", fr_def: "Un bloc de code réutilisable qui effectue une tâche spécifique.", ar_def: "كتلة من الأكواد القابلة لإعادة الاستخدام تؤدي مهمة معينة." },
    { en: "Import", fr: "Importer", ar: "استيراد", en_def: "A statement used to include modules and libraries in your program.", fr_def: "Une instruction utilisée pour inclure des modules et des bibliothèques dans votre programme.", ar_def: "بيان يستخدم لتضمين الوحدات والمكتبات في برنامجك." },
    { en: "Turtle Module", fr: "Module Turtle", ar: "وحدة السلحفاة", en_def: "A graphics library for creating drawings and animations.", fr_def: "Une bibliothèque graphique pour créer des dessins et des animations.", ar_def: "مكتبة الرسومات لإنشاء الرسومات والرسوم المتحركة." },
    { en: "Print()", fr: "Imprimer()", ar: "طباعة()", en_def: "A built-in function that outputs text to the console.", fr_def: "Une fonction intégrée qui génère du texte sur la console.", ar_def: "دالة مدمجة تطبع النصوص على وحدة التحكم." },
    { en: "Loop", fr: "Boucle", ar: "حلقة", en_def: "A control structure that repeats a block of code multiple times.", fr_def: "Une structure de contrôle qui répète un bloc de code plusieurs fois.", ar_def: "هيكل تحكم يكرر كتلة من الأكواد عدة مرات." },
    { en: "If Statement", fr: "Instruction If", ar: "بيان If", en_def: "A conditional statement that executes code based on a condition.", fr_def: "Une instruction conditionnelle qui exécute le code selon une condition.", ar_def: "بيان شرطي ينفذ الكود بناءً على شرط." },
    { en: "List", fr: "Liste", ar: "قائمة", en_def: "An ordered collection of items enclosed in square brackets.", fr_def: "Une collection d'éléments ordonnée entre crochets.", ar_def: "مجموعة مرتبة من العناصر بين قوسين مربعة." },
    { en: "Dictionary", fr: "Dictionnaire", ar: "قاموس", en_def: "An unordered collection of key-value pairs enclosed in curly braces.", fr_def: "Une collection non ordonnée de paires clé-valeur entre accolades.", ar_def: "مجموعة غير مرتبة من أزواج المفتاح والقيمة بين أقواس." },
    { en: "String", fr: "Chaîne de Caractères", ar: "نص", en_def: "A sequence of characters enclosed in quotes.", fr_def: "Une séquence de caractères entre guillemets.", ar_def: "سلسلة من الأحرف بين علامات الاقتباس." },
    { en: "Integer", fr: "Entier", ar: "عدد صحيح", en_def: "A whole number data type without decimal points.", fr_def: "Un type de données entier sans points décimaux.", ar_def: "نوع بيانات عدد صحيح بدون نقاط عشرية." },
    { en: "Float", fr: "Flottant", ar: "عدد عشري", en_def: "A number data type that includes decimal points.", fr_def: "Un type de données numérique qui inclut des points décimaux.", ar_def: "نوع بيانات رقمي يتضمن نقاط عشرية." },
    { en: "Boolean", fr: "Booléen", ar: "منطقي", en_def: "A data type with two values: True or False.", fr_def: "Un type de données avec deux valeurs : Vrai ou Faux.", ar_def: "نوع بيانات بقيمتين: صحيح أو خطأ." },
    { en: "Tuple", fr: "Tuple", ar: "صف", en_def: "An immutable collection of items enclosed in parentheses.", fr_def: "Une collection immuable d'éléments entre parenthèses.", ar_def: "مجموعة غير قابلة للتغيير من العناصر بين قوسين." },
    { en: "Set", fr: "Ensemble", ar: "مجموعة", en_def: "An unordered collection of unique items.", fr_def: "Une collection non ordonnée d'éléments uniques.", ar_def: "مجموعة غير مرتبة من العناصر الفريدة." },
    { en: "Index", fr: "Index", ar: "فهرس", en_def: "A position number in a sequence starting from 0.", fr_def: "Un numéro de position dans une séquence commençant à 0.", ar_def: "رقم الموضع في التسلسل ابتداءً من 0." },
    { en: "Slice", fr: "Tranche", ar: "شريحة", en_def: "A way to extract a portion of a sequence using notation like [start:stop].", fr_def: "Un moyen d'extraire une partie d'une séquence en utilisant une notation comme [début:fin].", ar_def: "طريقة لاستخراج جزء من سلسلة باستخدام رمز مثل [الب��اية:النهاية]." },
    { en: "Method", fr: "Méthode", ar: "طريقة", en_def: "A function associated with an object that performs actions on the object.", fr_def: "Une fonction associée à un objet qui effectue des actions sur l'objet.", ar_def: "دالة مرتبطة بكائن تؤدي إجراءات على الكائن." },
    { en: "Class", fr: "Classe", ar: "فئة", en_def: "A blueprint for creating objects with specific attributes and methods.", fr_def: "Un modèle pour créer des objets avec des attributs et des méthodes spécifiques.", ar_def: "نموذج لإنشاء كائنات ذات خصائص وأساليب محددة." },
    { en: "Object", fr: "Objet", ar: "كائن", en_def: "An instance of a class containing data and behavior.", fr_def: "Une instance d'une classe contenant des données et un comportement.", ar_def: "مثيل من فئة يحتوي على بيانات وسلوك." },
    { en: "Parameter", fr: "Paramètre", ar: "معامل", en_def: "A variable in a function definition that receives a value when called.", fr_def: "Une variable dans la définition d'une fonction qui reçoit une valeur lors de l'appel.", ar_def: "متغير في تعريف الدالة يستقبل قيمة عند الاستدعاء." },
    { en: "Return", fr: "Retourner", ar: "العودة", en_def: "A statement that sends a value back from a function.", fr_def: "Une instruction qui renvoie une valeur d'une fonction.", ar_def: "بيان يرسل قيمة من دالة." },
    { en: "Exception", fr: "Exception", ar: "استثناء", en_def: "An error that occurs during program execution.", fr_def: "Une erreur qui se produit lors de l'exécution du programme.", ar_def: "خطأ يحدث أثناء تنفيذ البرنامج." },
    { en: "Try-Except", fr: "Try-Except", ar: "محاولة-استثناء", en_def: "A control structure that catches and handles exceptions gracefully.", fr_def: "Une structure de contrôle qui capture et gère les exceptions avec élégance.", ar_def: "هيكل تحكم يعالج الأخطاء بشكل فعال." },
    { en: "Lambda", fr: "Lambda", ar: "لامدا", en_def: "A small anonymous function defined with a single line.", fr_def: "Une petite fonction anonyme définie en une seule ligne.", ar_def: "دالة مجهولة صغيرة تُعرّف في سطر واحد." },
    { en: "List Comprehension", fr: "Compréhension de Liste", ar: "استيعاب القائمة", en_def: "A concise way to create lists using a single line of code.", fr_def: "Un moyen concis de créer des listes en utilisant une seule ligne de code.", ar_def: "طريقة موجزة لإنشاء قوائم باستخدام سطر واحد من الكود." },
    { en: "Generator", fr: "Générateur", ar: "مولد", en_def: "A function that yields values one at a time for memory efficiency.", fr_def: "Une fonction qui génère des valeurs une à la fois pour l'efficacité de la mémoire.", ar_def: "دالة تنتج القيم واحدة تلو الأخرى لكفاءة الذاكرة." },
    { en: "Decorator", fr: "Décorateur", ar: "ديكوريتور", en_def: "A function that modifies other functions or classes without changing source code.", fr_def: "Une fonction qui modifie d'autres fonctions ou classes sans modifier le code source.", ar_def: "دالة تعدل الدوال الأخرى أو الفئات دون تغيير الكود المصدري." },
    { en: "Module", fr: "Module", ar: "وحدة", en_def: "A Python file containing definitions and statements.", fr_def: "Un fichier Python contenant des définitions et des instructions.", ar_def: "ملف بايثون يحتوي على التعريفات والبيانات." },
    { en: "Package", fr: "Paquet", ar: "حزمة", en_def: "A directory containing Python modules and an __init__.py file.", fr_def: "Un répertoire contenant des modules Python et un fichier __init__.py.", ar_def: "دليل يحتوي على وحدات بايثون وملف __init__.py." },
    { en: "Namespace", fr: "Espace de Noms", ar: "مساحة الأسماء", en_def: "A space where variable and function names are defined.", fr_def: "Un espace où les noms de variables et de fonctions sont définis.", ar_def: "مساحة تُعرّف فيها أسماء المتغيرات والدوال." },
    { en: "Global", fr: "Global", ar: "عام", en_def: "A keyword declaring a variable as accessible throughout the entire program.", fr_def: "Un mot-clé déclarant une variable comme accessible dans tout le programme.", ar_def: "كلمة رئيسية تصرح بأن المتغير متاح في البرنامج بأكمله." },
    { en: "Local", fr: "Local", ar: "محلي", en_def: "Variables defined inside a function with scope limited to that function.", fr_def: "Les variables définies à l'intérieur d'une fonction avec une portée limitée à cette fonction.", ar_def: "المتغيرات المحددة داخل الدالة بنطاق محدود لتلك الدالة." },
    { en: "None", fr: "Aucun", ar: "لا شيء", en_def: "A special Python value representing the absence of a value.", fr_def: "Une valeur Python spéciale représentant l'absence d'une valeur.", ar_def: "قيمة بايثون خاصة تمثل غياب قيمة." },
    { en: "Pass", fr: "Passer", ar: "تجاوز", en_def: "A null operation that does nothing, used as a placeholder.", fr_def: "Une opération nulle qui ne fait rien, utilisée comme espace réservé.", ar_def: "عملية فارغة لا تفعل شيئاً، تُستخدم كعنصر نائب." },
    { en: "Assert", fr: "Assertion", ar: "تأكيد", en_def: "A debugging tool that tests if a condition is true.", fr_def: "Un outil de débogage qui teste si une condition est vraie.", ar_def: "أداة تصحيح تختبر ما إذا كان الشرط صحيحاً." },
    { en: "Yield", fr: "Rendement", ar: "إنتاج", en_def: "A keyword used in generators to produce a value and pause execution.", fr_def: "Un mot-clé utilisé dans les générateurs pour produire une valeur et suspendre l'exécution.", ar_def: "كلمة رئيسية تُستخدم في المولدات لإنتاج قيمة وإيقاف التنفيذ." },
    { en: "Enumerate", fr: "Énumérer", ar: "تعداد", en_def: "A built-in function that returns index and value when iterating.", fr_def: "Une fonction intégrée qui retourne l'index et la valeur lors de l'itération.", ar_def: "دالة مدمجة تعيد الفهرس والقيمة عند التكرار." },
    { en: "Range", fr: "Plage", ar: "نطاق", en_def: "A built-in function that generates a sequence of numbers.", fr_def: "Une fonction intégrée qui génère une séquence de nombres.", ar_def: "دالة مدمجة تنتج سلسلة من الأرقام." },
    { en: "Zip", fr: "Zipper", ar: "ربط", en_def: "A function that combines multiple iterables into tuples.", fr_def: "Une fonction qui combine plusieurs itérables en tuples.", ar_def: "دالة تجمع عدة كائنات قابلة للتكرار في صفوف." },
    { en: "Map", fr: "Carte", ar: "خريطة", en_def: "A built-in function that applies a function to each item in an iterable.", fr_def: "Une fonction intégrée qui applique une fonction à chaque élément d'un itérable.", ar_def: "دالة مدمجة تطبق دالة على كل عنصر في كائن قابل للتكرار." },
    { en: "Filter", fr: "Filtrer", ar: "تصفية", en_def: "A function that filters items based on a condition.", fr_def: "Une fonction qui filtre les éléments en fonction d'une condition.", ar_def: "دالة تصفي العناصر بناءً على شرط." },
    { en: "Reduce", fr: "Réduire", ar: "تقليل", en_def: "A function that applies a function cumulatively to items.", fr_def: "Une fonction qui applique une fonction cumulativement aux éléments.", ar_def: "دالة تطبق دالة بشكل تراكمي على العناصر." },
    { en: "Sort", fr: "Trier", ar: "فرز", en_def: "A method that arranges items in a specific order.", fr_def: "Une méthode qui arrange les éléments dans un ordre spécifique.", ar_def: "طريقة تترتب العناصر بترتيب محدد." },
    { en: "Sorted", fr: "Triée", ar: "مرتبة", en_def: "A built-in function that returns a new sorted list.", fr_def: "Une fonction intégrée qui retourne une nouvelle liste triée.", ar_def: "دالة مدمجة تعيد قائمة مرتبة جديدة." },
    { en: "Copy", fr: "Copier", ar: "نسخ", en_def: "A module providing shallow and deep copy methods.", fr_def: "Un module fournissant des méthodes de copie superficielle et profonde.", ar_def: "وحدة توفر طرق النسخ السطحي والعميق." },
    { en: "JSON", fr: "JSON", ar: "JSON", en_def: "JavaScript Object Notation - a lightweight data interchange format.", fr_def: "JavaScript Object Notation - un format d'échange de données léger.", ar_def: "تدوين كائن جافا سكريبت - تنسيق تبادل بيانات خفيف الوزن." },
    { en: "Regular Expression", fr: "Expression Régulière", ar: "تعبير عادي", en_def: "A pattern for matching and manipulating text strings.", fr_def: "Un motif pour faire correspondre et manipuler des chaînes de texte.", ar_def: "نمط للتطابق والتعامل مع سلاسل النصوص." },
    { en: "File I/O", fr: "Fichier E/S", ar: "ملف الإدخال/الإخراج", en_def: "Input/Output operations for reading and writing files.", fr_def: "Opérations d'entrée/sortie pour lire et écrire des fichiers.", ar_def: "عمليات الإدخال والإخراج لقراءة وكتابة الملفات." },
    { en: "Context Manager", fr: "Gestionnaire de Contexte", ar: "مدير السياق", en_def: "An object that manages resources with 'with' statement.", fr_def: "Un objet qui gère les ressources avec l'instruction 'with'.", ar_def: "كائن يدير الموارد باستخدام بيان 'with'." },
    { en: "Iteration", fr: "Itération", ar: "تكرار", en_def: "The process of repeating a sequence of instructions.", fr_def: "Le processus de répétition d'une séquence d'instructions.", ar_def: "عملية تكرار سلسلة من التعليمات." },
    { en: "Recursion", fr: "Récursion", ar: "العودية", en_def: "A technique where a function calls itself to solve a problem.", fr_def: "Une technique où une fonction s'appelle elle-même pour résoudre un problème.", ar_def: "تقنية حيث تستدعي الدالة نفسها لحل المشكلة." },
    { en: "Polymorphism", fr: "Polymorphisme", ar: "تعدد الأشكال", en_def: "The ability of objects to take multiple forms or methods to act differently.", fr_def: "La capacité des objets à prendre plusieurs formes ou des méthodes agissent différemment.", ar_def: "القدرة على أن تتخذ الكائنات أشكالاً متعددة أو تتصرف بطرق مختلفة." },
    { en: "Encapsulation", fr: "Encapsulation", ar: "التغليف", en_def: "Bundling data and methods into a single unit or object.", fr_def: "Regroupement de données et de méthodes dans une seule unité ou objet.", ar_def: "دمج البيانات والطرق في وحدة أو كائن واحد." },
    { en: "Inheritance", fr: "Héritage", ar: "الوراثة", en_def: "A mechanism where a class derives properties from another class.", fr_def: "Un mécanisme par lequel une classe dérive des propriétés d'une autre classe.", ar_def: "آلية ترث فيها الفئة خصائص من فئة أخرى." },
    { en: "Abstraction", fr: "Abstraction", ar: "التجريد", en_def: "Hiding complex implementation details and showing only essentials.", fr_def: "Masquer les détails d'implémentation complexes et montrer uniquement l'essentiel.", ar_def: "إخفاء تفاصيل التنفيذ المعقدة وإظهار الضروريات فقط." },
    { en: "API", fr: "API", ar: "واجهة برمجة التطبيقات", en_def: "Application Programming Interface - a set of rules for software interaction.", fr_def: "Interface de programmation d'application - un ensemble de règles pour l'interaction des logiciels.", ar_def: "واجهة برمجية - مجموعة من القواعد لتفاعل البرامج." },
    { en: "Database", fr: "Base de Données", ar: "قاعدة بيانات", en_def: "An organized collection of structured data.", fr_def: "Une collection organisée de données structurées.", ar_def: "مجموعة منظمة من البيانات المهيكلة." },
    { en: "SQL", fr: "SQL", ar: "لغة الاستعلام البنيوية", en_def: "Structured Query Language - used to manage databases.", fr_def: "Langage de requête structuré - utilisé pour gérer les bases de données.", ar_def: "لغة الاستعلام المهيكلة - تُستخدم لإدارة قواعد البيانات." },
];

const colors = ['color-1', 'color-2', 'color-3', 'color-4'];

function renderGlossary(terms = pythonTerms) {
    const glossaryDiv = document.getElementById('glossary');
    const noResultsDiv = document.getElementById('noResults');

    if (terms.length === 0) {
        glossaryDiv.innerHTML = '';
        noResultsDiv.style.display = 'block';
        document.getElementById('resultsCount').innerHTML = '';
        return;
    }

    noResultsDiv.style.display = 'none';
    glossaryDiv.innerHTML = terms.map((term, idx) => {
        const lang = currentLanguage;
        const termName = term[lang];
        const definition = term[`${lang}_def`];
        const actualIdx = pythonTerms.indexOf(term);
        return `
            <div class="term-item" onclick="viewTermDetail('${termName}', '${definition}')">
                <div class="term-header">
                    <div class="term-number ${colors[actualIdx % 4]}">${actualIdx + 1}</div>
                    <h2 class="term-name">${termName}</h2>
                </div>
                <p class="term-definition">${definition}</p>
            </div>
        `;
    }).join('');

    document.getElementById('resultsCount').innerHTML = `📊 ${terms.length} of ${pythonTerms.length} terms`;
}

document.getElementById('searchInput').addEventListener('keyup', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const lang = currentLanguage;
    const filtered = pythonTerms.filter(term =>
        term[lang].toLowerCase().includes(searchTerm) ||
        term[`${lang}_def`].toLowerCase().includes(searchTerm)
    );
    renderGlossary(filtered);
});

function viewTermDetail(termName, definition) {
    alert(`📚 ${termName}\n\n${definition}`);
}

renderGlossary();