Array.prototype.filter = function (callback) {
    const newArray = [];

    this.forEach(function(value, index, array) {
        if (callback(value, index, array)) {
            newArray.push(value);
        }
    })

    return newArray;
}

const a = [1,2,3];

console.log(a.filter(function(value){
    return (value % 2 == 0)
}))

// 167
// 105-920-7419