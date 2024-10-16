// The Basic Calculator 
let givnNum, givnNum2, numResult
let usrOpt

// ADD A FUNCTION CALLED CALCULATE
function calcNumbs(myNum, myNum2, chsnOpt) {
    let myResult
    console.log(myNum)
    console.log(myNum2)
    switch(chsnOpt) {
        case 1: 
        myResult = myNum+myNum2
        return('The added numbers give '+ myResult+'.')
        break
        case 2: 
        myResult = myNum-myNum2
        return('The subtraction gives '+ myResult+'.')
        break
        case 3: 
        myResult = myNum*myNum2
        return('The multiplication gives '+ myResult+'.')
        break
        case 4: 
        myResult = myNum/myNum2
        return('The division gives '+ myResult.toFixed(3)+'.')
        break
    }

}
// COLLECT FIRST NUMBER FROM USER
givnNum = parseInt(prompt("Enter first number for calculation:  "))

// COLLECT SECOND NUMBER FROM USER
givnNum2 = parseInt(prompt("Enter second number for calculation:  ")) 

// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
usrOpt = parseInt(prompt("Enter choice of operation \n1. + \n2. - \n3. * \n4. / \nEnter number:"))
console.log(usrOpt)

// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
numResult= calcNumbs(givnNum,givnNum2,usrOpt)
if (usrOpt>0 && usrOpt <=4){
    alert(numResult)
}else {
    alert('Not an option for calculator. \nGoodbye.')
}
