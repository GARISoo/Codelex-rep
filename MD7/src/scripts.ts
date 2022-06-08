let animals = [
    "Aardvark",
    "Albatross",
    "Alligator",
    "Alpaca",
    "Ant",
    "Anteater",
    "Antelope",
    "Ape",
    "Armadillo",
    "Donkey",
    "Baboon",
    "Badger",
    "Barracuda",
    "Bat",
    "Bear",
    "Beaver",
    "Bee",
    "Bison",
    "Boar",
    "Buffalo",
    "Butterfly",
    "Camel",
    "Capybara",
    "Caribou",
    "Cassowary",
    "Cat",
    "Caterpillar",
    "Cattle",
    "Chamois",
    "Cheetah",
    "Chicken",
    "Chimpanzee",
    "Chinchilla",
    "Chough",
    "Clam",
    "Cobra",
    "Cockroach",
    "Cod",
    "Cormorant",
    "Coyote",
    "Crab",
    "Crane",
    "Crocodile",
    "Crow",
    "Curlew",
    "Deer",
    "Dinosaur",
    "Dog",
    "Dogfish",
    "Dolphin",
    "Dotterel",
    "Dove",
    "Dragonfly",
    "Duck",
    "Dugong",
    "Dunlin",
    "Eagle",
    "Echidna",
    "Eel",
    "Eland",
    "Elephant",
    "Elk",
    "Emu",
    "Falcon",
    "Ferret",
    "Finch",
    "Fish",
    "Flamingo",
    "Fly",
    "Fox",
    "Frog",
    "Gaur",
    "Gazelle",
    "Gerbil",
    "Giraffe",
    "Gnat",
    "Gnu",
    "Goat",
    "Goldfinch",
    "Goldfish",
    "Goose",
    "Gorilla",
    "Goshawk",
    "Grasshopper",
    "Grouse",
    "Guanaco",
    "Gull",
    "Hamster",
    "Hare",
    "Hawk",
    "Hedgehog",
    "Heron",
    "Herring",
    "Hippopotamus",
    "Hornet",
    "Horse",
    "Human",
    "Hummingbird",
    "Hyena",
    "Ibex",
    "Ibis",
    "Jackal",
    "Jaguar",
    "Jay",
    "Jellyfish",
    "Kangaroo",
    "Kingfisher",
    "Koala",
    "Kookabura",
    "Kouprey",
    "Kudu",
    "Lapwing",
    "Lark",
    "Lemur",
    "Leopard",
    "Lion",
    "Llama",
    "Lobster",
    "Locust",
    "Loris",
    "Louse",
    "Lyrebird",
    "Magpie",
    "Mallard",
    "Manatee",
    "Mandrill",
    "Mantis",
    "Marten",
    "Meerkat",
    "Mink",
    "Mole",
    "Mongoose",
    "Monkey",
    "Moose",
    "Mosquito",
    "Mouse",
    "Mule",
    "Narwhal",
    "Newt",
    "Nightingale",
    "Octopus",
    "Okapi",
    "Opossum",
    "Oryx",
    "Ostrich",
    "Otter",
    "Owl",
    "Oyster",
    "Panther",
    "Parrot",
    "Partridge",
    "Peafowl",
    "Pelican",
    "Penguin",
    "Pheasant",
    "Pig",
    "Pigeon",
    "Pony",
    "Porcupine",
    "Porpoise",
    "Quail",
    "Quelea",
    "Quetzal",
    "Rabbit",
    "Raccoon",
    "Rail",
    "Ram",
    "Rat",
    "Raven",
    "Red deer",
    "Red panda",
    "Reindeer",
    "Rhinoceros",
    "Rook",
    "Salamander",
    "Salmon",
    "Sand Dollar",
    "Sandpiper",
    "Sardine",
    "Scorpion",
    "Seahorse",
    "Seal",
    "Shark",
    "Sheep",
    "Shrew",
    "Skunk",
    "Snail",
    "Snake",
    "Sparrow",
    "Spider",
    "Spoonbill",
    "Squid",
    "Squirrel",
    "Starling",
    "Stingray",
    "Stinkbug",
    "Stork",
    "Swallow",
    "Swan",
    "Tapir",
    "Tarsier",
    "Termite",
    "Tiger",
    "Toad",
    "Trout",
    "Turkey",
    "Turtle",
    "Viper",
    "Vulture",
    "Wallaby",
    "Walrus",
    "Wasp",
    "Weasel",
    "Whale",
    "Wildcat",
    "Wolf",
    "Wolverine",
    "Wombat",
    "Woodcock",
    "Woodpecker",
    "Worm",
    "Wren",
    "Yak",
    "Zebra"
]

