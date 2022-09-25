
function sayHi(){
    return 'Hello'
}
//console.log(sayHi())


const arrowFunction = () => {
    return 'Hello from arrow function'
}
//console.log(arrowFunction())


const shortArrowFunction = () => 'hello from short arrow function'
//console.log(shortArrowFunction())


function sum(a,b){
    return a+b
}
//console.log(sum(3,4))


const sumArrowFunction = (a,b) =>{
    return a+b
}
//console.log(sumArrowFunction(5,6))


const sumShortArrowFunction = (a,b) => a+b
//console.log(sumShortArrowFunction(7,8))


const sumA = a => b => a+b
//console.log(sumA(4)(5))


function sumB(a){
    return function(b){
        return a+b
    }
}
//console.log(sumB(100)(50))


// map, filter, reduce


// * map
const numArray = [1, 2, 3, 4, 5]

const plusTwo = (number) => number + 2
const newNumArr = numArray.map(plusTwo)

//console.log("Map - ", newNumArr);



// * filter 
const checkNum = (number) => number > 3
const filtered = numArray.filter(checkNum)
//console.log("Filter - ", filtered)




// * reduce
let array2 = numArray.reduce((acc,cur) => acc+cur, 0)
//console.log({array2})

/*
let array5 = numArray.map(number) => ({
    name: "Name $"
})
*/

const a = {
    a: 1,
    b: 2
}

const b = {
    ...a,
    c: 3
}

console.log({a,b})


