function checkPalindrome(str) {
    const specialCharacters = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    let isPalindrome = true;
    const arr = str.split("");
    let start = 0;
    let end = arr.length - 1;
    for (; start < end; ) {
        /* find the non-spec char from the start */
        if (specialCharacters.test(arr[start])) {
            start++;
            continue;
        }

        /* find the non-spec char from the end */
        if (specialCharacters.test(arr[end])) {
            end--;
            continue;
        }
        /* compare left char to right char */
        if (arr[start].toLowerCase() === arr[end].toLowerCase()) {
            start++;
            end--;
            continue;
        } else {
            isPalindrome = false;
            break;
        }
    }

    return isPalindrome;
}

console.log(checkPalindrome("mu m")); //true
console.log(checkPalindrome("Was it a car or a cat I saw")); //true
console.log(checkPalindrome("Red -rum-, sir,-is-murder")); //true
console.log(checkPalindrome("I got up early this morning"));
