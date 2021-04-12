function aclean(txt) {
    const result = [];
    result.push(txt.pop());

    /* get each word of the text */
    for (const word of txt) {
        let isA = false;
        /* compare to each word of our result */
        for (const resultWord of result) {
            /* if the length is equal it is likely to be anagram */
            if (word.length === resultWord.length) {
                /* add each letter of the word to the set of the resultWord*/
                const setWord = new Set([...resultWord.toLowerCase()]);
                for (const letter of word.toLowerCase()) {
                    setWord.add(letter);
                }
                /* if the set of the word and the set of the word 2 are equal then they're anagram  */

                if (new Set([...resultWord]).size === setWord.size) {
                    isA = true;
                    break;
                }
            }
        }
        if (!isA) {
            result.push(word);
        }
    }
    return result;
}

/*  two ways using Object or using Map structure */
function aclean_(text) {
    // let map = new Map();
    const map = new Object()
    /* let sort each word in the text */
    text.map((word) => {
        const sortedWord = [...word].sort().join("").toLowerCase();
        // map.set(sortedWord, word);
        map[sortedWord] = word;
        return sortedWord;
    });
    console.log(map);
    // return [...map.values()];
    return [...Object.values(map)];
}
const arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));
console.log(aclean_(arr));
