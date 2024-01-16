

let n=5
let str="*"
for(i=1;i<=n;i++)
{
    let kin=" "
    let sin=""
    let str="*"
    for(j=i;j<n;j++)
    {
        sin=sin+kin
    }
    // console.log(sin);
    for(m=1;m<=i;m++)
    {
        sin=sin+str
    }

    console.log(sin);
}