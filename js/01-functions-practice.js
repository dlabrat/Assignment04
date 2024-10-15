//Practice with Functions 
let numResult
let givnNum, givnNum2

function halfNumber(myNum) {
    let myResult = myNum/2 
    console.log(`Half of ${myNum} is `)
    return(myResult)
}
/*
function squareNumber(myNum){
    let myResult = myNum**2 
    console.log(`The square of ${myNum} is `)
    return(myResult)
}

function percentOf(myNum,myNum2) {
    let myResult = (myNum/myNum2) *100
    console.log(`The percentage of ${myNum} to ${myNum2} is `)
    return(myResult)
}

function findModulus(myNum,myNum2) {
    let myResult = myNum % myNum2
    console.log(`The modulus of ${myNum} and ${myNum2} is `)
    return(myResult)
}
*/

//STEP 1
 givnNum = parseInt(prompt("Enter number to cut in half:  "))
 numResult= halfNumber(givnNum) 
console.log(numResult +'. ')
//STEP 2
//givnNum = parseInt(prompt("Enter number to square:  "))
//numResult= squareNumber(givnNum)
//console.log(numResult +'. ')
//STEP 3
//givnNum = parseInt(prompt("Enter two numbers to find the percentage.\n First number is the part:  "))
//givnNum2 = parseInt(prompt("Enter two numbers to find the percentage.\n Second number is the whole:  ")) 
//numResult = percentOf(givnNum,givnNum2)
//console.log(numResult.toFixed(2) +'%. ')
//STEP 4
//givnNum = parseInt(prompt("Enter two numbers to find the modulus.\n First number is:  "))
//givnNum2 = parseInt(prompt("Enter two numbers to find the modulus.\n Second number is:  ")) 
//numResult = findModulus(givnNum,givnNum2)
//console.log(numResult +'. ')
//STEP 5
