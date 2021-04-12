/* 
global

setTimeout
*/

function debounce(func, timeout) {
    const savedThis = this
    let ignoreNextCalls = false
    function wrapperFunc() {
        const savedArgs = arguments
        if (ignoreNextCalls) {
            console.log(`Ignored for ${timeout} ms`)
        } else {
            ignoreNextCalls = true
            func.apply(savedThis, savedArgs) //?
            setTimeout(() => {
                ignoreNextCalls = false
            }, timeout)
        }
    }
    return wrapperFunc
}

const f1000 = debounce(console.log, 1000)

f1000(1) // run immidately
f1000(2) // ignore

setTimeout(() => f1000(3), 100) // ignored (passed only 100 ms)
setTimeout(() => f1000(4), 1100) // run
setTimeout(() => f1000(5), 1500) // ignored (passed only 400 ms from the last call)
