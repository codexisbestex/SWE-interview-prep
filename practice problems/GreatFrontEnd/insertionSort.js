/**
 * @see {@link https://www.greatfrontend.com/questions/javascript/insertion-sort ###. Insertion Sort}
 *
 * Implement a function that performs an insertion sort. The function should take in an array of integers and return an array with the integers sorted in ascending order. The input array is modified.
 */

/**
 * EXPLAIN
 * create function that performs insertion sort
 * `insertionSort` takes in arr
 * `insertionSort` returns arr sorted in ascending order
 */

/**
 * APPROACH
 * create variable for sortedArr
 * START LOOP
 * grab curr value and assign it as currNum
 * grab next value and assign it as nextNum
 *    IF currNum is bigger than or equal to nextNum
 *    push to sortedArr
 *    ELSE unshift to sortedArr
 * END LOOP
 * return sortedArr
 */

export default function insertionSort(arr) {
  let sortedArr = [];

  for (let i = 0; i < arr.length; i++) {
    let currNum = arr[i];
    let nextNum = arr[i + 1];

    if (currNum >= nextNum) {
      sortedArr.push(currNum)
     } else {
      sortedArr.push(nextNum)
     }

  return sortedArr;
}

/**
 * COMPLEXITY
 * TIME   O()
 * SPACE  O()
 */

/**
 * TIME TAKEN
 *
 * READ             0
 * EXPLAIN          0
 * APPROACH         0
 * CODE [FAIL]      0
 * TEST             0
 * OPTIMIZE         0
 */
