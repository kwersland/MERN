const students = [
{
    firstName: "Jane",
    lastName: "Doe",
    habits: [
    "doesn't wash dishes",
    "falls asleep in lecture",
    "shows up early",
    ],
},
{
    firstName: "John",
    lastName: "Smith",
    habits: ["shows up late", "washes dishes", "helps peers"],
},
{
    firstName: "Arya",
    lastName: "Stark",
    habits: ["doesn't wash dishes", "hoards snacks", "shows up late"],
},
{
    firstName: "Jon",
    lastName: "Snow",
    habits: ["shows up early", "helps peers", "washes dishes"],
},
];

const badHabit1 = "doesn't wash dishes";
const expected1 = ["Jane Doe", "Arya Stark"];

const badHabit2 = "shows up late";
const expected2 = ["John Smith", "Arya Stark"];

const badHabit3 = "typo";
const expected3 = [];
/**
 * Finds a list of people whose habits contain the given bad habit.
 * - Time O(?).
 * - Space O(?).
 * @typedef {Object} Person
 * @property {string} firstName
 * @property {string} lastName
 * @property {Array<string>} habits
 * @param {Array<Person>} persons
 * @param {string} badHabit
 * @returns {Array<Person>} The people that have the given bad habit.
 */
function santasNaughtyList(persons, badHabit) {
    const badPeople = []
    const naughtyListReason = badHabit
    for(const eachPerson in persons) {
        // console.log(persons[eachPerson].habits)
        let i = 0
        while (i < persons[eachPerson].habits.length) {
            if (persons[eachPerson].habits[i] === badHabit && badHabit !== undefined) {
                // console.log(badHabit, persons[eachPerson].firstName)
                badPeople.push(`${persons[eachPerson].firstName} ${persons[eachPerson].lastName}`)
            }
            i++;
        }
    }
    return (`${naughtyListReason}: [${badPeople}]`)
}

// console.log(santasNaughtyList(students, badHabit1))
// console.log(santasNaughtyList(students, badHabit2))
// console.log(santasNaughtyList(students, badHabit3))

/**
 * Finds a list of people whose habits contain the given bad habit.
 * - Time O(?).
 * - Space O(?).
 * @typedef {Object} Person
 * @property {string} firstName
 * @property {string} lastName
 * @property {Array<string>} habits
 * @param {Array<Person>} persons
 * @param {string} badHabit
 * @returns {Array<Person>} The people that have the given bad habit.
 */
function santasNaughtyListFunctional(persons, badHabit) {
    let naughtyPeople = []
    naughtyPeople = persons.filter(perp => perp.habits.includes(badHabit))
    let naughtyNames = []
    naughtyPeople.map((eachPerson, i) => {
        naughtyNames.push(`${eachPerson.firstName} ${eachPerson.lastName}`)
    })
    return naughtyNames
}


console.log(santasNaughtyListFunctional(students, badHabit1))
console.log(santasNaughtyListFunctional(students, badHabit2))
console.log(santasNaughtyListFunctional(students, badHabit3))