const countries = [
    {"code":"ab","name":"Abkhaz","nativeName":"аҧсуа"},
    {"code":"aa","name":"Afar","nativeName":"Afaraf"},
    {"code":"af","name":"Afrikaans","nativeName":"Afrikaans"},
    {"code":"ak","name":"Akan","nativeName":"Akan"},
    {"code":"sq","name":"Albanian","nativeName":"Shqip"},
    {"code":"am","name":"Amharic","nativeName":"አማርኛ"},
    {"code":"ar","name":"Arabic","nativeName":"العربية"},
    {"code":"an","name":"Aragonese","nativeName":"Aragonés"},
    {"code":"hy","name":"Armenian","nativeName":"Հայերեն"},
    {"code":"as","name":"Assamese","nativeName":"অসমীয়া"},
    {"code":"av","name":"Avaric","nativeName":"авар мацӀ, магӀарул мацӀ"},
    {"code":"ae","name":"Avestan","nativeName":"avesta"},
    {"code":"ay","name":"Aymara","nativeName":"aymar aru"},
    {"code":"az","name":"Azerbaijani","nativeName":"azərbaycan dili"},
    {"code":"bm","name":"Bambara","nativeName":"bamanankan"},
    {"code":"ba","name":"Bashkir","nativeName":"башҡорт теле"},
    {"code":"eu","name":"Basque","nativeName":"euskara, euskera"},
    {"code":"be","name":"Belarusian","nativeName":"Беларуская"},
    {"code":"bn","name":"Bengali","nativeName":"বাংলা"},
    {"code":"bh","name":"Bihari","nativeName":"भोजपुरी"},
    {"code":"bi","name":"Bislama","nativeName":"Bislama"},
    {"code":"bs","name":"Bosnian","nativeName":"bosanski jezik"},
    {"code":"br","name":"Breton","nativeName":"brezhoneg"},
    {"code":"bg","name":"Bulgarian","nativeName":"български език"},
    {"code":"my","name":"Burmese","nativeName":"ဗမာစာ"},
    {"code":"ca","name":"Catalan; Valencian","nativeName":"Català"},
    {"code":"ch","name":"Chamorro","nativeName":"Chamoru"},
    {"code":"ce","name":"Chechen","nativeName":"нохчийн мотт"},
    {"code":"ny","name":"Chichewa; Chewa; Nyanja","nativeName":"chiCheŵa, chinyanja"},
    {"code":"zh","name":"Chinese","nativeName":"中文 (Zhōngwén), 汉语, 漢語"},
    {"code":"cv","name":"Chuvash","nativeName":"чӑваш чӗлхи"},
    {"code":"kw","name":"Cornish","nativeName":"Kernewek"},
    {"code":"co","name":"Corsican","nativeName":"corsu, lingua corsa"},
    {"code":"cr","name":"Cree","nativeName":"ᓀᐦᐃᔭᐍᐏᐣ"},
    {"code":"hr","name":"Croatian","nativeName":"hrvatski"},
    {"code":"cs","name":"Czech","nativeName":"česky, čeština"},
    {"code":"da","name":"Danish","nativeName":"dansk"},
    {"code":"dv","name":"Divehi; Dhivehi; Maldivian;","nativeName":"ދިވެހި"},
    {"code":"nl","name":"Dutch","nativeName":"Nederlands, Vlaams"},
    {"code":"en","name":"English","nativeName":"English"},
    {"code":"eo","name":"Esperanto","nativeName":"Esperanto"},
    {"code":"et","name":"Estonian","nativeName":"eesti, eesti keel"},
    {"code":"ee","name":"Ewe","nativeName":"Eʋegbe"},
    {"code":"fo","name":"Faroese","nativeName":"føroyskt"},
    {"code":"fj","name":"Fijian","nativeName":"vosa Vakaviti"},
    {"code":"fi","name":"Finnish","nativeName":"suomi, suomen kieli"},
    {"code":"fr","name":"French","nativeName":"français, langue française"},
    {"code":"ff","name":"Fula; Fulah; Pulaar; Pular","nativeName":"Fulfulde, Pulaar, Pular"},
    {"code":"gl","name":"Galician","nativeName":"Galego"},
    {"code":"ka","name":"Georgian","nativeName":"ქართული"},
    {"code":"de","name":"German","nativeName":"Deutsch"},
    {"code":"el","name":"Greek, Modern","nativeName":"Ελληνικά"},
    {"code":"gn","name":"Guaraní","nativeName":"Avañeẽ"},
    {"code":"gu","name":"Gujarati","nativeName":"ગુજરાતી"},
    {"code":"ht","name":"Haitian; Haitian Creole","nativeName":"Kreyòl ayisyen"},
    {"code":"ha","name":"Hausa","nativeName":"Hausa, هَوُسَ"},
    {"code":"he","name":"Hebrew (modern)","nativeName":"עברית"},
    {"code":"hz","name":"Herero","nativeName":"Otjiherero"},
    {"code":"hi","name":"Hindi","nativeName":"हिन्दी, हिंदी"},
    {"code":"ho","name":"Hiri Motu","nativeName":"Hiri Motu"},
    {"code":"hu","name":"Hungarian","nativeName":"Magyar"},
    {"code":"ia","name":"Interlingua","nativeName":"Interlingua"},
    {"code":"id","name":"Indonesian","nativeName":"Bahasa Indonesia"},
    {"code":"ie","name":"Interlingue","nativeName":"Originally called Occidental; then Interlingue after WWII"},
    {"code":"ga","name":"Irish","nativeName":"Gaeilge"},
    {"code":"ig","name":"Igbo","nativeName":"Asụsụ Igbo"},
    {"code":"ik","name":"Inupiaq","nativeName":"Iñupiaq, Iñupiatun"},
    {"code":"io","name":"Ido","nativeName":"Ido"},
    {"code":"is","name":"Icelandic","nativeName":"Íslenska"},
    {"code":"it","name":"Italian","nativeName":"Italiano"},
    {"code":"iu","name":"Inuktitut","nativeName":"ᐃᓄᒃᑎᑐᑦ"},
    {"code":"ja","name":"Japanese","nativeName":"日本語 (にほんご／にっぽんご)"},
    {"code":"jv","name":"Javanese","nativeName":"basa Jawa"},
    {"code":"kl","name":"Kalaallisut, Greenlandic","nativeName":"kalaallisut, kalaallit oqaasii"},
    {"code":"kn","name":"Kannada","nativeName":"ಕನ್ನಡ"},
    {"code":"kr","name":"Kanuri","nativeName":"Kanuri"},
    {"code":"ks","name":"Kashmiri","nativeName":"कश्मीरी, كشميري‎"},
    {"code":"kk","name":"Kazakh","nativeName":"Қазақ тілі"},
    {"code":"km","name":"Khmer","nativeName":"ភាសាខ្មែរ"},
    {"code":"ki","name":"Kikuyu, Gikuyu","nativeName":"Gĩkũyũ"},
    {"code":"rw","name":"Kinyarwanda","nativeName":"Ikinyarwanda"},
    {"code":"ky","name":"Kirghiz, Kyrgyz","nativeName":"кыргыз тили"},
    {"code":"kv","name":"Komi","nativeName":"коми кыв"},
    {"code":"kg","name":"Kongo","nativeName":"KiKongo"},
    {"code":"ko","name":"Korean","nativeName":"한국어 (韓國語), 조선말 (朝鮮語)"},
    {"code":"ku","name":"Kurdish","nativeName":"Kurdî, كوردی‎"},
    {"code":"kj","name":"Kwanyama, Kuanyama","nativeName":"Kuanyama"},
    {"code":"la","name":"Latin","nativeName":"latine, lingua latina"},
    {"code":"lb","name":"Luxembourgish, Letzeburgesch","nativeName":"Lëtzebuergesch"},
    {"code":"lg","name":"Luganda","nativeName":"Luganda"},
    {"code":"li","name":"Limburgish, Limburgan, Limburger","nativeName":"Limburgs"},
    {"code":"ln","name":"Lingala","nativeName":"Lingála"},
    {"code":"lo","name":"Lao","nativeName":"ພາສາລາວ"},
    {"code":"lt","name":"Lithuanian","nativeName":"lietuvių kalba"},
    {"code":"lu","name":"Luba-Katanga","nativeName":""},
    {"code":"lv","name":"Latvian","nativeName":"latviešu valoda"},
    {"code":"gv","name":"Manx","nativeName":"Gaelg, Gailck"},
    {"code":"mk","name":"Macedonian","nativeName":"македонски јазик"},
    {"code":"mg","name":"Malagasy","nativeName":"Malagasy fiteny"},
    {"code":"ms","name":"Malay","nativeName":"bahasa Melayu, بهاس ملايو‎"},
    {"code":"ml","name":"Malayalam","nativeName":"മലയാളം"},
    {"code":"mt","name":"Maltese","nativeName":"Malti"},
    {"code":"mi","name":"Māori","nativeName":"te reo Māori"},
    {"code":"mr","name":"Marathi (Marāṭhī)","nativeName":"मराठी"},
    {"code":"mh","name":"Marshallese","nativeName":"Kajin M̧ajeļ"},
    {"code":"mn","name":"Mongolian","nativeName":"монгол"},
    {"code":"na","name":"Nauru","nativeName":"Ekakairũ Naoero"},
    {"code":"nv","name":"Navajo, Navaho","nativeName":"Diné bizaad, Dinékʼehǰí"},
    {"code":"nb","name":"Norwegian Bokmål","nativeName":"Norsk bokmål"},
    {"code":"nd","name":"North Ndebele","nativeName":"isiNdebele"},
    {"code":"ne","name":"Nepali","nativeName":"नेपाली"},
    {"code":"ng","name":"Ndonga","nativeName":"Owambo"},
    {"code":"nn","name":"Norwegian Nynorsk","nativeName":"Norsk nynorsk"},
    {"code":"no","name":"Norwegian","nativeName":"Norsk"},
    {"code":"ii","name":"Nuosu","nativeName":"ꆈꌠ꒿ Nuosuhxop"},
    {"code":"nr","name":"South Ndebele","nativeName":"isiNdebele"},
    {"code":"oc","name":"Occitan","nativeName":"Occitan"},
    {"code":"oj","name":"Ojibwe, Ojibwa","nativeName":"ᐊᓂᔑᓈᐯᒧᐎᓐ"},
    {"code":"cu","name":"Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic","nativeName":"ѩзыкъ словѣньскъ"},
    {"code":"om","name":"Oromo","nativeName":"Afaan Oromoo"},
    {"code":"or","name":"Oriya","nativeName":"ଓଡ଼ିଆ"},
    {"code":"os","name":"Ossetian, Ossetic","nativeName":"ирон æвзаг"},
    {"code":"pa","name":"Panjabi, Punjabi","nativeName":"ਪੰਜਾਬੀ, پنجابی‎"},
    {"code":"pi","name":"Pāli","nativeName":"पाऴि"},
    {"code":"fa","name":"Persian","nativeName":"فارسی"},
    {"code":"pl","name":"Polish","nativeName":"polski"},
    {"code":"ps","name":"Pashto, Pushto","nativeName":"پښتو"},
    {"code":"pt","name":"Portuguese","nativeName":"Português"},
    {"code":"qu","name":"Quechua","nativeName":"Runa Simi, Kichwa"},
    {"code":"rm","name":"Romansh","nativeName":"rumantsch grischun"},
    {"code":"rn","name":"Kirundi","nativeName":"kiRundi"},
    {"code":"ro","name":"Romanian, Moldavian, Moldovan","nativeName":"română"},
    {"code":"ru","name":"Russian","nativeName":"русский язык"},
    {"code":"sa","name":"Sanskrit (Saṁskṛta)","nativeName":"संस्कृतम्"},
    {"code":"sc","name":"Sardinian","nativeName":"sardu"},
    {"code":"sd","name":"Sindhi","nativeName":"सिन्धी, سنڌي، سندھی‎"},
    {"code":"se","name":"Northern Sami","nativeName":"Davvisámegiella"},
    {"code":"sm","name":"Samoan","nativeName":"gagana faa Samoa"},
    {"code":"sg","name":"Sango","nativeName":"yângâ tî sängö"},
    {"code":"sr","name":"Serbian","nativeName":"српски језик"},
    {"code":"gd","name":"Scottish Gaelic; Gaelic","nativeName":"Gàidhlig"},
    {"code":"sn","name":"Shona","nativeName":"chiShona"},
    {"code":"si","name":"Sinhala, Sinhalese","nativeName":"සිංහල"},
    {"code":"sk","name":"Slovak","nativeName":"slovenčina"},
    {"code":"sl","name":"Slovene","nativeName":"slovenščina"},
    {"code":"so","name":"Somali","nativeName":"Soomaaliga, af Soomaali"},
    {"code":"st","name":"Southern Sotho","nativeName":"Sesotho"},
    {"code":"es","name":"Spanish; Castilian","nativeName":"español, castellano"},
    {"code":"su","name":"Sundanese","nativeName":"Basa Sunda"},
    {"code":"sw","name":"Swahili","nativeName":"Kiswahili"},
    {"code":"ss","name":"Swati","nativeName":"SiSwati"},
    {"code":"sv","name":"Swedish","nativeName":"svenska"},
    {"code":"ta","name":"Tamil","nativeName":"தமிழ்"},
    {"code":"te","name":"Telugu","nativeName":"తెలుగు"},
    {"code":"tg","name":"Tajik","nativeName":"тоҷикӣ, toğikī, تاجیکی‎"},
    {"code":"th","name":"Thai","nativeName":"ไทย"},
    {"code":"ti","name":"Tigrinya","nativeName":"ትግርኛ"},
    {"code":"bo","name":"Tibetan Standard, Tibetan, Central","nativeName":"བོད་ཡིག"},
    {"code":"tk","name":"Turkmen","nativeName":"Türkmen, Түркмен"},
    {"code":"tl","name":"Tagalog","nativeName":"Wikang Tagalog, ᜏᜒᜃᜅ᜔ ᜆᜄᜎᜓᜄ᜔"},
    {"code":"tn","name":"Tswana","nativeName":"Setswana"},
    {"code":"to","name":"Tonga (Tonga Islands)","nativeName":"faka Tonga"},
    {"code":"tr","name":"Turkish","nativeName":"Türkçe"},
    {"code":"ts","name":"Tsonga","nativeName":"Xitsonga"},
    {"code":"tt","name":"Tatar","nativeName":"татарча, tatarça, تاتارچا‎"},
    {"code":"tw","name":"Twi","nativeName":"Twi"},
    {"code":"ty","name":"Tahitian","nativeName":"Reo Tahiti"},
    {"code":"ug","name":"Uighur, Uyghur","nativeName":"Uyƣurqə, ئۇيغۇرچە‎"},
    {"code":"uk","name":"Ukrainian","nativeName":"українська"},
    {"code":"ur","name":"Urdu","nativeName":"اردو"},
    {"code":"uz","name":"Uzbek","nativeName":"zbek, Ўзбек, أۇزبېك‎"},
    {"code":"ve","name":"Venda","nativeName":"Tshivenḓa"},
    {"code":"vi","name":"Vietnamese","nativeName":"Tiếng Việt"},
    {"code":"vo","name":"Volapük","nativeName":"Volapük"},
    {"code":"wa","name":"Walloon","nativeName":"Walon"},
    {"code":"cy","name":"Welsh","nativeName":"Cymraeg"},
    {"code":"wo","name":"Wolof","nativeName":"Wollof"},
    {"code":"fy","name":"Western Frisian","nativeName":"Frysk"},
    {"code":"xh","name":"Xhosa","nativeName":"isiXhosa"},
    {"code":"yi","name":"Yiddish","nativeName":"ייִדיש"},
    {"code":"yo","name":"Yoruba","nativeName":"Yorùbá"},
    {"code":"za","name":"Zhuang, Chuang","nativeName":"Saɯ cueŋƅ, Saw cuengh"}
]

