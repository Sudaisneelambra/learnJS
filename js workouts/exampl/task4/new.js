let a = [1, 2, 3, 4, 5, 6, 7];
let vandath = 60;
let evdkk= 3;

for (let i = a.length; i > evdkk; i--) {
    a[i] = a[i - 1];
}

console.log(a);
a[evdkk] = vandath;
console.log(a);

