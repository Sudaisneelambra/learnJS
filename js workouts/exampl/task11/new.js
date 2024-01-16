let n=70
let con=65
for(i=65;i<=n;i++)
{
    let sin=''
    for(j=65;j<=i;j++)
    {
        sin=sin+String.fromCharCode(con++)
    }
    console.log(sin);
}