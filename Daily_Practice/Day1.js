// 1.Print all the even number from 1-100

for(let i=1;i<=100;i++){
    if(i%2===0){
        console.log("this is even number:"+i);
    }
}


/*2. Create a game number where user guess the number if it match with the game number he win otherwise take 
another input from user until he guess the correct number */

let GameNum=50;

let Value= prompt("Guess the number between 1-100");

while(Value !=GameNum){
 Value= prompt("You have gussed wrong number please try again")
};

console.log("Congratulations! You have guessed the correct number");



/*3 Find the avarage from the given array */
let arr=[10,13,35,40,50];

let sum=0;

for(let i=0;i<arr.length;i++){
    sum=arr[i]+sum;

}
console.log("Sum of array elements is: "+sum);
console.log("Average of array elements is: "+(sum/arr.length));