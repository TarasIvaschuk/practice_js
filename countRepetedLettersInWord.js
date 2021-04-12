function repetedLettersMaxWord(txt){
    words = txt.toLowerCase().split(' ')

    const tempArr = words.map((word) => {
        return word.split('').reduce((acc, current) => {
            acc[current] = acc[current]? acc[current]+1:1
           acc.max = acc.max> acc[current]? acc.max: acc[current]
            return acc
        },{max:1, word: word})
    })
    /* find the max repetead letter word */
    let maxLetter = 1;
    let maxWord = tempArr[0].word

    for(const obj of tempArr) {
        if (obj.max > maxLetter) {
            maxLetter = obj.max
            maxWord = obj.word
        }
    }

    return maxWord
}


console.log(repetedLettersMaxWord('Javascript is a programmming language'))/* programming */