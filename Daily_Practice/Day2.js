/* update an array where each number in the array is decresaed by 10% */

let array=[20,30,40,50,99];

for(let i=0;i<array.length;i++){
    array[i]=array[i]-array[i]*10/100;
    console.log("Updated array element at index "+i+" is: "+array[i]);
}

console.log("Updated array is: "+array);