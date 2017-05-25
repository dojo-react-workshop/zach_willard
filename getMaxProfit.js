function getMaxProfit (arr) {
    var buyprice = arr[0];
    var profit = arr[1] - arr[0];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] - buyprice > profit){
            profit = arr[i] - buyprice;
        }
        if (arr[i] < buyprice) {
            buyprice = arr[i];
        }
    }
    return profit;
}

arr = [14,3,5,2,1,19,2];
console.log(getMaxProfit);