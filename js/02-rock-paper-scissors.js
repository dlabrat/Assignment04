// The Rock, Paper, Scissors Game
let usrChoice
let usrNum, coNum 

let randomNum = Math.floor(Math.random()*3)+1
usrChoice = parseInt(prompt("Enter choice of 1. rock, 2. paper or 3. scissors.\n Enter number:  "))
switch (randomNum) {
    case 1: coNum = 'rock'
    break
    case 2: coNum = 'paper'
    break
    case 3: coNum = 'scissors'
    break
}
switch (usrChoice) {
    case 1: usrNum = 'rock'
    break
    case 2: usrNum = 'paper'
    break
    case 3: usrNum = 'scissors'
    break
}

console.log('You choose '+ usrNum +' and computer chose '+ coNum +'.')
if (usrNum === coNum) {
    console.log('We are tied!')
}
else if (usrNum == 'rock' && coNum =='paper') {          // paper beats rock
    console.log('Computer wins!')
} 
else if (usrNum == 'rock' && coNum =='scissors') {        // rock beats scissors
    console.log('You win!')
} 
else if (usrNum == 'paper' && coNum =='rock') {          // paper beats rock
    console.log('You win!')
} 
else if (usrNum == 'paper' && coNum =='scissors') {        // scissors beat paper
    console.log('Computer wins!')
} 
else if (usrNum == 'scissors' && coNum =='rock') {          // rock beats scissors
    console.log('Computer wins!')
} 
else if (usrNum == 'scissors' && coNum =='paper') {        // scissors beat paper
    console.log('You win!')
} 
else {
    console.log('Sorry, bad input.')
}
