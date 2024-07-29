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

function doYourThing()
{
    var inputMasterValue = document.getElementsByName("inputMaster")[0].value;
    var inputValue = document.getElementsByName("inputName")[0].value;
    var seed = inputMasterValue + inputValue;
    var myrng = new Math.seedrandom(seed);
    var pos = parseInt(myrng() * adjetives.length);

    alert(pos);

    //Some change random, remove
    var pos = "cosa";
}