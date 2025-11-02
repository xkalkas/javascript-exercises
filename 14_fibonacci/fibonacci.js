const fibonacci = function(num) {
    let a = 0;
    let b = 1;
    let c = 0;
    num = +num;
    if (num<0) return "OOPS"
    if (num===0) return 0;
    if (num===1 || num===2) return 1;
    for(let i=1; i<num; i++){
        c = a + b;
        a = b;
        b = c;
    }
    return c;
};

// Do not edit below this line
module.exports = fibonacci;
