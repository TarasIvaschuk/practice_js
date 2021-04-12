/* eslint-disable no-var */

function randMax(max) {
    return Math.trunc(1e9 * Math.random()) % max //	1e9 is 1'000'000'000
}

var reel = {
    symbols: ['♠', '♥', '♦', '♣', '☺', '★', '☾', '☀'],
    spin() {
        if (this.position == null) {
            this.position = randMax(this.symbols.length - 1)
        }
        this.position = (this.position + 100 + randMax(100)) % this.symbols.length
    },
    display() {
        if (this.position == null) {
            this.position = randMax(this.symbols.length - 1)
        }
        return this.symbols[this.position]
    }
}

var slotMachine = {
    reels: [
        // this slot machine needs 3 separate reels
        // hint: Object.create(..)
        Object.create(reel),
        Object.create(reel),
        Object.create(reel)
    ],
    spin() {
        this.reels.forEach(function spinReel(reel) {
            reel.spin()
        })
    },
    display() {
        // TODO
        for (const reel of this.reels) {
            // display current position
            const position = reel.symbols.indexOf(reel.display())
            const previousPosition = position - 1 === -1 ? reel.symbols.length - 1 : position - 1
            const nextPosition = (position + 1) % reel.symbols.length
            // position
            // previousPosition
            // nextPosition
            console.log(
                /* position */ reel.symbols[position],
                '/',
                /* position -1 */ reel.symbols[previousPosition],
                '/',
                /*  position  + 1 */ reel.symbols[nextPosition]
            )
            //             // display position + 1
        }
    }
}

/* DEMO */

slotMachine.spin()
slotMachine.display()
console.log('==================================================')
// ☾ | ☀ | ★
// ☀ | ♠ | ☾
// ♠ | ♥ | ☀

slotMachine.spin()
slotMachine.display()
// ♦ | ♠ | ♣
// ♣ | ♥ | ☺
// ☺ | ♦ | ★
