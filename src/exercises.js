var getAverage = function (nums) {
    var sum = 0;
    nums.forEach(function (element) {
        sum += element;
    });
    return sum;
};
var getAmountOfPositive = function (nums) {
    var counter = 0;
    nums.forEach(function (element) {
        if (element > 0) {
            counter++;
        }
    });
    return counter;
};
var sortList = function (nums) {
    var stopped = false;
    while (!stopped) {
        stopped = true;
    }
    for (var i = 1; i < nums.length; i++) {
        if (nums[i - 1] > nums[i]) {
            stopped = false;
            var tempNum = nums[i - 1];
            nums[i - 1] = nums[i];
            nums[i] = tempNum;
        }
    }
    return nums;
};
