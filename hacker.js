class Polygon {
    constructor(array) {
        this.array = array
    }
    perimeter() {
        this.array.reduce((first, second) => {
            console.log(first + second)
            return first + second
        }, 0)
    }

}

const array = new Polygon([60,
    40,
    143])
array.perimeter()