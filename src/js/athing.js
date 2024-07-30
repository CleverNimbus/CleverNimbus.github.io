var nouns = [
    "abdomen", "aceleración", "aire", "avión", " amatista", "animal", "tobillo", "manzana", "área", "brazo", "átomo",
    "granero", "playa", "barba", "bicicleta", "bicicleta", "pájaro", "vejiga", "sangre", "hueso", "libro", "niño", "cerebro", "pecho",
    "puente", "edificio", "autobús", "coche", "carruaje", "cartílago", "gato", "catedral", "célula", "cerámica", "silla", "mejilla",
    "chita", "pecho", "pollo", "barbilla", "ciudad", "clase", "frio", "compuesto", "computadora", "continente", "cobre", "algodón",
    "país", "vaca", "cangrejo", "diamante", "distancia", "doctor", "perro", "muñeca", "delfín", "dominio",
    "cúpula", "pato", "águila", "oreja", "tierra", "huevo", "codo", "elemento", "elefante", "esmeralda", "energía",
    "ojo", "ceja", "pestaña", "cara", "halcón", "familia", "granja", "dedo", "fuego", "pescado",
    "flor", "pie", "fuerza", "frente", "galaxia", "jardín", "gas", "vidrio", "cabra", "oro", "grava",
    "guitarra", "pelo", "mano", "corazón", "calor", "cadera", "caballo", "hospital", "casa",
    "humedad", "hiena", "iglú", "tinta", "intestino", "hierro", "chacal", "chaqueta", "jade", "jaguar", "cárcel",
    "mandíbula", "canguro", "riñón", "reino", "quiosco", "cometa", "rodilla", "canguro", "pierna", "lémur",
    "ligamento", "luz", "faro", "león", "labio", "líquido", "hígado", "llama", "langosta", "pulmón", "magnetismo",
    "mansion", "materia", "mineral", "molécula", "mangosta", "mono", "luna", "montaña", "ratón",
    "boca", "músculo", "bigote", "uña", "nación", "cuello", "nido", "nariz", "enfermera", "océano", "oficina",
    "ópalo", "huerta", "órgano", "organismo", "avestruz", "búho", "ostra", "palacio", "papel", "parque", "loro",
    "perla", "guijarro", "bolígrafo", "pingüino", "teléfono", "filo", "piano", "cerdo", "planeta", "planta", "plasma", "plástico",
    "polvo", "presión", "codorniz", "cantera", "cuarzo", "reina", "quokka", "conejo", "rancho", "rata", "rinoceronte",
    "costilla", "río", "carretera", "roca", "salamandra", "arena", "zafiro", "escuela", "mar", "cobertizo", "oveja", "hombro",
    "camarón", "seda", "plata", "piel", "cráneo", "serpiente", "sólido", "sonido", "espacio", "especie", "velocidad", "columna",
    "ardilla", "estrella", "acero", "estómago", "piedra", "estudiante", "sol", "sistema", "mesa", "maestro", "temperatura",
    "tendón", "tienda", "muslo", "garganta", "tigre", "tiempo", "tejido", "dedo del pie", "lengua", "diente", "tucán", "pueblo", "tren",
    "árbol", "pavo", "tortuga", "ukelele", "paraguas", "universo", "universidad", "velocidad", "villa", "aldea",
    "violín", "volumen", "buitre", "cintura", "agua", "peso", "ballena", "ancho", "molino de viento", "lobo", "madera", "lana",
    "muñeca", "xilófono", "yak", "yogur", "cebra", "cierre", "zoológico"
    // "abdomen", "acceleration", "air", "airplane", "amethyst", "animal", "ankle", "apple", "area", "arm", "atom",
    // "barn", "beach", "beard", "bicycle", "bike", "bird", "bladder", "blood", "bone", "book", "boy", "brain", "breast",
    // "bridge", "building", "bus", "car", "carriage", "cartilage", "cat", "cathedral", "cell", "ceramic", "chair", "cheek",
    // "cheetah", "chest", "chicken", "chin", "city", "class", "cold", "compound", "computer", "continent", "copper", "cotton",
    // "country", "cow", "crab", "diamond", "distance", "doctor", "dog", "doll", "dolphin", "domain",
    // "dome", "duck", "eagle", "ear", "earth", "egg", "elbow", "element", "elephant", "emerald", "energy",
    // "eye", "eyebrow", "eyelash", "face", "falcon", "family", "farm", "finger", "fire", "fish",
    // "flower", "foot", "force", "forehead", "galaxy", "garden", "gas", "glass", "goat", "gold", "gravel",
    // "guitar", "hair", "hand", "heart", "heat", "hip", "horse", "hospital", "house",
    // "humidity", "hyena", "igloo", "ink", "intestine", "iron", "jackal", "jacket", "jade", "jaguar", "jail",
    // "jaw", "kangaroo", "kidney", "kingdom", "kiosk", "kite", "knee", "koala", "leg", "lemur",
    // "ligament", "light", "lighthouse", "lion", "lip", "liquid", "liver", "llama", "lobster", "lung", "magnetism",
    // "mansion", "matter", "mineral", "molecule", "mongoose", "monkey", "moon", "mountain", "mouse",
    // "mouth", "muscle", "mustache", "nail", "nation", "neck", "nest", "nose", "nurse", "ocean", "office",
    // "opal", "orchard", "organ", "organism", "ostrich", "owl", "oyster", "palace", "paper", "park", "parrot",
    // "pearl", "pebble", "pen", "penguin", "phone", "phylum", "piano", "pig", "planet", "plant", "plasma", "plastic",
    // "powder", "pressure", "quail", "quarry", "quartz", "queen", "quokka", "rabbit", "ranch", "rat", "rhinoceros",
    // "rib", "river", "road", "rock", "salamander", "sand", "sapphire", "school", "sea", "shed", "sheep", "shoulder",
    // "shrimp", "silk", "silver", "skin", "skull", "snake", "solid", "sound", "space", "species", "speed", "spine",
    // "squirrel", "star", "steel", "stomach", "stone", "student", "sun", "system", "table", "teacher", "temperature",
    // "tendon", "tent", "thigh", "throat", "tiger", "time", "tissue", "toe", "tongue", "tooth", "toucan", "town", "train",
    // "tree", "turkey", "turtle", "ukelele", "umbrella", "universe", "university", "velocity", "villa", "village",
    // "violin", "volume", "vulture", "waist", "water", "weight", "whale", "width", "windmill", "wolf", "wood", "wool",
    // "wrist", "xylophone", "yak", "yogurt", "zebra", "zipper", "zoo"
];

