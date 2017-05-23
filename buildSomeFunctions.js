function runningLogger () {
    console.log("I am running!");
}

function multiplyByTen(value) {
    return value * 10;
}

console.log(multiplyByTen(5));

function stringReturnOne() {
    return "This is the first string";
}

function stringReturnTwo() {
    return "This is the second string";
}

function caller(param) {
    if (typeof param === 'function'){
        param();
    };
}

// caller(stringReturnTwo);

function myDoubleConsoleLog(param1, param2){
    if (typeof param1 === 'function'){
        console.log(param1());
    }
    if (typeof param2 === 'function'){
        console.log(param2());
    }
}

// myDoubleConsoleLog(stringReturnOne, stringReturnTwo);

function caller2(param){
    console.log('starting');
    setTimeout(function (){
        if (typeof param === 'function'){
            param();
        }
        console.log("ending?");
        return "interesting";
    },2000);
}

caller2(myDoubleConsoleLog);