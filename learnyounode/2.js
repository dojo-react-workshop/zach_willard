let sum = 0;
for (let i = 2; i < process.argv.length; i++){
    if (!isNaN(process.argv[i])){
        // console.log(typeof process.argv[i])
        sum = sum + Number(process.argv[i]);
    }
}
console.log(sum);