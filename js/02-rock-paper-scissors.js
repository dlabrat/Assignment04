// The Rock, Paper, Scissors Game
let usrChoice
let usrNum, coNum 

let randomNum = Math.floor(Math.random()*3)+1
usrChoice = parseInt(prompt("Enter choice of 1. rock, 2. paper or 3. scissors.\nEnter number:  "))
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

alert('You choose '+ usrNum +' and computer chose '+ coNum +'.')
if (usrNum === coNum) {
    alert('We are tied!')
}
else if (usrNum == 'rock' && coNum =='paper') {          // paper beats rock
    alert('Computer wins!')
} 
else if (usrNum == 'rock' && coNum =='scissors') {        // rock beats scissors
    alert('You win!')
} 
else if (usrNum == 'paper' && coNum =='rock') {          // paper beats rock
    alert('You win!')
} 
else if (usrNum == 'paper' && coNum =='scissors') {        // scissors beat paper
    alert('Computer wins!')
} 
else if (usrNum == 'scissors' && coNum =='rock') {          // rock beats scissors
    alert('Computer wins!')
} 
else if (usrNum == 'scissors' && coNum =='paper') {        // scissors beat paper
    alert('You win!')
} 
else {
    alert('Sorry, bad input.')
}