// Task #-4
// car[1].name // Volvo

// let car = [
//     {name: 'Audi',
//     year: '1996'},

//     {name:'Volvo',
//     year: '2000'},

//     {sum: () =>  "3000000EUR"}
// ]

// console.log(car[1].name)


///////////////////////////////////////////////
// Task #-3
// car.sum() // return 3000000EUR

// let car1 = {
//     sum: () =>  "3000000EUR",
//     model: {
//         year: 2011,
//         color: 'red'
//     }
// }

// console.log(car1.sum());


//////////////////////////////////////////////
// Task #-2
// car.model.color // returns red

// console.log(car1.model.color);


/////////////////////////////////////////////
// Task #-1
// fruit[0][1]; // returns 'Apple'

// let fruit = [
//     ['Avocado', 'Apple', 'Apricots'],
//     ['Banana', 'Breadfruit', 'Blueberry']
// ]

// console.log(fruit[0][1]);


/////////////////////////////////////////////
// Task #0
// human.name('Jānis') // returns Jānis

// let human = {
//     name: (x:string) => x
// }

// console.log(human.name('Jānis'));


////////////////////////////////////////////
// Tasks #1
// math.sum()()(1,3).sum // return 13

// const math = {
//     sum: () => () => (x: number, y: number) => ({sum: Number(`${x}${y}`)})
// };
    
