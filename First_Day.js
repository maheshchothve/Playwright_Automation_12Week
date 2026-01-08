
const product ={
     title :"Parkar pen",
     rating :4.5,
     offer:5,
     prize:270
};

console.log("Product Title: " + product.title);

for(let key in product){
    console.log(key+":"+product[key]);
}

let a="abcd";
 let string=a+123;
console.log(string);

//Arthmatic operators:
let c=10;
let b=4;
console.log("Addition: " + (c+b));
console.log("Subtraction: " + (c-b));
console.log("Multiplication: " + (c*b));
console.log("Division: " + (c/b));
console.log("Modulus: " + (c%b));
console.log("Exponentiation: " + (c**b));

//comaprison operators:
console.log("Is c equal to b: " + (c==b));
console.log("Is c not equal to b: " + (c!=b));
console.log("Is c greater than b: " + (c>b));
console.log("Is c less than b: " + (c<b));
console.log("Is c greater than or equal to b: " + (c>=b));
console.log("Is c less than or equal to b: " + (c<=b));

/*prompt is used to take input from user in browser environment */
let number=prompt("Enter a number");

if(number%5===0){
    console.log(number +"is multiple of 5");
}else{
    console.log(number +"is not a multiple of 5");
}
/*for-loops */
for(let i=1;i<=5;i++){
    console.log("My name is Mahesh");
}