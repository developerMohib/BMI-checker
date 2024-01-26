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