// console.log(math.sum()()(1,3).sum);


//////////////////////////////
// Task #2
// human().rights[2][1].amendment[2].paragraph() // 'Lorem Ipsum'

// let humans = () => ({
//     rights: [
//         [], 
//         [], 
//         [{}, {amendment: [{}, {}, {paragraph: () => "Lorem Ipsum"}]}]
//     ]
// });
    
// console.log(humans().rights[2][1].amendment[2].paragraph())


/////////////////////////////
// Task #3
// returns powered x with y and sum powered by Z
// math(x, y)()()()()()()()()(z) //

// let math1 = (x: number, y: number) => () => () => () => () => () => () => () => () => (z: number) =>  (x ** y) ** z;

// console.log(math1(5, 3)()()()()()()()()(3));


////////////////////////////
// Task #4
// Take animal array from
// https://gist.github.com/borlaym/585e2e09dd6abd9b0d0a
// Filter out Animals with letters "A" "Z" "U" "G" and capitalize it

// const filterA = animals.filter(animal => animal.startsWith('A'));
// const filterZ = animals.filter(animal => animal.startsWith('Z'));
// const filterU = animals.filter(animal => animal.startsWith('U'));
// const filterG = animals.filter(animal => animal.startsWith('G'));

// const yourAnimals = filterA.concat(filterZ, filterU, filterG);

// const capitalizedAnimals = yourAnimals.map(animal => animal.toUpperCase());

// console.log(capitalizedAnimals);

//////////////////////////////
// Task #5
// take array from https://stackoverflow.com/a/20623472/2927424
// filter out countries that have less than 6 characters
// modify array without nativeName key

// const copiedCountries = {...countries}
// const newContries = copiedCountries.filter(country => {
//     delete country.nativeName;
//     return country.name.length > 6;
// })

// console.log(newContries);


/////////////////////////////////////
//1.
//Write a function that takes two numbers (a and b) as argument
//Subtract b from a
//Return the result

// const subtraction = (a: number, b: number): number => a - b;

// console.log(subtraction(1, 2));
// console.log(subtraction(10, 5)); 
// console.log(subtraction(99, 1));


//2.
// Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result

// const numSum = (a: number, b: number): number => a + b;

// console.log(numSum(1, 2));
// console.log(numSum(1, 10));
// console.log(numSum(99, 1));


// 3.
// Write a function that takes a value as argument
// Return the type of the value

// const typeOf = (element: any) => typeof(element);

// console.log(typeOf(1));
// console.log(typeOf(false));
// console.log(typeOf({}));
// console.log(typeOf(null));
// console.log(typeOf("string"));
// console.log(typeOf(["array"]));


// 4.
// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type

