a=[2,5,6,8,8,9,6,6,3,3,1]


console.log(a);

for(i=0;i<a.length;i++)
{
    if(a[i]==a[i+1])
    {
        a[i+1]=0
    }
    a[i]=a[i]*2
}

console.log(a);

zro=0

for(i=zro;i<a.length;i++)
{
    if(a[i]!=0)
    {
        a[zro]=a[i]
        zro++
       
    }
}

for(i=zro;i<a.length;i++)
{
    a[i]=0
}
console.log(a);