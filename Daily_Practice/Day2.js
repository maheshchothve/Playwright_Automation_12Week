/* update an array where each number in the array is decresaed by 10% */

let array=[20,30,40,50,99];

for(let i=0;i<array.length;i++){
    array[i]=array[i]-array[i]*10/100;
    console.log("Updated array element at index "+i+" is: "+array[i]);
}

console.log("Updated array is: "+array);

/* Map , reduce and filter methods in javascript */

const testCases = [
  { id: 1, name: "Login", type: "smoke", status: "pass" },
  { id: 2, name: "Signup", type: "regression", status: "fail" },
  { id: 3, name: "Checkout", type: "smoke", status: "pass" },
  { id: 4, name: "Profile Update", type: "regression", status: "pass" }
];

// Using map to get an array of test case names
const TestcaseNames = testCases.map(testcases =>testcases.name);

console.log("test case names are:"+ TestcaseNames);

// Using filter to get all smoke test cases
const smokeTestcases = testCases.filter(testcases =>testcases.type==="smoke");
console.log("smoke test casea are:"+ JSON.stringify(smokeTestcases));

//pass vs fail test cases count
const passFailCount = testCases.reduce((acc, testcases) => {
  if (testcases.status === "pass") {
    acc.pass += 1;      
    
    } else if (testcases.status === "fail") {       

    acc.fail += 1;
  } return acc;
}, { pass: 0, fail: 0 });  

console.log("Pass vs Fail Test Cases Count:");
console.log("Pass: " + passFailCount.pass);
console.log("Fail: " + passFailCount.fail);

/*group test cases by type using reduce */
const testCasebyType = testCases.reduce((acc,testcase)=>{
    if(!acc[testcase.type]){
        acc[testcase.type]=[]
    } 
        acc[testcase.type].push(testcase);
       return acc;         
},{});
console.log("Test cases grouped by type:"+ JSON.stringify(testCasebyType));