// const isEqual = (a: any, b: any): boolean => a === b;

// console.log(isEqual(2, 3));
// console.log(isEqual(3, 3));
// console.log(isEqual(1, '1'));
// console.log(isEqual('10', '10'));


// 5.
// Write a function that takes a string (a) and a number (n) as arguments
// Return the nth character of 'a'

// const findChar = (a: string, n: number): string => a.charAt(n - 1);

// console.log(findChar('abcd', 1));
// console.log(findChar('zyxbwpl', 5));
// console.log(findChar('gfedcba', 3));


// 6.
// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result

// const threeCharRemover = (str: string): string => str.slice(3);

// console.log(threeCharRemover('abcdefg'));
// console.log(threeCharRemover('1234'));
// console.log(threeCharRemover('fgedcba'));


// 7.
// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result

// const lastthreeChars = (str: string): string => str.slice(str.length - 3);

// console.log(lastthreeChars('abcdefg'));
// console.log(lastthreeChars('1234'));
// console.log(lastthreeChars('fgedcba'));


// 8.
// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result

// const firstThreeChars = (str: string): string => str.substring(0, 3);

// console.log(firstThreeChars('abcdefg'));
// console.log(firstThreeChars('1234'));
// console.log(firstThreeChars('fgedcba'));


// 9.
// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result

// const halfString = (str: string): string => str.slice(0, (str.length / 2));

// console.log(halfString('abcdefgh'));
// console.log(halfString('1234'));
// console.log(halfString('gedcba'));

// 10.
// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result

// const removeLastThree = (str: string): string => str.slice(0, (str.length - 3));

// console.log(removeLastThree('abcdefg'));
// console.log(removeLastThree('1234'));
// console.log(removeLastThree('fgedcba'));


// 11.
// Write a function that takes two numbers (a and b) as argument
// Return b percent of a

// const percentage = (a: number, b: number): number => b / a * 100;

// console.log(percentage(100, 50));
// console.log(percentage(10, 1));
// console.log(percentage(500, 25));


// 12.
// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tip: mind the order

// const quickMaths = (a:number, b:number, c:number, d:number, e:number, f:number): number => ((a + b -c ) * d / e ) ** f;

// console.log(quickMaths(6,5,4,3,2,1));
// console.log(quickMaths(6,2,1,4,2,3));
// console.log(quickMaths(2,3,6,4,2,3));


// 13.
// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false

// const isEven = (num: number): boolean => num % 2 === 0;

// console.log(isEven(10));
// console.log(isEven(-4));
// console.log(isEven(5));
// console.log(isEven(-111));


// 14.
// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b

// const charAppearance = (char: string, sentence: string): number => sentence.split(char).length - 1;

// console.log(charAppearance('m', 'how many times does the character occur in this sentence?'));
// console.log(charAppearance('h', 'how many times does the character occur in this sentence?'));
// console.log(charAppearance('?', 'how many times does the character occur in this sentence?'));
// console.log(charAppearance('z', 'how many times does the character occur in this sentence?'));


// 15.
// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false

// const isInteger = (num: number): boolean => Number.isInteger(num);

// console.log(isInteger(4));
// console.log(isInteger(1.123));
// console.log(isInteger(1048));
// console.log(isInteger(10.48));


// 16.
// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value

// const divideOrMultiply = (a: number, b: number): number => (a < b) ? (a / b) : (a * b);

// console.log(divideOrMultiply(10, 100));
// console.log(divideOrMultiply(90, 45));
// console.log(divideOrMultiply(8, 20));
// console.log(divideOrMultiply(2, 0.5));


// 17.
// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

// const appendToStartOrEnd = (a: string, b: string): string => a.includes(b) ? (b + a) : (a + b);

// console.log(appendToStartOrEnd('cheese', 'cake'));
// console.log(appendToStartOrEnd('lips', 's'));
// console.log(appendToStartOrEnd('Java', 'script'));
// console.log(appendToStartOrEnd(' think, therefore I am', 'I'));


// 18.
// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number

// const roundNumber = (a: number): number => Number(a.toFixed(2));    //toFixed() returns string, number() makes it a number

// console.log(roundNumber(2.12397));
// console.log(roundNumber(3.136));
// console.log(roundNumber(1.12397));
// console.log(roundNumber(26.1379));


// 19.
// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tip: you might want to change the type of the number for the splitting

// const splitNumbers = (a: number) => a.toString().split('');         //split() works on strings and makes a new array

// console.log(splitNumbers(10));
// console.log(splitNumbers(931));
// console.log(splitNumbers(193278));


// 20.
// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc.

// const chaosEnder = (a: string, b: string): string => {
//     const newStr = a.concat(b.split("").reverse().join(""));                    //at start reverses string b, then joins with string a
//     return (newStr[0].toUpperCase() + newStr.slice(1)).replace("%", "");        //first letter of new string capitalized, and then removes "%"
// }

// console.log(chaosEnder('java', 'tpi%rcs'));
// console.log(chaosEnder('c%ountry', 'edis'));
// console.log(chaosEnder('down', 'nw%ot'));


// 21.
// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number

// const primeNumber = (a: number): number => {
//     for (let i = 2; i < a; i++) {
//         if (a % i === 0) {                                   //checks if input can be divided with any number between 1 to input, 
//             return primeNumber(a + 1);                      //if 'true', then a higher number registers as input to be tested,
//         }                                                  //if 'false', then it returns the original input
//     }
//     return a
// }

// console.log(primeNumber(38));
// console.log(primeNumber(7));
// console.log(primeNumber(115));
// console.log(primeNumber(2000));


// 22.
// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y

// const divisibleNumber = (x: number, y: number) => {
//     while (x % y !== 0) {
//         x++;
//     }                                                           //while doesnt divide with y, adds 1 to x till match has been found
//     return x;
// }

// console.log(divisibleNumber(1, 23));
// console.log(divisibleNumber(23, 23));
// console.log(divisibleNumber(7, 3));
// console.log(divisibleNumber(-5, 7));


// 23.
// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string

// const everyThird = (a: string, b: string): string => {
//     let newArr = a.split('');
//     for (let i = newArr.length - 3; i > 0; i -= 3) {
//       newArr.splice(i, 0, b);                                           //splice modifys exsisting array without creating new one
//     }                                                                   //at index 'i' inserts element 'b',
//     return newArr.join('');                                             //('0' - how many elements gets removed)
// }

