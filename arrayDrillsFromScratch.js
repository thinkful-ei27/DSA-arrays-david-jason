import { Memory } from './memory'

class Array {
  constructor(){
    this.length=0,
    this._capacity=0,
    this.ptr= Memory.allocate(this.length)
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
   return memory.get(ptr + index)
  }


  
}
Array.SIZE_RATIO=3;