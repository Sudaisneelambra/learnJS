
let loo=0
let man="HELLOW"


for(i=0;i<man.length;i++)
{
    sin=""
    for(j=0;j<=i;j++)
    {
        sin=sin+man[j]
    }
    console.log(sin);
}
for(i=0;i<man.length;i++)
{
    sin=""
    for(j=i,loo=0;j<man.length-1;j++ , loo++)
    {
        
        sin=sin+man[loo]
   
   
    }
    console.log(sin);
}