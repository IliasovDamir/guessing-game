class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min
        this.max = max
    }

    guess() {
        let result
        result = Math.round((this.min + this.max) / 2)
        return result
    }

    lower() {
        this.max = Math.round((this.min + this.max) / 2)
    }

    greater() {
        this.min = Math.round((this.min + this.max) / 2)
    }
}

module.exports = GuessingGame;
