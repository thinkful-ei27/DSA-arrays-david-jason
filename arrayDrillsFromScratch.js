const Memory = require('./memory.js');
const memory = new Memory();

class Array {
  constructor(){
    this.length = 0,
    this._capacity = 0,
    this.ptr = memory.allocate(this.length)
  }

  push(value){
    if (this.length >= this._capacity){
      this._resize((this._capacity + 1)*3);
    }
    memory.set(this.ptr + this.length, value);
    this.length++;
  }

  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = memory.allocate(size)
    if (this.ptr === null) {
      throw new Error('Out of memory');
    }
    memory.copy(this.ptr, oldPtr, this.length)
    memory.free(oldPtr);
    this._capacity = size;
  }

  get(index) {
    if(index < 0 || index >= this.length){
      throw new Error('Index Error');
    }
   return memory.get(this.ptr + index)
  }



}


function main(){

  Array.SIZE_RATIO = 3;

  //create an instance of the array class
  let arr = new Array();

  //add an item to the array
  arr.push('tauhida');

  console.log(get.arr[0]);
}
main();