// console.log(everyThird('1234567','.'));
// console.log(everyThird('abcde','$'));
// console.log(everyThird('zxyzxyzxyzxyzxyz','w'));


// 24.
// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

// const letterUpgrade = (str: string): string => {
//     let newStr = '';
//     for (let i = 0; i < str.length; i++) {
//         newStr += String.fromCharCode(str.charCodeAt(i)+1);
//     }
//     return newStr;
// }

// console.log(letterUpgrade('bnchmf'));
// console.log(letterUpgrade('bgddrd'));
// console.log(letterUpgrade('sdrshmf'));


//25.
// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'

// const findElement = (a:any[], n: number): number => a[n - 1];

// console.log(findElement([1,2,3,4,5], 3));
// console.log(findElement([10,9,8,7,6], 5));
// console.log(findElement([7,2,1,6,3], 1));


//26.
// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result

// const removeFirstThree = (arr: number[]) => {
//     arr.splice(0, 3)
//     return arr;
// }

// console.log(removeFirstThree([1,2,3,4]));
// console.log(removeFirstThree([5,4,3,2,1,0]));
// console.log(removeFirstThree([99,1,1]));


// 27.
// Write a function that takes an array (a) as argument
// Extract the last 3 elements of a
// Return the resulting array

// const returnLastThree = (arr: number[]) => arr.splice((arr.length - 3), 3);

// console.log(returnLastThree([1,2,3,4]));
// console.log(returnLastThree([5,4,3,2,1,0]));
// console.log(returnLastThree([99,1,1]));


// 28.
// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array

// const newArrOfThreeNumbers = (arr: number[]) => arr.splice(0, 3);

// console.log(newArrOfThreeNumbers([1,2,3,4]));
// console.log(newArrOfThreeNumbers([5,4,3,2,1,0]));
// console.log(newArrOfThreeNumbers([99,1,1]));


// 29.
// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a

// const returnLastThreeN = (arr: number[], n: number) => arr.splice((arr.length - n), n);

// console.log(returnLastThreeN([1, 2, 3, 4, 5], 2));
// console.log(returnLastThreeN([1, 2, 3], 6));
// console.log(returnLastThreeN([1, 2, 3, 4, 5, 6, 7, 8], 3));


// 30.
// Write a function that takes an array (a) and a value (b) as argument
// The function should clean a from all occurrences of b
// Return the filtered array

