



// function x(){
//     var a=10
//     function y(b){
//         console.log(b+2);
//     }
//     return y
// }


// //  var z=x()()
// x()(9)
// //   console.log(z);
// //   z()





var addDigits = function(num) {
    while (num >= 10) {
        var sum = 0;

        
        while (num > 0) {
            sum =sum+ num % 10;
            num = ~~(num / 10);
        }

        num = sum;
    }
    return num 
};

console.log(addDigits(385));
