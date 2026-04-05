let currentLanguage = localStorage.getItem('niзarLanguage') || 'en';
let currentZoom = parseInt(localStorage.getItem('niзarZoom')) || 100;

const pythonTerms = [
    { en: "Variable", fr: "Variable", ar: "متغير", en_def: "A named storage location that holds a value. Variables can store different data types like integers, strings, and lists.", fr_def: "Un conteneur nommé qui stocke une valeur.", ar_def: "موقع تخزين مسمى يحتفظ بقيمة." },
    { en: "Function", fr: "Fonction", ar: "دالة", en_def: "A reusable block of code that performs a specific task. Functions are defined with 'def' and can accept parameters.", fr_def: "Un bloc de code réutilisable qui effectue une tâche spécifique.", ar_def: "كتلة أكواد قابلة لإعادة الاستخدام تؤدي مهمة محددة." },
    { en: "Import", fr: "Importer", ar: "استيراد", en_def: "A statement used to include modules and libraries in your program. Example: 'import turtle' or 'from os import path'.", fr_def: "Une instruction pour inclure des modules dans votre programme.", ar_def: "جملة لتضمين الوحدات والمكتبات في البرنامج." },
    { en: "Turtle Module", fr: "Module Turtle", ar: "وحدة السلحفاة", en_def: "A graphics library in Python used to create drawings and animations by controlling a virtual 'turtle' on screen.", fr_def: "Une bibliothèque graphique pour créer des dessins et des animations.", ar_def: "مكتبة رسومات لإنشاء رسومات وحركات على الشاشة." },
    { en: "Print()", fr: "Imprimer()", ar: "طباعة()", en_def: "A built-in function that outputs text or values to the console. Used for debugging and displaying information.", fr_def: "Une fonction intégrée qui affiche du texte ou des valeurs à la console.", ar_def: "دالة مدمجة تعرض النصوص أو القيم على وحدة التحكم." },
    { en: "Loop", fr: "Boucle", ar: "حلقة", en_def: "A control structure that repeats a block of code multiple times until a condition is met (for loop, while loop).", fr_def: "Une structure qui répète un bloc de code plusieurs fois.", ar_def: "هيكل يكرر كتلة من الأكواد عدة مرات." },
    { en: "If Statement", fr: "Instruction If", ar: "بيان If", en_def: "A conditional statement that executes code only if a specific condition is true. Uses 'if', 'elif', 'else'.", fr_def: "Une instruction qui exécute du code si une condition est vraie.", ar_def: "بيان شرطي ينفذ الأكواد إذا كان الشرط صحيحاً." },
    { en: "List", fr: "Liste", ar: "قائمة", en_def: "An ordered collection of items enclosed in square brackets. Lists are mutable and can contain any data type.", fr_def: "Une collection d'éléments ordonnés entre crochets.", ar_def: "مجموعة مرتبة من العناصر بين قوسين مربعين." },
    { en: "Dictionary", fr: "Dictionnaire", ar: "قاموس", en_def: "An unordered collection of key-value pairs enclosed in curly braces. Dictionaries provide fast lookups by key.", fr_def: "Une collection de paires clé-valeur entre accolades.", ar_def: "مجموعة غير مرتبة من أزواج المفتاح والقيمة." },
    { en: "String", fr: "Chaîne de Caractères", ar: "نص", en_def: "A sequence of characters enclosed in quotes. Strings are immutable and support various operations like concatenation.", fr_def: "Une séquence de caractères entre guillemets.", ar_def: "سلسلة من الأحرف بين علامات الاقتباس." },
    { en: "Integer", fr: "Entier", ar: "عدد صحيح", en_def: "A whole number data type that represents positive, negative, or zero values without decimal points.", fr_def: "Un type de nombre entier sans points décimaux.", ar_def: "نوع بيانات للأرقام الصحيحة الموجبة أو السالبة." },
    { en: "Float", fr: "Flottant", ar: "عدد عشري", en_def: "A number data type that includes decimal points. Used for mathematical calculations requiring precision.", fr_def: "Un type de nombre avec points décimaux.", ar_def: "نوع بيانات للأرقام العشرية مع نقاط عشرية." },
    { en: "Boolean", fr: "Booléen", ar: "منطقي", en_def: "A data type with two possible values: True or False. Used in conditional statements and logical operations.", fr_def: "Un type de données avec deux valeurs: True ou False.", ar_def: "نوع بيانات له قيمتان: صحيح أو خاطئ." },
    { en: "Tuple", fr: "Tuple", ar: "صف", en_def: "An immutable collection of items enclosed in parentheses. Tuples cannot be changed after creation but are faster than lists.", fr_def: "Une collection immuable d'éléments entre parenthèses.", ar_def: "مجموعة ثابتة من العناصر بين قوسين." },
    { en: "Set", fr: "Ensemble", ar: "مجموعة", en_def: "An unordered collection of unique items. Sets are useful for removing duplicates and performing mathematical operations.", fr_def: "Une collection d'éléments uniques non ordonnés.", ar_def: "مجموعة غير مرتبة من العناصر الفريدة." },
    { en: "Index", fr: "Index", ar: "فهرس", en_def: "A position number in a sequence starting from 0. Used to access specific elements in lists, strings, and tuples.", fr_def: "Un numéro de position dans une séquence commençant à 0.", ar_def: "رقم موضع في سلسلة تبدأ من 0." },
    { en: "Slice", fr: "Tranche", ar: "شريحة", en_def: "A way to extract a portion of a sequence using start:stop:step notation. Example: list[1:4] gets items 1, 2, 3.", fr_def: "Un moyen d'extraire une partie d'une séquence.", ar_def: "طريقة لاستخراج جزء من سلسلة باستخدام الترميز." },
    { en: "Method", fr: "Méthode", ar: "طريقة", en_def: "A function associated with an object. Methods perform actions on objects. Example: string.upper() converts to uppercase.", fr_def: "Une fonction associée à un objet.", ar_def: "دالة مرتبطة بكائن تؤدي إجراءات عليه." },
    { en: "Class", fr: "Classe", ar: "فئة", en_def: "A blueprint for creating objects. Classes define attributes and methods that objects created from them will have.", fr_def: "Un modèle pour créer des objets.", ar_def: "مخطط لإنشاء الكائنات." },
    { en: "Object", fr: "Objet", ar: "كائن", en_def: "An instance of a class containing data (attributes) and behavior (methods). Everything in Python is an object.", fr_def: "Une instance d'une classe avec des données et des comportements.", ar_def: "نسخة من فئة تحتوي على بيانات وسلوك." },
    { en: "Parameter", fr: "Paramètre", ar: "معامل", en_def: "A variable in a function definition that receives a value when the function is called. Also called an argument.", fr_def: "Une variable dans la définition d'une fonction.", ar_def: "متغير في تعريف الدالة يستقبل قيمة عند استدعاء الدالة." },
    { en: "Return", fr: "Retourner", ar: "العودة", en_def: "A statement that sends a value back from a function to the code that called it. Ends function execution.", fr_def: "Une instruction qui renvoie une valeur d'une fonction.", ar_def: "جملة ترسل قيمة من الدالة إلى الكود الذي استدعاها." },
    { en: "Exception", fr: "Exception", ar: "استثناء", en_def: "An error that occurs during program execution. Python handles exceptions with try-except blocks.", fr_def: "Une erreur qui se produit lors de l'exécution du programme.", ar_def: "خطأ يحدث أثناء تنفيذ البرنامج." },
    { en: "Try-Except", fr: "Try-Except", ar: "محاولة-استثناء", en_def: "A control structure that catches and handles exceptions gracefully without crashing the program.", fr_def: "Une structure qui capture et traite les exceptions.", ar_def: "هيكل يلتقط ويتعامل مع الاستثناءات بشكل صحيح." },
    { en: "Lambda", fr: "Lambda", ar: "لامدا", en_def: "A small anonymous function defined with 'lambda'. Used for short functions passed as arguments.", fr_def: "Une petite fonction anonyme définie avec 'lambda'.", ar_def: "دالة صغيرة بدون اسم معرفة باستخدام lambda." },
    { en: "List Comprehension", fr: "Compréhension de Liste", ar: "استيعاب القائمة", en_def: "A concise way to create lists using a single line. Example: [x*2 for x in range(5)].", fr_def: "Un moyen concis de créer des listes en une seule ligne.", ar_def: "طريقة موجزة لإنشاء قوائم في سطر واحد." },
    { en: "Generator", fr: "Générateur", ar: "مولد", en_def: "A function that yields values one at a time instead of returning all at once. Uses 'yield' keyword.", fr_def: "Une fonction qui produit des valeurs une à la fois.", ar_def: "دالة تنتج القيم واحدة تلو الأخرى باستخدام yield." },
    { en: "Decorator", fr: "Décorateur", ar: "ديكوريتور", en_def: "A function that modifies or enhances other functions or classes without changing their source code.", fr_def: "Une fonction qui modifie ou améliore d'autres fonctions.", ar_def: "دالة تعدل أو تحسن دوال أخرى بدون تغيير الكود الأصلي." },
    { en: "Module", fr: "Module", ar: "وحدة", en_def: "A Python file containing definitions and statements. Modules can be imported and reused.", fr_def: "Un fichier Python contenant des définitions et des instructions.", ar_def: "ملف بايثون يحتوي على تعريفات وجمل." },
    { en: "Package", fr: "Paquet", ar: "حزمة", en_def: "A directory containing Python modules and an __init__.py file. Organizes related modules.", fr_def: "Un répertoire contenant des modules Python.", ar_def: "مجلد يحتوي على وحدات بايثون." },
    { en: "Namespace", fr: "Espace de Noms", ar: "مساحة الأسماء", en_def: "A space where variable and function names are defined. Prevents name conflicts.", fr_def: "Un espace où les noms de variables et de fonctions sont définis.", ar_def: "مساحة حيث يتم تعريف أسماء المتغيرات والدوال." },
    { en: "Global", fr: "Global", ar: "عام", en_def: "A keyword declaring a variable as global scope, accessible throughout entire program.", fr_def: "Un mot-clé déclarant une variable comme portée globale.", ar_def: "كلمة رئيسية تصرح بأن المتغير ذو نطاق عام." },
    { en: "Local", fr: "Local", ar: "محلي", en_def: "Variables defined inside a function have local scope and can only be used within that function.", fr_def: "Les variables définies à l'intérieur d'une fonction ont une portée locale.", ar_def: "المتغيرات المعرفة داخل الدالة لها نطاق محلي." },
    { en: "None", fr: "Aucun", ar: "لا شيء", en_def: "A special Python value representing the absence of a value.", fr_def: "Une valeur Python spéciale représentant l'absence de valeur.", ar_def: "قيمة بايثون خاصة تمثل عدم وجود قيمة." },
    { en: "Pass", fr: "Passer", ar: "تجاوز", en_def: "A null operation that does nothing. Used as a placeholder in code.", fr_def: "Une opération nulle qui ne fait rien.", ar_def: "عملية فارغة لا تفعل شيئاً، تُستخدم كعنصر نائب." },
    { en: "Assert", fr: "Assertion", ar: "تأكيد", en_def: "A debugging tool that tests if a condition is true. Raises AssertionError if false.", fr_def: "Un outil de débogage qui teste si une condition est vraie.", ar_def: "أداة تصحيح تختبر ما إذا كان الشرط صحيحاً." },
    { en: "Yield", fr: "Rendement", ar: "إنتاج", en_def: "A keyword used in generators to produce a value and pause execution.", fr_def: "Un mot-clé utilisé dans les générateurs pour produire une valeur.", ar_def: "كلمة رئيسية تستخدم في المولدات لإنتاج قيمة." },
    { en: "Enumerate", fr: "Énumérer", ar: "تعداد", en_def: "A built-in function that returns both index and value when iterating.", fr_def: "Une fonction intégrée qui retourne l'index et la valeur.", ar_def: "دالة مدمجة تعيد الفهرس والقيمة أثناء التكرار." },
    { en: "Range", fr: "Plage", ar: "نطاق", en_def: "A built-in function that generates a sequence of numbers. Often used in for loops.", fr_def: "Une fonction intégrée qui génère une séquence de nombres.", ar_def: "دالة مدمجة تنتج سلسلة من الأرقام." },
    { en: "Zip", fr: "Zipper", ar: "ربط", en_def: "A built-in function that combines multiple iterables into tuples.", fr_def: "Une fonction intégrée qui combine plusieurs itérables.", ar_def: "دالة مدمجة تجمع بين عدة متسلسلات في صفوف." },
    { en: "Map", fr: "Carte", ar: "خريطة", en_def: "A built-in function that applies a function to each item in an iterable.", fr_def: "Une fonction intégrée qui applique une fonction à chaque élément.", ar_def: "دالة مدمجة تطبق دالة على كل عنصر في سلسلة." },
    { en: "Filter", fr: "Filtrer", ar: "تصفية", en_def: "A built-in function that filters items from an iterable based on a function.", fr_def: "Une fonction intégrée qui filtre les éléments d'une itérable.", ar_def: "دالة مدمجة تصفي العناصر من سلسلة بناءً على دالة." },
    { en: "Reduce", fr: "Réduire", ar: "تقليل", en_def: "A function from functools that applies a function cumulatively to items.", fr_def: "Une fonction qui applique une fonction cumulativement.", ar_def: "دالة من وحدة functools تطبق دالة بشكل تراكمي." },
    { en: "Sort", fr: "Trier", ar: "فرز", en_def: "A method that arranges list items in a specific order (ascending by default).", fr_def: "Une méthode qui arrange les éléments de la liste.", ar_def: "طريقة ترتب عناصر القائمة بترتيب معين." },
    { en: "Sorted", fr: "Triée", ar: "مرتبة", en_def: "A built-in function that returns a new sorted list without modifying original.", fr_def: "Une fonction intégrée qui retourne une nouvelle liste triée.", ar_def: "دالة مدمجة تعيد قائمة مرتبة جديدة." },
    { en: "Copy Module", fr: "Module Copy", ar: "وحدة النسخ", en_def: "A module providing shallow and deep copy methods for objects.", fr_def: "Un module qui fournit des méthodes de copie.", ar_def: "وحدة توفر طرق نسخ العناصر." },
    { en: "JSON", fr: "JSON", ar: "JSON", en_def: "JavaScript Object Notation - a lightweight data format. Python's json module handles it.", fr_def: "JavaScript Object Notation - un format de données léger.", ar_def: "تدوين كائن جافا سكريبت - تنسيق بيانات خفيف الوزن." },
    { en: "Regular Expression", fr: "Expression Régulière", ar: "تعبير عادي", en_def: "A pattern for matching text. Python's re module provides pattern matching.", fr_def: "Un modèle pour faire correspondre du texte.", ar_def: "نمط للبحث عن النصوص ومطابقتها." },
    { en: "File I/O", fr: "Fichier E/S", ar: "ملف الإدخال/الإخراج", en_def: "Input/Output operations for reading and writing files. Uses 'open()'.", fr_def: "Opérations d'entrée/sortie pour lire et écrire des fichiers.", ar_def: "عمليات الإدخال/الإخراج لقراءة وكتابة الملفات." },
    { en: "Context Manager", fr: "Gestionnaire de Contexte", ar: "مدير السياق", en_def: "A Python object that manages resources. Uses 'with' statement.", fr_def: "Un objet Python qui gère les ressources.", ar_def: "كائن بايثون يدير الموارد مثل الملفات." },
    { en: "Forward()", fr: "Avancer()", ar: "للأمام()", en_def: "Moves the turtle forward by specified distance in turtle graphics.", fr_def: "Déplace la tortue vers l'avant de la distance spécifiée.", ar_def: "يحرك السلحفاة للأمام بالمسافة المحددة." },
    { en: "Backward()", fr: "Reculer()", ar: "للخلف()", en_def: "Moves the turtle backward by specified distance in turtle graphics.", fr_def: "Déplace la tortue vers l'arrière de la distance spécifiée.", ar_def: "يحرك السلحفاة للخلف بالمسافة المحددة." },
    { en: "Right()", fr: "Droit()", ar: "يمين()", en_def: "Turns the turtle right by specified angle in degrees.", fr_def: "Fait tourner la tortue vers la droite d'un angle spécifié.", ar_def: "يدير السلحفاة لليمين بزاوية محددة." },
    { en: "Left()", fr: "Gauche()", ar: "يسار()", en_def: "Turns the turtle left by specified angle in degrees.", fr_def: "Fait tourner la tortue vers la gauche d'un angle spécifié.", ar_def: "يدير السلحفاة لليسار بزاوية محددة." },
    { en: "Penup()", fr: "Lever le stylo()", ar: "رفع القلم()", en_def: "Lifts pen off canvas so turtle moves without drawing.", fr_def: "Soulève le stylo de la toile pour que la tortue se déplace sans dessiner.", ar_def: "يرفع القلم عن اللوحة حتى تتحرك السلحفاة بدون رسم." },
    { en: "Pendown()", fr: "Abaisser le stylo()", ar: "إنزال القلم()", en_def: "Puts pen on canvas so turtle draws while moving.", fr_def: "Remet le stylo sur la toile pour que la tortue dessine en se déplaçant.", ar_def: "يعيد القلم على اللوحة حتى ترسم السلحفاة أثناء التحرك." },
    { en: "Pencolor()", fr: "Couleur du stylo()", ar: "لون القلم()", en_def: "Sets the color of the pen used for drawing.", fr_def: "Définit la couleur du stylo utilisé pour dessiner.", ar_def: "تحديد لون القلم المستخدم للرسم." },
    { en: "Circle()", fr: "Cercle()", ar: "دائرة()", en_def: "Draws a circle with specified radius at current position.", fr_def: "Dessine un cercle avec un rayon spécifié.", ar_def: "يرسم دائرة بنصف قطر محدد." },
    { en: "Dot()", fr: "Point()", ar: "نقطة()", en_def: "Draws a circular dot at the current position.", fr_def: "Dessine un point circulaire à la position actuelle de la tortue.", ar_def: "يرسم نقطة دائرية في موضع السلحفاة الحالي." },
    { en: "Hideturtle()", fr: "Cacher la tortue()", ar: "إخفاء السلحفاة()", en_def: "Hides the turtle cursor, showing only drawings.", fr_def: "Cache le curseur de la tortue pour que seuls les dessins soient visibles.", ar_def: "يخفي مؤشر السلحفاة حتى تكون الرسومات مرئية فقط." },
    { en: "Showturtle()", fr: "Afficher la tortue()", ar: "إظهار السلحفاة()", en_def: "Shows the turtle cursor after it has been hidden.", fr_def: "Affiche à nouveau le curseur de la tortue après l'avoir caché.", ar_def: "يعرض مؤشر السلحفاة مرة أخرى بعد إخفاؤه." },
    { en: "Reset()", fr: "Réinitialiser()", ar: "إعادة تعيين()", en_def: "Clears all drawings and resets turtle to initial state.", fr_def: "Efface tous les dessins de la toile et réinitialise la tortue.", ar_def: "يمسح جميع الرسومات من اللوحة ويعيد تعيين السلحفاة." },
    { en: "Goto()", fr: "Aller à()", ar: "اذهب إلى()", en_def: "Moves turtle to specified x, y coordinate.", fr_def: "Déplace la tortue à une coordonnée x, y spécifiée.", ar_def: "ينقل السلحفاة إلى إحداثيات x و y محددة." },
    { en: "Speed()", fr: "Vitesse()", ar: "السرعة()", en_def: "Sets animation speed of turtle movement and drawing.", fr_def: "Définit la vitesse d'animation du mouvement de la tortue.", ar_def: "تعيين سرعة حركة وحركة رسم السلحفاة." },
    { en: "Xcor()", fr: "Xcor()", ar: "إحداثي س()", en_def: "Returns current x-coordinate of turtle.", fr_def: "Retourne la coordonnée x actuelle de la tortue.", ar_def: "يعيد الإحداثي الحالي س للسلحفاة." },
    { en: "Ycor()", fr: "Ycor()", ar: "إحداثي ص()", en_def: "Returns current y-coordinate of turtle.", fr_def: "Retourne la coordonnée y actuelle de la tortue.", ar_def: "يعيد الإحداثي الحالي ص للسلحفاة." },
    { en: "Heading()", fr: "Direction()", ar: "الاتجاه()", en_def: "Returns current direction (angle) turtle is facing in degrees.", fr_def: "Retourne la direction actuelle (angle) de la tortue en degrés.", ar_def: "يعيد الاتجاه الحالي (الزاوية) التي تواجهها السلحفاة." },
    { en: "Distance()", fr: "Distance()", ar: "المسافة()", en_def: "Calculates distance between turtle and specified point.", fr_def: "Calcule la distance entre la position actuelle de la tortue et un point spécifié.", ar_def: "يحسب المسافة بين الموضع الحالي للسلحفاة ونقطة محددة." },
    { en: "Stamp()", fr: "Tampon()", ar: "ختم()", en_def: "Stamps a copy of turtle shape at current position.", fr_def: "Crée un tampon de la forme de la tortue à sa position actuelle.", ar_def: "ينقر بشكل من السلحفاة في موضعها الحالي." },
    { en: "Clearstamp()", fr: "Effacer le tampon()", ar: "مسح الختم()", en_def: "Removes most recent stamp created by stamp().", fr_def: "Supprime le tampon le plus récent créé par la fonction stamp().", ar_def: "يزيل آخر ختم تم إنشاؤه بواسطة دالة stamp()." },
    { en: "Clearstamps()", fr: "Effacer les tampons()", ar: "مسح الأختام()", en_def: "Removes all stamps created by stamp().", fr_def: "Supprime tous les tampons créés par la fonction stamp().", ar_def: "يزيل جميع الأختام التي تم إنشاؤها بواسطة دالة stamp()." },
    { en: "Undo()", fr: "Annuler()", ar: "التراجع()", en_def: "Undoes last action performed by turtle.", fr_def: "Annule la dernière action effectuée par la tortue.", ar_def: "يلغي آخر إجراء قام به السلحفاة." },
    { en: "Setheading()", fr: "Définir la direction()", ar: "تعيين الاتجاه()", en_def: "Sets turtle direction to specific angle in degrees.", fr_def: "Définit la direction de la tortue à un angle spécifique.", ar_def: "تعيين اتجاه السلحفاة لزاوية محددة بالدرجات." },
    { en: "Fillcolor()", fr: "Couleur de remplissage()", ar: "لون الملء()", en_def: "Sets color used when filling shapes drawn by turtle.", fr_def: "Définit la couleur utilisée pour remplir les formes dessinées.", ar_def: "تعيين اللون المستخدم لملء الأشكال المرسومة." },
    { en: "Begin_fill()", fr: "Commencer le remplissage()", ar: "بدء الملء()", en_def: "Marks beginning of shape that will be filled.", fr_def: "Marque le début d'une forme qui sera remplie.", ar_def: "يحدد بداية شكل سيتم ملؤه باللون الحالي." },
    { en: "End_fill()", fr: "Fin du remplissage()", ar: "نهاية الملء()", en_def: "Marks end of shape and fills it with current color.", fr_def: "Marque la fin d'une forme et la remplit.", ar_def: "يحدد نهاية الشكل ويملأه باللون الحالي." }
];

const colors = ['color-1', 'color-2', 'color-3', 'color-4'];

function renderGlossary(terms = pythonTerms) {
    const glossaryDiv = document.getElementById('glossary');
    const noResultsDiv = document.getElementById('noResults');

    if (!glossaryDiv) return;

    if (terms.length === 0) {
        glossaryDiv.innerHTML = '';
        if (noResultsDiv) noResultsDiv.style.display = 'block';
        const resultsCount = document.getElementById('resultsCount');
        if (resultsCount) resultsCount.innerHTML = '';
        return;
    }

    if (noResultsDiv) noResultsDiv.style.display = 'none';
    
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

    const resultsCount = document.getElementById('resultsCount');
    if (resultsCount) resultsCount.innerHTML = `📊 ${terms.length} of ${pythonTerms.length} terms`;
}

const searchInput = document.getElementById('searchInput');
if (searchInput) {
    searchInput.addEventListener('keyup', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const lang = currentLanguage;
        const filtered = pythonTerms.filter(term =>
            term[lang].toLowerCase().includes(searchTerm) ||
            term[`${lang}_def`].toLowerCase().includes(searchTerm)
        );
        renderGlossary(filtered);
    });
}

renderGlossary();
