/* function gets the arr as input

it take the last element of array and ranges smaller elements to the left of it,
respectively the larger/equal element are ranged of the right of it,
The function returns the sorted array and the index of ranged element in sorted array
say we have [9, 5, 15, 0, 7 (the last el)] -> [[0, 5, 7 (the last el), 9, 15], 2 (index of 7)] */
function partition(array) {
    /* make a deep copy of the input array and use it further */
    let newArray = JSON.parse(JSON.stringify(array));
    /* p is the first index of array */
    const p = 0;
    /* i is used to keep the pointer to the last element of the 'small' range */
    let i = p - 1;
    /* q is the last index of array */
    const q = newArray.length - 1;
    for (let j = p; j < q; j++) {
        if (newArray[j] < newArray[q]) {
            newArray = swapArr(newArray, j, i + 1);
            i = i + 1;
        }
    }
    newArray = swapArr(newArray, q, i + 1);
    console.log('newArrayPartition:', newArray)
    return [newArray,i + 1];
}

/* function is used to swap two elements of array 
returns new array with swapped elements
a and b are indexes of array,
[1, 3, 5] -> swap (..., 0,1) -> [3,1,5] */
function swapArr(arr, a, b) {
    /* make a deep copy of the input array and use it further */
    const newArray = JSON.parse(JSON.stringify(arr));
    const temp = newArray[a];
    newArray[a] = newArray[b];
    newArray[b] = temp;
    return newArray;
}

module.exports = partition;
