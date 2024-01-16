


let n= 5

let space=" "
let star="*"
for(i=1;i<=n;i++)
{
    console.log(space.repeat((n-i))+star.repeat(i*2-1));
}
for(i=n;i>=0;i--)
{
    console.log(space.repeat((n-i))+star.repeat(i*2-1));
}