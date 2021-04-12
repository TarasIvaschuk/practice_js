function work(a, b) {
    console.log(a + b)
}

function spy(func) {
    wrapperFunc.countCalls = 0
    wrapperFunc.calledWithArguments = []
    function wrapperFunc(...arguments) {
        ++wrapperFunc.countCalls
        wrapperFunc.calledWithArguments.push(arguments)
        func(...arguments)
    }

    return wrapperFunc
}

const wrapperSpy = spy(work)

wrapperSpy(1, 2) // 3
wrapperSpy(4, 5) // 9

for (const args of wrapperSpy.calledWithArguments) {
    console.log('call:' + args.join()) // "call:1,2", "call:4,5"
}
