// return numbers with most repeats
// if two numbers repeat the same return the first number
// if none return -1

function testRepeat(arr){
    const temp = arr.reduce((acc, current, idx) => {
        acc[current] ? acc[current]['amount']+=1:acc[current] = {amount:1, index:idx};
        return acc;
        
    },{})

    let maxAmount = 1;
    let position = 0;
    let result = -1;

    for (const key in temp){
        if (temp[key]['amount'] > maxAmount) {
           maxAmount = temp[key]['amount']
           result = key
           position = temp[key]['index']
        }
        if (temp[key]['amount']=== maxAmount && maxAmount !== 1) {   
            if(temp[key]['index'] < position){
                result = key
            }
        }
    }
    return result;
}


console.log(testRepeat([5,2,2,1,5]))/* return 5 */
console.log(testRepeat([6,5,5,10,10,10]))/* return 10 */
console.log(testRepeat([1,3,5,6]))/* return -1 */