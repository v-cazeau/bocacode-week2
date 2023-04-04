//question ONE

// Create a function that takes in a number of two-pointers (shots made that count as 2 points each) and three-pointers (shots made that count as 3 points each) made and returns a basketball team's total score. Invoke the function and console.log the results.


function bsktballPointCounter(twos, threes) {
    let twoPointers = twos * 2
    let threePointers = threes * 3
    result = twoPointers + threePointers
    return result 
}

console.log(bsktballPointCounter(5, 10))

//question TWO