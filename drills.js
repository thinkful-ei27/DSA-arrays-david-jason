'use strict';

function noSpace(str){
  let temp='';
  for(let i = 0; i < str.length; i++) {
  if (str[i] === ' ') {
    temp = temp + '%20'
  } else {
    temp = temp + str[i]
  }
 }
 return temp;}

 function filterArray(arr) {
  let temp = []
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] > 5) {
      temp.push(arr[i])
    }
  }
  return temp;
 }

 function maxSum(arr){
   let highest = 0;
   for(let i =0; i < arr.length-1; i++){
    if (arr[i]+arr[i+1]>highest){ 
      highest = (arr[i]+arr[i+1])
    };
   }
   return highest;
 }

// console.log(noSpace('The Wild Things'))
//console.log(filterArray([1,2,3,4,5,6,7,8,9]))
console.log(maxSum([4,6,-3,5,-2,1]));