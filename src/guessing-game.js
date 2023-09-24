class GuessingGame {
    constructor() {
        this.minValue = 0
        this.maxValue = 0
        this.res = 0
    }

    setRange(min, max) {
        this.minValue = min
        this.maxValue = max
    }

    guess() {
        this.res = Math.round((this.minValue + this.maxValue) / 2);
        return this.res;
    }

    lower() {
        return this.maxValue = this.res
    }

    greater() {
        return this.minValue = this.res
    }
}

module.exports = GuessingGame;
