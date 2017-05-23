var x = [3, 5, "Dojo", "rocks", "Michael","Sensei"];

for (var i = 0; i < x.length; i++){
    console.log(x[i]);
}

x.push(100);
x = x.concat(["hello", "world", "Javascript is Fun"]);
console.log(x);

var count = 0;
var sum = 0;
while (count <= 500){
    sum += count++;
}

console.log(sum);

var newArr = [1, 5, 90, 25, -3, 0];

var min = newArr[0];
for (var i = 0; i < newArr.length; i++) {
    (newArr[i] < min) ? min = newArr[i] : 0;
}

console.log(min);

var sum2 = 0;
for (var i = 0; i < newArr.length; i++) {
    sum2 += newArr[i];
}
console.log(sum2/newArr.length);

var newNinja = {
    name: 'Zach',
    profession: 'engineer',
    favorite_language: 'Javascript',
    dojo: 'NMDojo'
}

for (key in newNinja) {
    console.log(newNinja[key]);
}