var adjetives = [
    "increíble", "increíble", "hermosa", "brillante", "brillante", "tranquila", "encantadora", "clásica", "limpia", "clara",
    "colorida", "cómoda", "segura", "fresca", "creativa", "deliciosa", "detallada", "diferente", "difícil",
    "fácil", "elegante", "entusiasta", "excelente", "emocionante", "exótica", "extrema", "familiar", "lujosa", "fantástica",
    "rápida", "fresca", "amigable", "divertida", "divertida", "suave", "auténtica", "hermosa", "feliz", "armónica", "útil",
    "histórica", "honesta", "humorística", "imaginativa", "impresionante", "innovadora", "inspiradora", "interesante",
    "intrincada", "alegre", "amable", "perezosa", "ligera", "animada", "encantadora", "moderna", "natural", "agradable", "optimista",
    "original", "pacífica", "perfecta", "agradable", "educada", "popular", "precisa", "bonita", "profesional", "rápida",
    "silencioso", "raro", "relajado", "confiable", "notable", "respetuoso", "responsable", "romántico", "seguro", "satisfactorio",
    "sensible", "serio", "afilado", "simple", "sincero", "hábil", "elegante", "lento", "inteligente", "sonriente", "suave",
    "suave", "sofisticado", "especial", "espectacular", "rápido", "espléndido", "espontáneo", "deportivo", "impecable",
    "impactante", "estiloso", "exitoso", "superb", "solidario", "supremo", "dulce", "rápido", "talentoso", "delicioso",
    "agradecido", "pensativo", "emocionante", "ordenado", "oportuno", "cansado", "duro", "tradicional", "astuto", "confiado",
    "digno de confianza", "veraz", "único", "inusual", "optimista", "útil", "valioso", "vibrante", "victorioso", "vigilante",
    "vivaz", "cálido", "maravilloso", "digno", "joven", "juvenil", "apasionado"
    // "amazing", "awesome", "beautiful", "bright", "brilliant", "calm", "charming", "classic", "clean", "clear",
    // "colorful", "comfortable", "confident", "cool", "creative", "delicious", "detailed", "different", "difficult",
    // "easy", "elegant", "enthusiastic", "excellent", "exciting", "exotic", "extreme", "familiar", "fancy", "fantastic",
    // "fast", "fresh", "friendly", "fun", "funny", "gentle", "genuine", "gorgeous", "happy", "harmonious", "helpful",
    // "historic", "honest", "humorous", "imaginative", "impressive", "innovative", "inspiring", "interesting",
    // "intricate", "joyful", "kind", "lazy", "light", "lively", "lovely", "modern", "natural", "nice", "optimistic",
    // "original", "peaceful", "perfect", "pleasant", "polite", "popular", "precise", "pretty", "professional", "quick",
    // "quiet", "rare", "relaxed", "reliable", "remarkable", "respectful", "responsible", "romantic", "safe", "satisfying",
    // "sensitive", "serious", "sharp", "simple", "sincere", "skilled", "sleek", "slow", "smart", "smiling", "smooth",
    // "soft", "sophisticated", "special", "spectacular", "speedy", "splendid", "spontaneous", "sporty", "spotless",
    // "stunning", "stylish", "successful", "superb", "supportive", "supreme", "sweet", "swift", "talented", "tasty",
    // "thankful", "thoughtful", "thrilling", "tidy", "timely", "tired", "tough", "traditional", "tricky", "trusting",
    // "trustworthy", "truthful", "unique", "unusual", "upbeat", "useful", "valuable", "vibrant", "victorious", "vigilant",
    // "vivacious", "warm", "wonderful", "worthy", "young", "youthful", "zealous"
];

