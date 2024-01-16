let n=5
let l=0

for(i=1;i<=n;i++)
{
    let p=0
    l=0
    let kin=" "
    let sin=""
    for(j=i;j<n;j++)
    {
        sin=sin+kin
    }
    // console.log(sin);
 
    for(m=1;m<=i;m++)
    {
 
        result =i+l
        sin=sin+result
        l++
       
    }
    for(l=2;l<=i;l++)
    {
       
        sin=sin+--result
    
    }
 

    console.log(sin);
}