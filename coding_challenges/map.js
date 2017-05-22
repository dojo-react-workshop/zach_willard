Array.prototype.map = function (callback) {
    const newArray = [];

    this.forEach(function(value, index, array) {
        newArray.push(callback(value, index, array));
    })

    return newArray;
}

const a = [1,2,3];

console.log(a.map(function(value){
    return value * value;
}))