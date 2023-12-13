let array=[1,2,3,5,6];
const val=array.reduce(function(acc,curr){
    return acc+curr;
},2);
console.log(val)
let newArr=[1,2,3,4];
newArr.splice(1,1,3);
console.log(newArr)