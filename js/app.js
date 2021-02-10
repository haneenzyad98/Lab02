'use strict';
let Name;

Name =prompt('what\'s your Name?');
let age;
age =prompt('How old are you?')
alert('Hi'+ '  '+'' +Name+ '  ' +'answer the following question  by Yes or no please');
let score=0;
let continents;



function conNumber () {continents=prompt('Is the number of continents of the world 7?') 
if  (continents.toLocaleLowerCase()==='yes'||continents.toLocaleLowerCase()==='y'){
   score++; 
   alert('It is Correct');
}else if(continents.toLocaleLowerCase()==='no'||continents.toLocaleLowerCase()==='n') {
    alert('It is not Correct');
}else{
    alert('the Correct answer is yes');
}}
conNumber();


function quran() {let num=prompt('The number of parts of the Quran is 30?')
if  (num.toLocaleLowerCase()==='yes'||num.toLocaleLowerCase()==='y'){
    score++;
    alert('It is Correct');}
    else if(num.toLocaleLowerCase()==='no'||num.toLocaleLowerCase()==='n') {
        alert('It is not Correct');
    }
} 
quran();

function numDay () {let houer=prompt('The number of hours of the day is 30?');

switch(houer.toUpperCase()){
    case 'NO':
    case 'N':
        score++;
        alert('It is Correct');
        break;
    case 'YES':
    case 'Y':
        alert('It is not Correct');
        break;
    default:
        alert('It is not Correct');
}
}
numDay();

function numWeek () {let week=prompt('The number of days of the week is 5');

switch(week.toUpperCase()){
    case 'NO':
        case 'N':
            score++;
        alert('It is Correct');
        break;
        case 'YES':
        case 'Y':
        alert('It is not Correct');
        break;
    default:
        alert('It is not Correct');
}}
numWeek();

function sky() {let sky=prompt('The Sky color is blue?');

switch(sky.toUpperCase()){
    case 'YES':
        case 'Y':
            score++;
        alert('It is Correct');
        break;
    case 'NO':
        case 'N':
        alert('It is not Correct');
        break;
    default:
        alert('It is not Correct');
}}
sky();



function numfinger () {let q6=prompt('what number of finger hand?')
if(q6==5){
    score++;
    alert('it is correct')
    
    console.log(score);
}else{
    for(let i=0;(i<4)&&(q6!=5);i++ ){
        q6=prompt('what number of finger hand?')
    }alert('the correct answer is 5')
}}
numfinger();

// let Drink =['coffee','tea','cocacola', 'water'];
// for(let x=0;x<4;x++){

//     let q7= prompt('Guess the best drink for me?').toLocaleLowerCase;

// for(let j=0;j<Drink.length;j++){
//     if (q7===Drink[j]){
//         score++;
//         alert('it is correct');
//         break; 
//     }
// if(q7===Drink[j]){
//     break;

// } else{
//             alert('Your Answer is incorrect, Try again');
//             q7= prompt('Guess the best drink for me?').toLocaleLowerCase;
//         }
//     }
// }

let Drink =['coffee','tea','cocacola', 'water','coldetea','cacaw'];

function drink() { for(var x = 0; x < 6; x++){
    let userAnswer = prompt('Guess the best drink for me?').toLowerCase();
        for (var j = 0; j < Drink.length; j++) {
            if( userAnswer === Drink[j]){
                alert('Your Answer Is Corrct!!');
                score++;
                break ;}
           }
        if (userAnswer === Drink[j]){
            break;}
            
            else{
                alert('Your Answer is incorrect, Try again');}
    }}

console.log(score)
alert('score is ' + score);