var verbs = [
    "aceptar", "acusar", "actuar", "admitir", "acordar", "analizar", "responder", "disculparse", "aplaudir", "nombrar", "discutir", "preguntar",
    "señalizar", "creer", "culpar", "abuchear", "boicotear", "cepillar", "construir", "llamar", "cancelar", "llevar", "categorizar", "animar",
    "elegir", "clasificar", "limpiar", "cerrar", "peinar", "comparar", "quejarse", "componer", "comprometer", "confesar",
    "construir", "contrastar", "cocinar", "coordinar", "copiar", "corregir", "crear", "criticar", "llorar", "cortar", "bailar",
    "decidir", "rechazar", "defender", "definir", "retrasar", "demostrar", "negar", "describir", "diseñar", "destruir", "desarrollar",
    "dirigir", "disentir", "disgustar", "desobedecer", "disputar", "hacer", "documentar", "dudar", "dibujar", "soñar", "vestir", "beber",
    "comer", "editar", "elegir", "mejorar", "ampliar", "evaluar", "excusar", "expandir", "explicar", "extender", "despedirse",
    "temer", "sentir", "luchar", "archivar", "filmrar", "arreglar", "seguir", "olvidar", "perdonar", "gesticuar", "dar", "adiós",
    "saludar", "odiar", "escuchar", "hola", "hey", "hola", "siseo", "sostener", "esperar", "abrazar", "imaginar", "mejorar", "interpretar",
    "presentar", "investigar", "saltar", "justificar", "besar", "saber", "reír", "liderar", "aprender", "levantar", "gustar", "escuchar",
    "cerrar", "amar", "hacer", "administrar", "marchar", "maximizar", "meditar", "encontrar", "minimizar", "mover", "necesitar", "negociar",
    "nombrar", "obedecer", "ofrecer", "abrir", "oponerse", "optimizar", "organizar", "pintar", "pegar", "realizar", "petición",
    "fotografiar", "elegir", "planificar", "jugar", "señalar", "pulir", "posponer", "alabar", "rezar", "simular", "imprimir",
    "priorizar", "revisar", "proponer", "protestar", "tirar", "empujar", "disputar", "preguntar", "leer", "reconstruir",
    "recomendar", "grabar", "reducir", "reformar", "rechazar", "negar", "recordar", "renovar", "reorganizar", "reparar",
    "informar", "reprogramar", "investigar", "resistir", "restaurar", "reestructurar", "revisar", "amotinarse", "correr", "decir", "programar",
    "gritar", "esculpir", "ver", "seleccionar", "sacudir", "afeitar", "gritar", "firmar", "cantar", "dormir", "oler", "sonreír",
    "fortalecer", "golpear", "sugerir", "supervisar", "tomar", "hablar", "saborear", "agradecer", "pensar", "tocar", "transcribir",
    "traducir", "recortar", "escribir", "entender", "desvestir", "desbloquear", "grabar", "votar", "esperar", "caminar", "querer", "lavar",
    "mirar", "mover", "debilitar", "dar la bienvenida", "susurrar", "ampliar", "desear", "preguntarse", "trabajar", "adorar", "escribir", "gritar"
    // "accept", "accuse", "act", "admit", "agree", "analyze", "answer", "apologize", "applaud", "appoint", "argue", "ask",
    // "beckon", "believe", "blame", "boo", "boycott", "brush", "build", "call", "cancel", "carry", "categorize", "cheer",
    // "choose", "classify", "clean", "close", "comb", "compare", "complain", "compose", "compromise", "confess",
    // "construct", "contrast", "cook", "coordinate", "copy", "correct", "create", "criticize", "cry", "cut", "dance",
    // "decide", "decline", "defend", "define", "delay", "demonstrate", "deny", "describe", "design", "destroy", "develop",
    // "direct", "disagree", "dislike", "disobey", "dispute", "do", "document", "doubt", "draw", "dream", "dress", "drink",
    // "eat", "edit", "elect", "enhance", "enlarge", "evaluate", "excuse", "expand", "explain", "extend", "farewell",
    // "fear", "feel", "fight", "file", "film", "fix", "follow", "forget", "forgive", "gesture", "give", "goodbye",
    // "greet", "hate", "hear", "hello", "hey", "hi", "hiss", "hold", "hope", "hug", "imagine", "improve", "interpret",
    // "introduce", "investigate", "jump", "justify", "kiss", "know", "laugh", "lead", "learn", "lift", "like", "listen",
    // "lock", "love", "make", "manage", "march", "maximize", "meditate", "meet", "minimize", "move", "need", "negotiate",
    // "nominate", "obey", "offer", "open", "oppose", "optimize", "organize", "paint", "paste", "perform", "petition",
    // "photograph", "pick", "plan", "play", "point", "polish", "postpone", "praise", "pray", "pretend", "print",
    // "prioritize", "proofread", "propose", "protest", "pull", "push", "quarrel", "question", "read", "rebuild",
    // "recommend", "record", "reduce", "reform", "refuse", "reject", "remember", "renew", "reorganize", "repair",
    // "report", "reschedule", "research", "resist", "restore", "restructure", "revise", "riot", "run", "say", "schedule",
    // "scream", "sculpt", "see", "select", "shake", "shave", "shout", "sign", "sing", "sleep", "smell", "smile",
    // "strengthen", "strike", "suggest", "supervise", "take", "talk", "taste", "thank", "think", "touch", "transcribe",
    // "translate", "trim", "type", "understand", "undress", "unlock", "video", "vote", "wait", "walk", "want", "wash",
    // "watch", "wave", "weaken", "welcome", "whisper", "widen", "wish", "wonder", "work", "worship", "write", "yell"
];