// const removingSpecificElement = (arr: any[], b: any) => {
//     arr.splice(arr.indexOf(b), 1);
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === b) {
//             arr.splice(arr.indexOf(b), 1);
//         }
//     }
//     return arr;
// }

// console.log(removingSpecificElement([1,2,3], 2));
// console.log(removingSpecificElement([1,2,'2'], '2'));
// console.log(removingSpecificElement([false,'2',1], false));
// console.log(removingSpecificElement([1,2,'2',1], 1));


// 31.
// Write a function that takes an array (a) as argument
// Return the number of elements in a

// const howManyElements = (arr: number[]) => arr.length;

// console.log(howManyElements([1,2,2,4]))
// console.log(howManyElements([9,9,9]))
// console.log(howManyElements([4,3,2,1,0]))


// 32.
// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array

// const howManyNegativeElements = (arr: number[]) => arr.filter(value => value < 0).length

// console.log(howManyNegativeElements([1,-2,2,-4]));
// console.log(howManyNegativeElements([0,9,1]));
// console.log(howManyNegativeElements([4,-3,2,1,0]));


// 33.
// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order

// const reverseArray = (arr: number[]) => arr.sort((a, b) => b-a)

// console.log(reverseArray([1,3,2]))
// console.log(reverseArray([4,2,3,1]))


// 34.
// Write a function that takes an array of strings as argument
// Sort the array elements alphabetically
// Return the result

// const alphabetOrder = (arr: string[]) => arr.sort()

// console.log(alphabetOrder(['b', 'c', 'd', 'a']));
// console.log(alphabetOrder(['z', 'c', 'd', 'a', 'y', 'a', 'w']));


// 35.
// Write a function that takes an array of numbers as argument
// It should return the average of the numbers

// const returnAverage = (arr: number[]) => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;

// console.log(returnAverage([10,100,40]));
// console.log(returnAverage([10,100,1000]));
// console.log(returnAverage([-50,0,50,200]));


// 36.
// Write a function that takes an array of strings as argument
// Return the longest string

// const longestString = (arr: string[]) => arr.reduce((a, b) => a.length > b.length ? a : b, '');

// console.log(longestString(['help', 'me']));
// console.log(longestString(['I', 'need', 'candy']));


// 37.
// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

// const checkDuplicates = (arr: any[]) => arr.every(i => i === arr[0])

// console.log(checkDuplicates([true, true, true, true]));
// console.log(checkDuplicates(['test', 'test', 'test']));
// console.log(checkDuplicates([1,1,1,2]));
// console.log(checkDuplicates(['10',10,10,10]));


// 38.
// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays

// const combiningEverything = (...arr: any) => arr.flat()

// console.log(combiningEverything([1, 2, 3], [4, 5, 6]));
// console.log(combiningEverything(['a', 'b', 'c'], [4, 5, 6]));
// console.log(combiningEverything([true, true], [1, 2], ['a', 'b']));


// 39.
// Write a function that takes an array of objects as argument
// Sort the array by property b in ascending order
// Return the sorted array

// const sortedObjects = (arr: [{a: number, b: number}, {a: number, b: number}]) => arr.sort((a,b) => (a.b) - b.b);

// console.log(sortedObjects([{a:1,b:2},{a:5,b:4}]))
// console.log(sortedObjects([{a:2,b:10},{a:5,b:4}]))
// console.log(sortedObjects([{a:1,b:7},{a:2,b:1}]))


// 40.
// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array


// const mergeAndRemove = (arr1: number[], arr2: number[]) => [...new Set([...arr1, ...arr2])].sort((a, b) => a - b);

// console.log(mergeAndRemove([1, 2, 3], [3, 4, 5]));
// console.log(mergeAndRemove([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));


// 41.
// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum

// const magicHappeningNow = (arr1: number[], numb: number) => arr1.filter((el) => el > numb).reduce((acc, cur) => acc + cur);

// console.log(magicHappeningNow([1, 2, 3, 4, 5, 6, 7], 2))
// console.log(magicHappeningNow([-10, -11, -3, 1, -4], -3))
// console.log(magicHappeningNow([78, 99, 100, 101, 401], 99))


// 42.
// Write a function that takes two numbers (min and max) as arguments
// Return an array of numbers in the range min to max

// const arrFromTo = (min: number, max: number) => {
//     const arr = [];
//     for (let i = min; i <= max; i++) arr.push(i);
//     return arr;
// }

// console.log(arrFromTo(2, 10));
// console.log(arrFromTo(1, 3));
// console.log(arrFromTo(-5, 5));
// console.log(arrFromTo(2, 7));


// 43.
// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}

// const sortedNanesInObj = (a: any[]) => {
//     return a.reduce((acc, curr) => {
//         const firstLetter = curr[0].toLowerCase()
//         if (!acc[firstLetter]) {
//             acc[firstLetter] = []
//         }
//         acc[firstLetter].push(curr)
//         return acc
//     }, {})
// }
  
// console.log(sortedNanesInObj(['Alf', 'Alice', 'Ben']));
// console.log(sortedNanesInObj(['Ant', 'Bear', 'Bird']));
// console.log(sortedNanesInObj(['Berlin', 'Paris', 'Prague']));

// 44.
// Write a function that takes an array with arbitrary elements and a number as arguments
// Return a new array, the first element should be either the given number itself
// or zero if the number is smaller than 6
// The other elements should be the elements of the original array
// Try not to mutate the original array

// const modifiedArr = (arr: any[], num: number) => {
//     const firstElm = num >= 6 ? num : 0;
//     let result = [];
//     result.push(firstElm);
//     for (let i =0; i < arr.length; i++) {
//         result.push(arr[i]);
//     }
//     return result;
// }

// console.log(modifiedArr([1,2,3], 6));
// console.log(modifiedArr(['a','b'], 2));
// console.log(modifiedArr([null,false], 11));


// 45.
// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array

// const everyNthElement = (arr: number[], num: number) => arr.filter((e, i) => i % num === num - 1);

// console.log(everyNthElement([1,2,3,4,5,6,7,8,9,10],3));
// console.log(everyNthElement([10,9,8,7,6,5,4,3,2,1],5));
// console.log(everyNthElement([7,2,1,6,3,4,5,8,9,10],2));


// 46.
// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country

// const returnKeyValueCountry = (a: { continent: string; country: string }): string => a.country

// console.log(returnKeyValueCountry({  continent: 'Asia',  country: 'Japan'}))
// console.log(returnKeyValueCountry({  country: 'Sweden',  continent: 'Europe'}))


// 47.
// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'
// Tip: you might want to use the square brackets property accessor

// const returnProp = (a: any) => a['prop-2']

// console.log(returnProp({  one: 1,  'prop-2': 2}))
// console.log(returnProp({  'prop-2': 'two',  prop: 'test'}))


// 48.
// Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string

// const returnFollowing = (obj: any, str: string) => obj[str]

// console.log(returnFollowing({  continent: 'Asia',  country: 'Japan'}, 'continent'))
// console.log(returnFollowing({  country: 'Sweden',  continent: 'Europe'}, 'country'))


// 49.
// Write a function that takes an object (a) and a string (b) as argument
// Return true if a has a property with key b
// Return false otherwise

// const anyKeyLikeThis = (obj: any, str: string): boolean => obj[str] ? true : false

// console.log(anyKeyLikeThis({a:1,b:2,c:3},'b'))
// console.log(anyKeyLikeThis({x:'a',y:'b',z:'c'},'a'))
// console.log(anyKeyLikeThis({x:'a',y:'b',z:'c'},'z'))


// 50.
// Write a function that a string (a) as argument
// Create an object that has a property with key 'key' and a value of a
// Return the object

// const createKey = (a: string) => ({ ['key']: a })

// console.log(createKey('a'))
// console.log(createKey('z'))
// console.log(createKey('b'))


// 51.
// Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'
// Return the object

// const createKeyA = (a: string, b: string) => ({ [a]: b })

// console.log(createKeyA('a','b'))
// console.log(createKeyA('z','x'))
// console.log(createKeyA('b','w'))


// 52.
// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object

// const comeTogether = (a: any[], b: any[]) => Object.fromEntries(a.map((key, index)=> [key, b[index]]))

// console.log(comeTogether(['a','b','c'],[1,2,3]))
// console.log(comeTogether(['w','x','y','z'],[10,9,5,2]))
// console.log(comeTogether([1,'b'],['a',2]))


// 53.
// Write a function that takes an object (a) as argument
// Return an array with all object keys

// const onlyKeys = (a: object) => Object.keys(a)

// console.log(onlyKeys({a:1,b:2,c:3}))
// console.log(onlyKeys({j:9,i:2,x:3,z:4}))
// console.log(onlyKeys({w:15,x:22,y:13}))


// 54.
// Write a function that takes an object (a) as argument
// Return the sum of all object values

// const sumProperty = (a: any) => {
//     let sum = 0
//     for (const key in a) {
//         sum += a[key];
//     }
//     return sum
// }

// console.log(sumProperty({a:1,b:2,c:3}))
// console.log(sumProperty({j:9,i:2,x:3,z:4}))
// console.log(sumProperty({w:15,x:22,y:13}))


// 55.
// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'

// const notB = (obj: any) => (({ b, ...o }) => o)(obj)

// console.log(notB({ a: 1, b: 7, c: 3 }))
// console.log(notB({ b: 0, a: 7, d: 8 }))
// console.log(notB({ e: 6, f: 4, b: 5, a: 3 }))


// 56.
// Write a function that takes two objects as arguments
// Unfortunately, the property 'b' in the second object has the wrong key
// should be named 'd' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'a', 'b', 'c', 'd', and 'e'

// const correctObj = (a: any, b: any) => {
//     for (let key in b)
//         if (key === "b") {
//             b.d = b[key];
//             delete b[key];
//         }
      
//     return { ...a, ...b };
// }

// console.log(correctObj({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }))
// console.log(correctObj({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 }))


// 57.
// Write a function that takes an object (a) and a number (b) as arguments
// Multiply all values of 'a' by 'b'
// Return the resulting object

// const multiplyObj = (a: object, b: number) => {
//     return Object.fromEntries(
//         Object.entries(a).map(([key, value]) => [key, value * b])
//     )
// }
    
// console.log(multiplyObj({a:1,b:2,c:3},3))
// console.log(multiplyObj({j:9,i:2,x:3,z:4},10))
// console.log(multiplyObj({w:15,x:22,y:13},6))


// 58.
// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object

// const switchPropertyWithKey = (a:any) => {
//     return Object.keys(a).reduce((acc, cur) => {
//           return { ...acc, [a[cur]]: cur };
//     }, {});
// }

// console.log(switchPropertyWithKey({z:'a',y:'b',x:'c',w:'d'}))
// console.log(switchPropertyWithKey({2:'a',4:'b',6:'c',8:'d'}))
// console.log(switchPropertyWithKey({a:1,z:24}))


// 59.
// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object

// const replaceWhitespace = (a: any) => {
//     for (let key in a){
//       (a[key] === "" || a[key] === " ") && (a[key] = null);
//     }
//     return a;
// }

// console.log(replaceWhitespace({ a: 'a', b: 'b', c: '' }))
// console.log(replaceWhitespace({ a: '', b: 'b', c: ' ', d: 'd' }))
// console.log(replaceWhitespace({ a: 'a', b: 'b ', c: ' ', d: '' }))


// 60.
// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in

// const extractingInfo = (obj: any) => {
//     const { fn, ln, size, weight, ...rest } = obj;
//     const newObj: any = { fn, ln };
//     if (size) newObj.size = `${size}cm`;
//     if (weight) newObj.weight = `${weight}kg`;
//     return newObj;
// }

// console.log(extractingInfo({fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67}))
// console.log(extractingInfo({fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102}))
// console.log(extractingInfo({fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71}))
// console.log(extractingInfo({fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de'}))


// 61.
// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tip: try not to mutate the original array

// const addContinent = (arr: any, str: string) => arr.map((obj: any) => ({ ...obj, continent: str }));

// console.log(addContinent([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia'))
// console.log(addContinent([{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }], 'Europe')


// 62.
// Write a function that takes an array of numbers as argument
// Convert the array to an object
// It should have a key for each unique value of the array
// The corresponding object value should be the number of times the key occurs within the array

// const convertArrayToObject = (a: any[]): { [key: number]: number } => {
//     return a.reduce((acc, curr) => {
//       acc[curr] = (acc[curr] || 0) + 1
//       return acc
//     }, {})
// }

// console.log(convertArrayToObject([1,2,2,3]))
// console.log(convertArrayToObject([9,9,9,99]))
// console.log(convertArrayToObject([4,3,2,1]))


// 63.
// Write a function that takes two date instances as arguments
// It should return true if the dates are equal
// It should return false otherwise

// const sameDates = (d1: Date, d2: Date): boolean => {
//     return d1.getTime() === d2.getTime()
// }

// console.log(sameDates(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')))
// console.log(sameDates(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00')))
// console.log(sameDates(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00')))


// 64.
// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates

// const daysInbetween = (d1: Date, d2: Date) => Math.abs(d1.getTime() - d2.getTime()) / (1000 * 3600 * 24)

// console.log(daysInbetween(new Date('2020-06-11'), new Date('2020-06-01')))
// console.log(daysInbetween(new Date('2000-01-01'), new Date('2020-06-01')))


// 65.
// Write a function that takes two date instances as argument
// It should return true if they fall on the exact same day
// It should return false otherwise

// const areDatesOnSameDay = (d1: Date, d2: Date): boolean => d1.getDay() === d2.getDay()
  
// console.log(areDatesOnSameDay(new Date("2000/01/01"), new Date("2000/01/01"))) 
// console.log(areDatesOnSameDay(new Date("2000/01/01"), new Date("2000/01/02"))) 
// console.log(areDatesOnSameDay(new Date("2001/01/01"), new Date("2000/01/01"))) 
// console.log(areDatesOnSameDay(new Date("2000/11/01"), new Date("2000/01/01"))) 


//SPREAD OPERATORS
// Use spread operator in all tasks
// 1.
// Write a function that takes two number arrays as parameters 
// and return an array which contains elements from both 
// arrays

// const arrCombiner = (arr1:number[], arr2:number[]) => [...arr1, ...arr2];

// console.log(arrCombiner([1, 2], [3, 4]));
// console.log(arrCombiner([1, 2], [3, 4, 5, 6]));


// 2.
// Write a function that takes an array and a string as parameters 
// and return an array which contains all elements from the given array
// and the given string as the last element

// const combineMe = (arr:string[], str:string) => [...arr, str];

// console.log(combineMe(['Apple', 'Orange', 'Banana'], 'Kiwi'));


// 3.
// Write a function that takes an array and a string as parameters 
// and return an array which contains all elements from the given array
// and the given string as the first element

// const combineMeFirst = (arr:string[], str:string) => {
//     const logMe = [str, ...arr];
//     return logMe;
// }

// console.log(combineMeFirst(['Apple', 'Orange', 'Banana'], 'Kiwi'));


// 4.
// Write a function that takes two objects as parameters 
// and return an object which contains properties from both 
// objects

// const objCombiner = (obj1:any, obj2:any) => {
//     return {...obj1, ...obj2};
// }

// console.log(objCombiner({ a:1, b:2 }, { c:3, d:4 }));
// console.log(objCombiner({ a:1, b:2 }, { c:3, d:4, e:5, f:6 }));


// 5.
// Write a function that takes an object and a string as parameters 
// and return an object which contains properties from the given object
// and a new property favoriteMovie with the value equal to the given string

// const newProperty = (obj:any, str:string) => {
//     const property = {favoriteMovie: str};
//     return {...obj, ...property};
// }

// console.log(newProperty({ eyeColor: 'green', age: 10 }, 'Garfield'));
// console.log(newProperty({ eyeColor: 'blue', age: 15 }, 'Twilight'));

