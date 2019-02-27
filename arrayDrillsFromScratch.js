import Memory from '.Memory';

class Array {
  constructor(){
    this.length=0,
    this._capacity=0,
    this.ptr=memory.allocate(this.length)
  }

  push(value){
    if (this.length >= this._capacity){
      this._resize((this._capacity + 1)*3);
    }
    memory.set(this.ptr + this.length, value);
    this.length++;
  }
  
}
Array.SIZE_RATIO=3;