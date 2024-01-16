let doll="$"
let n=7

for(i=1;i<=n;i++)
{
    let sin=""
    for(j=1;j<=i;j++)
    {
        console.log("*")
    }
   if(n!==i)
   {
        for(j=1;j<=i;j++)
    {
        sin=sin+doll
    }
    console.log(sin)
   }
}