const fibonacci = function(n) {
    let num = parseInt(n);
    if(num === 0) {
        return 0;
    }
    if(num === 1) {
        return 1;
    } 
    if (num < 0) {
        return "OOPS";
    }else {
        return fibonacci(num-1) + fibonacci(n-2);
    }
};

// Do not edit below this line
module.exports = fibonacci;
