const pokémon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);

// divisible by Three
const divisibleByThree = pokémon.filter( (id) => (id.id % 3 === 0));
console.table(divisibleByThree);

// Type = fire
const fire = pokémon.filter( (type) => type.types.includes("fire"));
console.table(fire);

// Types greater than 1
const moreThanOne = pokémon.filter((pokemon) => pokemon.types.length > 1);
console.table(moreThanOne);

// just names
const allPokemonNames = pokémon.map((pokemon) => pokemon.name);
console.table(allPokemonNames);

// names with id > 99
const bigId = pokémon
                    .filter((id) => id.id > 99)
                    .map((pokemon) => pokemon.name);
console.table(bigId);

// names type poison
const namesPoison = pokémon
                        .filter((type) => type.types.length === 1 && type.types[0] === "poison")
                        .map(pokemon => pokemon.name);
console.table(namesPoison)

// first type where second type = flying
const typeFlying = pokémon
                        .filter((type) => type.types[1] === "flying")
                        .map((type) => type.types[0]);
console.table(typeFlying);

// count
const count = pokémon
                    .filter((type) => type.types.length === 1 && type.types.includes("normal"))
                    .map((pokemon) => pokemon.name);
console.log(count.length);