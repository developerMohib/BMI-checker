/*
Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/
function forBurger(){
    
    let yourBugdet = Number(prompt( `Enter Your Bugdet since we kick you to get out =`) );
    let priceBurger = 500;

    if(priceBurger <= yourBugdet){
        document.write(`Your can but a Burger, and gift for you a coke.`);
    }
    else{
        document.write(`You just buy coke. becoz your bugdet = ` + yourBugdet + ` your need minimun ` + priceBurger + ` for buying Burger.`);
    }

}

/*** 

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/
function forBMIcheck(){
    let hight_semi = parseFloat(prompt(`Enter Your correct Height in Inch:`));
    let height = parseFloat(hight_semi / 100) ;
    let weight = parseFloat(prompt(`Enter Your correct Weight:`));
    let BMI = parseFloat(weight / height**2 );

    if(BMI < 18.5 ){
        document.write(`Your are under weight. And Your BMI =` + BMI.toFixed(3));
    }
    else if( BMI >= 18.5 && BMI <=24.9){
        document.write(`You are Normal. And Your BMI =` + BMI.toFixed(3));    
    }
    else if(BMI >= 25){
        document.write('You are Over Weight. And Your BMI =' + BMI.toFixed(3));
    }
    else{
        document.write( 'You are obese. And Your BMI =' + BMI.toFixed(3));
    }
}

/***
Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
function forResult(){
    let score = parseFloat(prompt(`Enter Your one sub Number :`));

    if(score >= 90 && score <= 100){
        document.write(`Your grade in this subject : A` );
    }
    else if(score >= 80 && score <= 89){
        document.write(`Your grade in this subject : B` );
    }
    else if(score >= 70 && score <= 79){
        document.write(`Your grade in this subject : c` );
    }
    else if(score >= 60 && score <= 69){
        document.write(`Your grade in this subject : D` );
    }
    else if(score >= 0 && score <=59){
        document.write(`Your grade in this subject : F` );
    }
    else if(score < 0 || score > 100){
        document.write(`Your Number is invalid.`);
    }
}

/***
if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/
function forInvitation(){
    let myNumber = parseFloat(prompt(`Enter Your one sub Number :`));
    let friend_number = parseFloat(prompt(`Enter Your friend one sub Number :`));
    
    if( friend_number >= 80){
        document.write(`Lets go to lunch`)
    }
    else if( friend_number < 80 || friend_number >= 60){
        document.write(`Good luch next time.`)
    }
    else if( friend_number < 60 || friend_number >= 40){
        document.write(`keep your friend's message unseen.`)
    }
    else if( friend_number <= 40){
        document.write(`block your friend`)
    }
    else if(myNumber < 80){
        Document.write(`ami o kom paici bro`)
    }
}
