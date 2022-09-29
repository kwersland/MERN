/*
https://www.hackerearth.com/practice/algorithms/sorting/selection-sort/visualize/
Selection sort works by iterating through the list, finding the minimum
value, and moving it to the beginning of the list. Then, ignoring the first
position, which is now sorted, iterate through the list again to find the
next minimum value and move it to index 1. This continues until all values
are sorted.
Unstable sort.

Time Complexity
  - Best: O(n^2) quadratic.
  - Average: O(n^2) quadratic.
  - Worst: O(n^2) quadratic.
Space: O(1) constant.
Selection sort is one of the slower sorts.
- ideal for: pagination, where page 1 displays 10 records for example,
    you run selection sort for 10 iterations only to display the first 10
    sorted items.
*/

const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


/**
 * Sorts the given nums in-place by mutating the array.
 * Best: O(n) linear when array is already sorted.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic when the array is reverse sorted.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given nums after being sorted.
 */
function selectionSort(nums = []) {
    for (let i = nums.length-1; i > -1; i--){
        let max = i
        for (let j = i - 1; j > -1; j--) {
            if (nums[j] > nums[max]){
                max = j
            }
        }
        [nums[i], nums[max]] = [nums[max], nums[i]];
    }
    return nums;
}

console.log(selectionSort(numsOrdered))
console.log(selectionSort(numsRandomOrder))
console.log(selectionSort(numsReversed))
console.log(selectionSort(numsOrdered))