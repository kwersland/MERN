/* pivot to be to it's left and all larger numbers to the right of the pivot.
* - Time: O(?).
* - Space: O(?).
* @see https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
*    visualization of quickSort. Focus only on the first cycle of the visualization
*    for the partition portion only.
* @param {Array<number>} nums
* @param {number} left The index indicating the start of the slice of array
*    being processed.
* @param {number} right The index indicating the end of the slice of array
*    being processed.
* @returns {Array<number>} The idx where left section of smaller items ends.
*/

function partition(nums = [], left = 0, right = nums.length - 1) {
    let pivot = nums[Math.floor((right + left) / 2)],
    i = left,
    j = right;
    while (i <= j) {
        while (nums[i] < pivot) {
            i++;
        }
        while (nums[j] > pivot) {
        j--;
        }
        if (i <= j) {
        let temp = nums[i]
        nums[j] = nums[i]
        nums[i] = temp
        i++
        j--
        }
    }
    return i;
}

function quickSort(nums = [], left, right) {
    let index;
    if (nums.length > 1) {
        index = partition(nums, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
        quickSort(nums, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
        quickSort(nums, index, right);
        }
    }
    return nums;
}

let result1 = quickSort(nums2, 0, nums2.length - 1);
let result2 = quickSort(nums3, 0, nums3.length - 1);
let result3 = quickSort(nums4, 0, nums4.length - 1);

console.log(result1);
console.log(result2);
console.log(result3);