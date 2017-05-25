const myObj = {
    add : (num1, num2) => {
        return num1 + num2;
    },
    multiply : (num1, num2) => {
        return num1 * num2;
    },
    square : (num1) => {
        return num1 * num1;
    },
    random : (num1, num2) => {
        return (Math.round(Math.random() * (num1 - num2) * -1) + num1);
    }
};

module.exports = myObj;