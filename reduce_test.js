arr = [1,2,3,4];

Array.prototype.reduce = function (callback, currVal){
    let i = 0;

    if (currVal === undefined){
        currVal = this[0];
        i = 1;
    }

    for (i; i < this.length; i++){
        currVal = callback(currVal, this[i]);
    }
   
    return currVal;
}

console.log(arr.reduce(function (sum, val){
    return sum + val;
}, 10));
