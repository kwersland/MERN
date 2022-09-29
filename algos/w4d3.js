const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

/**
 * Rehashes an incorrectly hashed string by combining letter count occurrences
 * and alphabetizing them.
 * Time: O(?).
 * Space: O(?).
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */
function rehash(s) {
    const newList = {}
    let nextKey =""
    let nextSum = ""
    for (idx in s) {
        if (isNaN(s[idx],10)){
            if (nextKey !== ""){
                newList[nextKey] = (parseInt(nextSum))
            }
            if(!newList.hasOwnProperty(s[idx])){
                nextKey = s[idx]
                nextSum = ""
                console.log(nextKey) 
            }
            else {
                console.log(`adding ${nextSum} to ${s[idx]}`)
                newList[s[idx]] += parseInt(nextSum)
                nextSum =""
            }
        } else {
            nextSum += s[idx]
            console.log(nextSum)
        }
    }
    return newList
}


console.log(rehash(str1))


/* 
Given two strings,
return true if the first string can be built from the letters in the 2nd string
Ignore case
.indexOf will only tell you if the letter is found one time
*/
// 1 h, 1 e, 3 l, 2 o, 1 r, 1 d
const strA1 = "Hello World";
const strB1 = "lloeh wordl";
//const expected1 = true;

const strA2 = "Hey";
const strB2 = "hello";
const expected2 = false;
// Explanation: second string is missing a "y"

const strA3 = "hello";
const strB3 = "helo";
const expected3 = false;
// Explanation: second string doesn't have enough "l" letters

const strA4 = "hello";
const strB4 = "lllheo";
const expected4 = true;

const strA5 = "hello";
const strB5 = "heloxyz";
const expected5 = false;
// Explanation: strB5 does not have enough "l" chars.

/**
 * Determines whether s1 can be built using the chars of s2.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean}
 */
function canBuildS1FromS2(s1, s2) {}