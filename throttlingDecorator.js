/* 
global

setTimeout
*/

function f(a) {
    console.log(a)
}

function myThrottle(func, timeout) {
    let ignoreNextCalls = false
    let lastSavedArguments
    let lastTimeWrapperCalled = false
    function wrapperFunc() {
        const savedThis = this
        /* if the function is throttled  when we save arguments
        so that we can use that arguments when function  becomes not throttled */
        console.log('wrapper called')
        if (ignoreNextCalls && !lastTimeWrapperCalled) {
            lastSavedArguments = arguments
            console.log(`Ignored for ${timeout} ms`)
            return
        } else {
            ignoreNextCalls = true
            func.apply(this, arguments)
            setTimeout(() => {
                console.log('settimout start')
                /* now we should call wrapper for a last time */
                ignoreNextCalls = false
                /* but the last time we call  the wrapper we will not set the timeout any more */
                if (!lastTimeWrapperCalled) {
                    wrapperFunc.apply(savedThis, lastSavedArguments)
                }
                lastTimeWrapperCalled = true
                console.log('settimout end')
            }, timeout)
        }
    }
    return wrapperFunc
}

function throttle(func, ms) {
    let isThrottled = false,
        savedArgs,
        savedThis

    function wrapper() {
        console.log('wrapper called')
        if (isThrottled) {
            // (2)
            savedArgs = arguments
            savedThis = this
            return
        }

        func.apply(this, arguments) // (1)

        isThrottled = true

        setTimeout(function () {
            console.log('settimeout done')
            isThrottled = false // (3)
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs)
                savedArgs = savedThis = null
            }
        }, ms)
    }

    return wrapper
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
const f1000 = myThrottle(f, 1000)
f1000(1) // показывает 1
f1000(2) // (ограничение, 1000 мс ещё нет)
f1000(3) // (ограничение, 1000 мс ещё нет)
// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано
