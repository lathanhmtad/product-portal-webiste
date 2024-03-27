const object = {
    a: 1,
    b: 2
}

const {a, b} = object // Destructering: Object | Array
console.log(a, b)

const [c, d, ...rest] = [10, 20, 30, 40, 50, 60, 70]