// function turnOn(callback) {
//     let a = 20;
//     setTimeout(() => {
//         console.log('turn on the tv');
//         callback(a);
//     }, 2000);
// }
// function remote(a, callback) {
//     setTimeout(() => {
//         console.log('take the remote');
//         console.log(a);
//         callback();
//     }, 2000);
// }

// function channel( callback) {
//     setTimeout(() => {
//         console.log('change the channel');
//         callback();
//     }, 2000);
// }
// function favourite(callback) {
//     setTimeout(() => {
//         console.log('watch your favourite series');
//         callback();
//     }, 2000);
// }



// turnOn(function (a) {
//     remote(a, function () {
//         channel(function () {
//             favourite( function () {
//                 console.log("favourite")
//             });
//         });
//     });
// });


// function lastCallback () {
//     console.log("favourite")
// }

// function favouriteCallback () {
//     favourite( lastCallback);
// }

// function  channelCallback () {
//     channel(favouriteCallback);
// }

// function turnOnCallback(a){
//     remote(a,channelCallback);
// }

// turnOn(turnOnCallback);


// let a=10

// console.log(a)

// function x(){
//     var a=20
//     console.log(a)
// }


// x()
// console.log(a)



