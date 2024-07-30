// Initialize an array with 250 nouns
var nouns = [
    "Apple", "Boy", "Cat", "Dog", "Elephant", "Fish", "Goat", "Horse", "Ink", "Jackal", "Kite", "Lion", "Monkey",
    "Nest", "Ocean", "Parrot", "Queen", "Rat", "Snake", "Tiger", "Umbrella", "Vulture", "Wolf", "X-ray", "Yak", "Zebra",
    "Airplane", "Bicycle", "Car", "Doll", "Egg", "Flower", "Guitar", "House", "Igloo", "Jacket", "Kangaroo", "Llama",
    "Mouse", "Nation", "Owl", "Piano", "Quail", "Rabbit", "Squirrel", "Turtle", "Ukelele", "Violin", "Whale",
    "Xylophone", "Yogurt", "Zipper", "Amethyst", "Beryl", "Citrine", "Diamond", "Emerald", "Fluorite", "Garnet",
    "Hyacinth", "Ivory", "Jade", "Kyanite", "Lapis", "Malachite", "Nephrite", "Opal", "Pearl", "Quartz",
    "Rhodochrosite", "Sapphire", "Tanzanite", "Uvarovite", "Vesuvianite", "Willemite", "Xenotime", "Yellow", "Zircon",
    "Aardvark", "Badger", "Cheetah", "Dolphin", "Eagle", "Falcon", "Giraffe", "Hyena", "Ibex", "Jaguar", "Koala",
    "Lemur", "Mongoose", "Numbat", "Ostrich", "Penguin", "Quokka", "Rhinoceros", "Salamander", "Toucan", "Uakari",
    "Vulture", "Wallaby", "Xenopus", "Yapok", "Zebu", "Acre", "Barn", "Cathedral", "Dome", "Estate", "Farm", "Garden",
    "Hacienda", "Igloo", "Jail", "Kiosk", "Lighthouse", "Mansion", "Nunnery", "Orchard", "Palace", "Quarry", "Ranch",
    "Shed", "Tent", "Umbrella", "Villa", "Windmill", "Xanadu", "Yurt", "Zoo"
];

var adjetives = [
    "amazing", "awesome", "beautiful", "brilliant", "bright", "calm", "charming", "classic", "clean", "clear",
    "colorful", "comfortable", "confident", "cool", "creative", "delicious", "detailed", "different", "difficult",
    "easy", "elegant", 
    "enthusiastic", "excellent", "exciting", "exotic", "extreme", "familiar", "fancy", "fantastic", "fast", "fresh",
    "friendly", "fun", "funny", "gentle", "genuine", "gorgeous", "happy", "harmonious", "helpful", "historic", "honest",
    "humorous", "imaginative", "impressive", "innovative", "inspiring", "interesting", "intricate", "joyful", "kind",
    "lazy", "light", "lively", "lovely", "modern", "natural", "nice", "optimistic", "original", "peaceful", "perfect",
    "pleasant", "polite", "popular", "precise", "pretty", "professional", "quick", "quiet", "rare", "remarkable",
    "relaxed", "reliable", "respectful", "responsible", "romantic", "safe", "satisfying", "sensitive", "serious",
    "sharp", "simple", "sincere", "skilled", "sleek", "slow", "smart", "smiling", "smooth", "soft", "sophisticated",
    "special", "spectacular", "speedy", "splendid", "spontaneous", "sporty", "spotless", "stunning", "stylish",
    "successful", "superb", "supportive", "supreme", "sweet", "swift", "talented", "tasty", "thankful", "thoughtful",
    "thrilling", "tidy", "timely", "tired", "tough", "traditional", "tricky", "trusting", "trustworthy", "truthful",
    "unique", "unusual", "upbeat", "useful", "valuable", "vibrant", "victorious", "vigilant", "vivacious", "warm",
    "wonderful", "worthy", "young", "youthful", "zealous"
];

