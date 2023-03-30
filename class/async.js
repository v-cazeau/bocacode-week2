// The keyword 'async' can be added to any function. This function will now automagically return a Promise

async function mulitplyTwoNumbers (a,b) {
    return a * b; 
}

// const answer = multiplyTwoNumbers (10,30) // 300 
// console.log(answer)

mulitplyTwoNumbers(10,30)
.then (answer => console.log(answer))
.catch()
.finally(); 

