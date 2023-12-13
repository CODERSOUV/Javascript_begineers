// function x(callback){
//     console.log(`hello`);   
// }
// function y(){
//     console.log(`world`);
//     return 10;
// }
// y();
// let x=function(a,b){
//     return a+b;
// }
// console.log(x(2,3));
// let x=(a,b)=>(a+b);
// console.log(x(2,4))

//Function with defualt parameter
// function greet(name="guest"){
//     console.log(`Hello ${name}`);
// }
// greet("new");
// function add(num1,num2){
//     return num1+num2;
// }
// console.log(add(2,3,4,5,6));
// function arr(nums){
//     console.log(nums);
// }
// nums=[1,2,3,4,5];
// arr(nums);
function add(){
    // console.log(arguments)
    const array=Array.from(arguments)
    console.log(array);
    const sum=array.reduce(function(acc,curr){
        return acc+curr;
    },0);
    return sum;
}

function h1(...numbers){
    console.log(numbers)
}
console.log(`Sum is ${add(2,3,4,5)}`);
h1(2,3,4,5);