var verbs = [
    "run", "jump", "read", "write", "think", "learn", "play", "work", "eat", "drink", "sleep", "walk", "talk", "listen",
    "watch", "wait", "see", "hear", "feel", "touch", "taste", "smell", "remember", "forget", "know", "believe",
    "understand", "agree", "disagree", "like", "dislike", "love", "hate", "want", "need", "have", "give", "take",
    "make", "do", "say", "ask", "answer", "think", "wonder", "imagine", "dream", "wish", "hope", "fear", "cry", "laugh",
    "smile", "sing", "dance", "play", "act", "pretend", "create", "build", "destroy", "fix", "repair", "cook", "clean",
    "wash", "dress", "undress", "brush", "comb", "shave", "cut", "trim", "file", "polish", "paint", "draw", "write",
    "type", "print", "copy", "paste", "cut", "move", "lift", "carry", "hold", "push", "pull", "open", "close", "lock",
    "unlock", "pick", "choose", "select", "vote", "decide", "plan", "organize", "schedule", "meet", "greet",
    "introduce", "welcome", "farewell", "goodbye", "hello", "hi", "hey", "hug", "kiss", "shake", "wave", "point",
    "gesture", "beckon", "call", "whisper", "shout", "scream", "yell", "cheer", "applaud", "boo", "hiss", "argue",
    "fight", "quarrel", "dispute", "negotiate", "compromise", "agree", "accept", "refuse", "decline", "deny", "admit",
    "confess", "apologize", "forgive", "thank", "praise", "criticize", "blame", "accuse", "defend", "explain",
    "justify", "excuse", "complain", "protest", "demonstrate", "march", "petition", "sign", "vote", "elect", "appoint",
    "nominate", "recommend", "suggest", "propose", "offer", "accept", "reject", "decline", "postpone", "delay",
    "cancel", "reschedule", "renew", "restore", "rebuild", "reorganize", "restructure", "reform", "revise", "edit",
    "proofread", "correct", "improve", "enhance", "expand", "extend", "enlarge", "widen", "deepen", "strengthen",
    "weaken", "reduce", "minimize", "maximize", "optimize", "prioritize", "schedule", "coordinate", "organize",
    "manage", "supervise", "direct", "lead", "follow", "obey", "disobey", "resist", "oppose", "protest",
    "demonstrate", "riot", "strike", "boycott", "hunger", "fast", "pray", "meditate", "worship", "believe", "doubt",
    "question", "investigate", "research", "analyze", "evaluate", "compare", "contrast", "classify", "categorize",
    "define", "describe", "explain", "interpret", "translate", "transcribe", "record", "report", "document",
    "photograph", "film", "video", "record", "play", "perform", "act", "sing", "dance", "play", "compose", "write",
    "paint", "draw", "sculpt", "create", "design", "build", "construct", "develop", "improve", "enhance", "expand",
    "extend", "enlarge", "widen", "deepen", "strengthen", "weaken", "reduce", "minimize", "maximize", "optimize",
    "prioritize", "schedule", "coordinate", "organize", "manage", "supervise", "direct", "lead", "follow",
    "obey", "disobey", "resist", "oppose", "protest", "demonstrate", "riot", "strike", "boycott"
];

function doYourThing()
{
    nouns.sort();
    adjetives.sort();
    verbs.sort();

    var inputMasterValue = document.getElementsByName("inputMaster")[0].value;
    var inputValue = document.getElementsByName("inputName")[0].value;
    var seed = inputMasterValue + inputValue;
    var myrng = new Math.seedrandom(seed);
    var rndAdjetivePos = parseInt(myrng() * adjetives.length);
    var rndNoun1Pos = parseInt(myrng() * nouns.length);
    var rndNoun2Pos = parseInt(myrng() * nouns.length);
    var rndVerbPos = parseInt(myrng() * verbs.length);

    uniqueArray = nouns.filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
    })

    document.getElementsByName("result")[0].value = uniqueArray.join("\", \"");
}