function doYourThing()
{
    var inputMasterValue = document.getElementsByName("inputMaster")[0].value;
    var inputValue = document.getElementsByName("inputName")[0].value;
    var seed = inputMasterValue + inputValue;

    var myrng = new Math.seedrandom(seed);
    
    var rndAdjetivePos = parseInt(myrng() * (adjetives.length + 1));
    var rndNoun1Pos = parseInt(myrng() * (nouns.length + 1));
    var rndNoun2Pos = parseInt(myrng() * (nouns.length + 1));
    var rndVerbPos = parseInt(myrng() * (verbs.length + 1));
    var rndNumber1 = parseInt(myrng() * 6);
    var rndNumber2 = parseInt(myrng() * 69);

    ensureRanges();

    var adjetive1 = adjetives[rndAdjetivePos].normalize("NFD").replace(/\p{Diacritic}/gu, "").replace("ñ", "ny");
    var noun1 = nouns[rndNoun1Pos].normalize("NFD").replace(/\p{Diacritic}/gu, "").replace("ñ", "ny");
    var noun2 = nouns[rndNoun2Pos].normalize("NFD").replace(/\p{Diacritic}/gu, "").replace("ñ", "ny");
    var verb1 = verbs[rndVerbPos].normalize("NFD").replace(/\p{Diacritic}/gu, "").replace("ñ", "ny");

    var rndAdjetiveChar = 0; //parseInt(myrng() * adjetive1.length);
    var rndNoun1Char = 0; //parseInt(myrng() * noun1.length);
    var rndNoun2Char = 0; //parseInt(myrng() * noun2.length);
    var rndVerbChar = 0; //parseInt(myrng() * verb1.length);

    document.getElementsByName("result")[0].value =
        (
            rndNumber1 +
            pluralize(changeCase(noun1, rndNoun1Char), rndNumber1) + //"%" + 
            changeCase(verb1, rndVerbChar) + //"$" + 
            rndNumber2 + //"+" + 
            pluralize(changeCase(noun2, rndNoun2Char), rndNumber2) + //"$" + 
            pluralize(changeCase(adjetive1, rndAdjetiveChar), rndNumber2)
        ).replace(" ", "");

    function ensureRanges() {
        if (rndAdjetivePos >= adjetives.length) rndAdjetivePos = adjetives.length - 1;
        if (rndAdjetivePos < 0) rndAdjetivePos = 0;

        if (rndNoun1Pos >= nouns.length) rndNoun1Pos = nouns.length - 1;
        if (rndNoun1Pos < 0) rndNoun1Pos = 0;

        if (rndNoun2Pos >= nouns.length) rndNoun2Pos = nouns.length - 1;
        if (rndNoun2Pos < 0) rndNoun2Pos = 0;

        if (rndVerbPos >= verbs.length) rndVerbPos = verbs.length - 1;
        if (rndVerbPos < 0) rndVerbPos = 0;
    }
}

function sortLowerAndJoinArray(theArray)
{
    var workArray = theArray.map(v => v.trim().toLowerCase()).sort();

    workArray = workArray.filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
    });

    return "\"" + workArray.join("\", \"") + "\"";
}

function toClipBoard()
{
    var copyText = document.getElementsByName("result")[0];

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
}

function changeCase(str, index) {
    return str.substring(0, index).toLowerCase() + str[index].toUpperCase() + str.substring(index + 1).toLowerCase();
}