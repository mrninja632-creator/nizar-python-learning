let currentLanguage = 'en';
let currentZoom = 100;

const pythonTerms = [
    { en: "Variable", fr: "Variable", ar: "متغير", en_def: "A named storage location that holds a value. Variables can store different data types like integers, strings, and lists.", fr_def: "Un emplacement de stockage nommé qui contient une valeur.", ar_def: "موقع تخزين مسمى يحتوي على قيمة." },
    { en: "Function", fr: "Fonction", ar: "دالة", en_def: "A reusable block of code that performs a specific task. Functions are defined with 'def' and can accept parameters.", fr_def: "Un bloc de code réutilisable qui effectue une tâche spécifique.", ar_def: "كتلة من الأكواد القابلة لإعادة الاستخدام تؤدي مهمة معينة." },
    { en: "Import", fr: "Importer", ar: "استيراد", en_def: "A statement used to include modules and libraries in your program. Example: 'import turtle' or 'from os import path'.", fr_def: "Une instruction utilisée pour inclure des modules et des bibliothèques dans votre programme.", ar_def: "بيان يستخدم لتضمين الوحدات والمكتبات في برنامجك." },
    { en: "Turtle Module", fr: "Module Turtle", ar: "وحدة السلحفاة", en_def: "A graphics library in Python used to create drawings and animations by controlling a virtual 'turtle' on screen.", fr_def: "Une bibliothèque graphique pour créer des dessins et des animations.", ar_def: "مكتبة الرسومات لإنشاء الرسومات والرسوم المتحركة." },
    { en: "Print()", fr: "Imprimer()", ar: "طباعة()", en_def: "A built-in function that outputs text or values to the console. Used for debugging and displaying information.", fr_def: "Une fonction intégrée qui génère du texte sur la console.", ar_def: "دالة مدمجة تطبع النصوص على وحدة التحكم." },
    { en: "Loop", fr: "Boucle", ar: "حلقة", en_def: "A control structure that repeats a block of code multiple times until a condition is met (for loop, while loop).", fr_def: "Une structure de contrôle qui répète un bloc de code plusieurs fois.", ar_def: "هيكل تحكم يكرر كتلة من الأكواد عدة مرات." },
    { en: "If Statement", fr: "Instruction If", ar: "بيان If", en_def: "A conditional statement that executes code only if a specific condition is true. Uses 'if', 'elif', 'else'.", fr_def: "Une instruction conditionnelle qui exécute le code selon une condition.", ar_def: "بيان شرطي ينفذ الكود بناءً على شرط." },
    { en: "List", fr: "Liste", ar: "قائمة", en_def: "An ordered collection of items enclosed in square brackets. Lists are mutable and can contain any data type.", fr_def: "Une collection d'éléments ordonnée entre crochets.", ar_def: "مجموعة مرتبة من العناصر بين قوسين مربعة." },
    { en: "Dictionary", fr: "Dictionnaire", ar: "قاموس", en_def: "An unordered collection of key-value pairs enclosed in curly braces. Dictionaries provide fast lookups by key.", fr_def: "Une collection non ordonnée de paires clé-valeur entre accolades.", ar_def: "مجموعة غير مرتبة من أزواج المفتاح ��القيمة بين أقواس." },
    { en: "String", fr: "Chaîne de Caractères", ar: "نص", en_def: "A sequence of characters enclosed in quotes. Strings are immutable and support various operations like concatenation.", fr_def: "Une séquence de caractères entre guillemets.", ar_def: "سلسلة من الأحرف بين علامات الاقتباس." },
    { en: "Integer", fr: "Entier", ar: "عدد صحيح", en_def: "A whole number data type that represents positive, negative, or zero values without decimal points.", fr_def: "Un type de données entier sans points décimaux.", ar_def: "نوع بيانات عدد صحيح بدون نقاط عشرية." },
    { en: "Float", fr: "Flottant", ar: "عدد عشري", en_def: "A number data type that includes decimal points. Used for mathematical calculations requiring precision.", fr_def: "Un type de données numérique qui inclut des points décimaux.", ar_def: "نوع بيانات رقمي يتضمن نقاط عشرية." },
    { en: "Boolean", fr: "Booléen", ar: "منطقي", en_def: "A data type with two possible values: True or False. Used in conditional statements and logical operations.", fr_def: "Un type de données avec deux valeurs : Vrai ou Faux.", ar_def: "نوع بيانات بقيمتين: صحيح أو خطأ." },
    { en: "Tuple", fr: "Tuple", ar: "صف", en_def: "An immutable collection of items enclosed in parentheses. Tuples cannot be changed after creation but are faster than lists.", fr_def: "Une collection immuable d'éléments entre parenthèses.", ar_def: "مجموعة غير قابلة للتغيير من العناصر بين قوسين." },
    { en: "Set", fr: "Ensemble", ar: "مجموعة", en_def: "An unordered collection of unique items. Sets are useful for removing duplicates and performing mathematical operations.", fr_def: "Une collection non ordonnée d'éléments uniques.", ar_def: "مجموعة غير مرتبة من العناصر الفريدة." },
    { en: "Index", fr: "Index", ar: "فهرس", en_def: "A position number in a sequence starting from 0. Used to access specific elements in lists, strings, and tuples.", fr_def: "Un numéro de position dans une séquence commençant à 0.", ar_def: "رقم الموضع في التسلسل ابتداءً من 0." },
    { en: "Slice", fr: "Tranche", ar: "شريحة", en_def: "A way to extract a portion of a sequence using start:stop:step notation. Example: list[1:4] gets items 1, 2, 3.", fr_def: "Un moyen d'extraire une partie d'une séquence en utilisant une notation comme [début:fin].", ar_def: "طريقة لاستخراج جزء من سلسلة باستخدام رمز مثل [البداية:النهاية]." },
    { en: "Method", fr: "Méthode", ar: "طريقة", en_def: "A function associated with an object. Methods perform actions on objects. Example: string.upper() converts to uppercase.", fr_def: "Une fonction associée à un objet qui effectue des actions sur l'objet.", ar_def: "دالة مرتبطة بكائن تؤدي إجراءات على الكائن." },
    { en: "Class", fr: "Classe", ar: "فئة", en_def: "A blueprint for creating objects. Classes define attributes and methods that objects created from them will have.", fr_def: "Un modèle pour créer des objets avec des attributs et des méthodes spécifiques.", ar_def: "نموذج لإنشاء كائنات ذات خصائص وأساليب محددة." },
    { en: "Object", fr: "Objet", ar: "��ائن", en_def: "An instance of a class containing data (attributes) and behavior (methods). Everything in Python is an object.", fr_def: "Une instance d'une classe contenant des données et un comportement.", ar_def: "مثيل من فئة يحتوي على بيانات وسلوك." },
    { en: "Parameter", fr: "Paramètre", ar: "معامل", en_def: "A variable in a function definition that receives a value when the function is called. Also called an argument.", fr_def: "Une variable dans la définition d'une fonction qui reçoit une valeur lors de l'appel.", ar_def: "متغير في تعريف الدالة يستقبل قيمة عند الاستدعاء." },
    { en: "Return", fr: "Retourner", ar: "العودة", en_def: "A statement that sends a value back from a function to the code that called it. Ends function execution.", fr_def: "Une instruction qui renvoie une valeur d'une fonction.", ar_def: "بيان يرسل قيمة من دالة." },
    { en: "Exception", fr: "Exception", ar: "استثناء", en_def: "An error that occurs during program execution. Python handles exceptions with try-except blocks.", fr_def: "Une erreur qui se produit lors de l'exécution du programme.", ar_def: "خطأ يحدث أثناء تنفيذ البرنامج." },
    { en: "Try-Except", fr: "Try-Except", ar: "محاولة-استثناء", en_def: "A control structure that catches and handles exceptions gracefully without crashing the program.", fr_def: "Une structure de contrôle qui capture et gère les exceptions avec élégance.", ar_def: "هيكل تحكم يعالج الأخطاء بشكل فعال." },
    { en: "Lambda", fr: "Lambda", ar: "لامدا", en_def: "A small anonymous function defined with 'lambda'. Used for short functions passed as arguments.", fr_def: "Une petite fonction anonyme définie en une seule ligne.", ar_def: "دالة مجهولة صغيرة تُعرّف في سطر واحد." },
    { en: "List Comprehension", fr: "Compréhension de Liste", ar: "استيعاب القائمة", en_def: "A concise way to create lists using a single line. Example: [x*2 for x in range(5)] creates [0,2,4,6,8].", fr_def: "Un moyen concis de créer des listes en utilisant une seule ligne de code.", ar_def: "طريقة موجزة لإنشاء قوائم باستخدام سطر واحد من الكود." },
    { en: "Dictionary Comprehension", fr: "Compréhension de Dictionnaire", ar: "استيعاب القاموس", en_def: "A concise way to create dictionaries. Example: {x: x**2 for x in range(5)} creates a dictionary of squares.", fr_def: "Un moyen concis de créer des dictionnaires.", ar_def: "طريقة موجزة لإنشاء قواموس." },
    { en: "Generator", fr: "Générateur", ar: "مولد", en_def: "A function that yields values one at a time instead of returning all at once. Uses 'yield' keyword for efficiency.", fr_def: "Une fonction qui génère des valeurs une à la fois pour l'efficacité de la mémoire.", ar_def: "دالة تنتج القيم واحدة تلو الأخرى لكفاءة الذاكرة." },
    { en: "Decorator", fr: "Décorateur", ar: "ديكوريتور", en_def: "A function that modifies or enhances other functions or classes without permanently changing their source code.", fr_def: "Une fonction qui modifie d'autres fonctions ou classes sans modifier le code source.", ar_def: "دالة تعدل الدوال الأخرى أو الفئات دون تغيير الكود المصدري." },
    { en: "Module", fr: "Module", ar: "وحدة", en_def: "A Python file containing definitions and statements. Modules can be imported and reused in other programs.", fr_def: "Un fichier Python contenant des définitions et des instructions.", ar_def: "ملف بايثون يحتوي على التعريفات والبيانات." },
    { en: "Package", fr: "Paquet", ar: "حزمة", en_def: "A directory containing Python modules and a special __init__.py file. Packages organize related modules together.", fr_def: "Un répertoire contenant des modules Python et un fichier __init__.py.", ar_def: "دليل يحتوي على وحدات بايثون وملف __init__.py." },
    { en: "Namespace", fr: "Espace de Noms", ar: "مساحة الأسماء", en_def: "A space where variable and function names are defined. Prevents name conflicts by organizing names into scopes.", fr_def: "Un espace où les noms de variables et de fonctions sont définis.", ar_def: "مساحة تُعرّف فيها أسماء المتغيرات والدوال." },
    { en: "Global", fr: "Global", ar: "عام", en_def: "A keyword declaring a variable as global scope, making it accessible throughout the entire program.", fr_def: "Un mot-clé déclarant une variable comme accessible dans tout le programme.", ar_def: "كلمة رئيسية تصرح بأن المتغير متاح في البرنامج بأكمله." },
    { en: "Local", fr: "Local", ar: "محلي", en_def: "Variables defined inside a function have local scope and can only be used within that function.", fr_def: "Les variables définies à l'intérieur d'une fonction avec une portée limitée à cette fonction.", ar_def: "المتغيرات المحددة داخل الدالة بنطاق محدود لتلك الدالة." },
    { en: "None", fr: "Aucun", ar: "لا شيء", en_def: "A special Python value representing the absence of a value. Functions without explicit return statements return None.", fr_def: "Une valeur Python spéciale représentant l'absence d'une valeur.", ar_def: "قيمة بايثون خاصة تمثل غياب قيمة." },
    { en: "Pass", fr: "Passer", ar: "تجاوز", en_def: "A null operation that does nothing. Used as a placeholder where code is required but you don't want to execute anything yet.", fr_def: "Une opération nulle qui ne fait rien, utilisée comme espace réservé.", ar_def: "عملية فارغة لا تفعل شيئاً، تُستخدم كعنصر نائب." },
    { en: "Assert", fr: "Assertion", ar: "تأكيد", en_def: "A debugging tool that tests if a condition is true. Raises AssertionError if the condition is false.", fr_def: "Un outil de débogage qui teste si une condition est vraie.", ar_def: "أداة تصحيح تختبر ما إذا كان الشرط صحيحاً." },
    { en: "Yield", fr: "Rendement", ar: "إنتاج", en_def: "A keyword used in generators to produce a value and pause execution, resuming later when the next value is requested.", fr_def: "Un mot-clé utilisé dans les générateurs pour produire une valeur et suspendre l'exécution.", ar_def: "كلمة رئيسية تُستخدم في المولدات لإنتاج قيمة وإيقاف التنفيذ." },
    { en: "Enumerate", fr: "Énumérer", ar: "تعداد", en_def: "A built-in function that returns both index and value when iterating. Useful for loops needing position information.", fr_def: "Une fonction intégrée qui retourne l'index et la valeur lors de l'itération.", ar_def: "دالة مدمجة تعيد الفهرس والقيمة عند التكرار." },
    { en: "Range", fr: "Plage", ar: "نطاق", en_def: "A built-in function that generates a sequence of numbers. Often used in for loops. Example: range(0, 10, 2).", fr_def: "Une fonction intégrée qui génère une séquence de nombres.", ar_def: "دالة مدمجة تنتج سلسلة من الأرقام." },
    { en: "Zip", fr: "Zipper", ar: "ربط", en_def: "A built-in function that combines multiple iterables into tuples. Useful for parallel iteration over multiple sequences.", fr_def: "Une fonction qui combine plusieurs itérables en tuples.", ar_def: "دالة تجمع عدة كائنات قابلة للتكرار في صفوف." },
    { en: "Map", fr: "Carte", ar: "خريطة", en_def: "A built-in function that applies a function to each item in an iterable and returns an iterator.", fr_def: "Une fonction intégrée qui applique une fonction à chaque élément d'un itérable.", ar_def: "دالة مدمجة تطبق دالة على كل عنصر في كائن قابل للتكرار." },
    { en: "Filter", fr: "Filtrer", ar: "تصفية", en_def: "A built-in function that filters items from an iterable based on a function that returns True or False.", fr_def: "Une fonction qui filtre les éléments en fonction d'une condition.", ar_def: "دالة تصفي العناصر بناءً على شرط." },
    { en: "Reduce", fr: "Réduire", ar: "تقليل", en_def: "A function from functools module that applies a function cumulatively to items in an iterable.", fr_def: "Une fonction qui applique une fonction cumulativement aux éléments.", ar_def: "دالة تطبق دالة بشكل تراكمي على العناصر." },
    { en: "Sort", fr: "Trier", ar: "فرز", en_def: "A method that arranges list items in a specific order (ascending by default). Modifies the list in place.", fr_def: "Une méthode qui arrange les éléments dans un ordre spécifique.", ar_def: "طريقة تترتب العناصر بترتيب محدد." },
    { en: "Sorted", fr: "Triée", ar: "مرتبة", en_def: "A built-in function that returns a new sorted list without modifying the original. Works with any iterable.", fr_def: "Une fonction intégrée qui retourne une nouvelle liste triée.", ar_def: "دالة مدمجة تعيد قائمة مرتبة جديدة." },
    { en: "Copy", fr: "Copier", ar: "نسخ", en_def: "A module providing shallow and deep copy methods. Shallow copy copies object references, deep copy copies everything.", fr_def: "Un module fournissant des méthodes de copie superficielle et profonde.", ar_def: "وحدة توفر طرق النسخ السطحي والعميق." },
    { en: "JSON", fr: "JSON", ar: "JSON", en_def: "JavaScript Object Notation - a lightweight data format. Python's json module reads and writes JSON data.", fr_def: "JavaScript Object Notation - un format d'échange de données léger.", ar_def: "تدوين كائن جافا سكريبت - تنسيق تبادل بيانات خفيف الوزن." },
    { en: "Regular Expression", fr: "Expression Régulière", ar: "تعبير عادي", en_def: "A pattern for matching text. Python's re module provides powerful pattern matching and text manipulation tools.", fr_def: "Un motif pour faire correspondre et manipuler des chaînes de texte.", ar_def: "نمط للتطابق والتعامل مع سلاسل النصوص." },
    { en: "File I/O", fr: "Fichier E/S", ar: "ملف الإدخال/الإخراج", en_def: "Input/Output operations for reading and writing files. Uses 'open()' to access files and 'read()', 'write()' methods.", fr_def: "Opérations d'entrée/sortie pour lire et écrire des fichiers.", ar_def: "عمليات الإدخال والإخراج لقراءة وكتابة الملفات." },
    { en: "Context Manager", fr: "Gestionnaire de Contexte", ar: "مدير السياق", en_def: "A Python object that manages resources like files. Uses 'with' statement to ensure proper cleanup automatically.", fr_def: "Un objet qui gère les ressources avec l'instruction 'with'.", ar_def: "كائن يدير الموارد باستخدام بيان 'with'." }
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
            <div class="term-item">
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

document.getElementById('searchInput')?.addEventListener('keyup', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const lang = currentLanguage;
    const filtered = pythonTerms.filter(term =>
        term[lang].toLowerCase().includes(searchTerm) ||
        term[`${lang}_def`].toLowerCase().includes(searchTerm)
    );
    renderGlossary(filtered);
});

function changeLanguage(lang) {
    currentLanguage = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    renderGlossary();
}

function updateZoom() {
    document.body.style.zoom = currentZoom + '%';
    document.getElementById('zoomLevel').textContent = currentZoom + '%';
}

document.getElementById('zoomIn')?.addEventListener('click', () => {
    if (currentZoom < 200) {
        currentZoom += 10;
        updateZoom();
    }
});

document.getElementById('zoomOut')?.addEventListener('click', () => {
    if (currentZoom > 50) {
        currentZoom -= 10;
        updateZoom();
    }
});

window.addEventListener('scroll', () => {
    const scrollBtn = document.getElementById('scrollToTop');
    if (scrollBtn) {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    }
});

document.getElementById('scrollToTop')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

renderGlossary();
