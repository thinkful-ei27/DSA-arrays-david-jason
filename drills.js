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

 function mergeArray(arr1, arr2) {
  let temp = [];
  let length = 0;
  if (arr1.length > arr2.length) {
    length = arr1.length
  } else if (arr1.length < arr2.length){
    length = arr2.length;
  } else {
    length = arr1.length
  }

  for(let i =0; i < length; i++){
    if (arr1[i] > arr2[i]) {
      temp.push(arr2[i])
      temp.push(arr1[i])
    } else if (arr1[i] < arr2[i]) {
      temp.push(arr1[i])
      temp.push(arr2[i])
    } else if(arr1[i] === arr2[i]) {
      temp.push(arr1[i])
      temp.push(arr2[i])
    } else if (arr1[i] === undefined) {
      temp.splice(temp.length - 1, 0, arr2[i] )
    } else if (arr2[i] === undefined) {
      temp.splice(temp.length - 1, 0, arr1[i] )
    }
  }
  return temp;
}

// console.log(noSpace('The Wild Things'))
//console.log(filterArray([1,2,3,4,5,6,7,8,9]))
// console.log(maxSum([4,6,-3,5,-2,1]));
console.log(mergeArray([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]))