let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,0,"dsf"];
if (arr.some(item => item === 0)) {
    console.log("В массиве есть нулевой элемент ")
}
else if (arr.some(item => isNaN(item))) {
    console.log("В массиве содержатся не только числа")

}

let even = arr.map(x => x % 2).filter(x => x == 0).length
let odd = arr.map(x => x % 2).filter(x => x == 1).length
console.log(`четных чисел ${even}`)
console.log(`нечетных чисел ${odd}`)
