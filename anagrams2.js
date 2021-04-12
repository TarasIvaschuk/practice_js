function anagrams(word, words) {
    return words.reduce((previous, current) => {
        if (current.split("").sort().join("") === word.split("").sort().join("")) {
            previous.push(current);
        }
        return previous;
    }, []);
}

console.log(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"])); // ['aabb', 'bbaa']
console.log(anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"])); //  ['carer', 'racer']
console.log(anagrams("laser", ["lazing", "lazy", "lacer"])); //[]

