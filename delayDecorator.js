/* 
global
setTimeout
*/

function f(x) {
    console.log(x)
}

function delay(func, timeout) {
    // we must save 'this' because setTimout will not remember 'this'
    const savedThis = this
    function wrapperFunc() {
        // save 'arguments' because setTimout doesn't know what is the 'arguments'
        const argumentsSaved = arguments
        setTimeout(function () {
            // console.log(argumentsSaved[0]) /* ? */
            func.apply(savedThis, argumentsSaved)
        }, timeout)
    }
    return wrapperFunc
}

const f10000 = delay(f, 1000)
const f30000 = delay(f, 30000)

f10000('test') // "test" after 1 s
f30000('test_again') //  "test_again" after 30 s
