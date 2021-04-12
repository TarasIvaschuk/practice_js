const ranges = (start, end) => {
    const result = []
    if (typeof start === 'number' && typeof end === 'number') {
        if (start < end) {
            for (let count = start; count <= end; count++) {
                result.push(count)
            }
        } else if (start === end) {
            result.push(start)
            result.push(start)
        }
    } else if (typeof start === 'number' && typeof end === 'undefined') {
        const anotherfunction = (c) => {
            const result = []
            if (start < c) {
                for (let count = start; count <= c; count++) {
                    result.push(count)
                }
            } else if (start === c) {
                result.push(start)
            }
            console.log(result)
        }
        return anotherfunction
    }
    console.log(result)
}

// DEMO
ranges(3, 3) //[3,3]
ranges(3, 8) //[3,4,5,6,7,8]
ranges(3, 0) //[]

var start3 = ranges(3)
var start4 = ranges(4)
start3(3) //[3]
start3(0) //[]
start3(8) //[3,4,5,6,7,8]
start4(6) //[4,5,6]
