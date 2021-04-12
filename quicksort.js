const partition = require("./partition");

/* function inputs the array and returns the 
sorted array using 'quicksort' algorithm */
function quicksort(arr) {
    /* make deep clone of array  */
    let newArray = JSON.parse(JSON.stringify(arr));
    console.log("newArray:", newArray);
    /* p holds the starting index */
    const p = 0;
    /* q holds the last index but to use it in splice we do not reduce it for 1 */
    const q = newArray.length;
    /* stop recursion if it is one element in array */
    if (p < q) {
        /* element with rangedIndex is already sorted in new sorted array*/
        const [newSortedArray, rangedIndex] = partition(newArray);
        console.log("rangedIndex:", rangedIndex);
        /* use recursion to sort left range */
        console.log("newSortedArray", newSortedArray);
        const leftArray = quicksort(newSortedArray.slice(p, rangedIndex));
        console.log("leftArray:", leftArray);
        console.log(
            "newSortedArray.slice(rangedIndex, q)",
            newSortedArray.slice(rangedIndex, q)
        );
        /* use recursion to sort right range */
        /* we take the range to the right of ranged element */
        const rightArray = quicksort(newSortedArray.slice(rangedIndex + 1, q));
        console.log("rightArray:", rightArray);
        newArray = leftArray.concat(newSortedArray[rangedIndex]).concat(rightArray);
    }
    console.log("newArray:", newArray);
    return newArray;
}

module.exports = quicksort;
