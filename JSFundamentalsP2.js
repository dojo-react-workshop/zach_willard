const JSFund2 = {
    
    sumAllInts : function(x, y){
        let sum = 0;
        while (x <= y){
            sum += x++;
        }
        console.log(sum);
    },
    minArr : function(arr) {
        let min = arr[0];
        for (let i = 0; i < arr.length; i++) {
            (arr[i] < min) ? min = arr[i] : 0;
        }
        return min;
    },
    sumAllInts : function(x, y){
        let sum = 0;
        while (x <= y){
            sum += x++;
        }
        console.log(sum);
    },
    avgOfArr :function(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum / arr.length;
    }
}


JSFund2.sumAllInts(1,50);
const x = [1, 5, 90, 25, -3, 0];
console.log(JSFund2.minArr(x));    
console.log(JSFund2.avgOfArr(x));

const person = {
    name: "Zach",
    distance_travelled:0,
    say_name: function(){
        console.log(name);
    },
    say_something: function(something){
        console.log(`${this.name} says ${something}`);
    },
    walk: function(){
        console.log(`${this.name} is walking`);
        this.distance_travelled += 3;
    },
    run: function(){
        console.log(`${this.name} is running`);
        this.distance_travelled += 10;
    },
    crawl: function(){
        console.log(`${this.name} is crawling`);
        this.distance_travelled += 1;
    }
};

person.say_something("hi");
person.walk();
person.run();
person.crawl();

console.log(person.distance_travelled);