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

console.log(noSpace('The Wild Things'));