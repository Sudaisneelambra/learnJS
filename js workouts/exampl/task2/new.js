let a=[2,7,9,5,3,6,5]
for(i=0;i<a. length;i=i+2)
{
    a[i]=a[i]*2
    if(!(i===a. length-1&&a. length%2==1))
    {
        a[i+1]=0
    }
}  
   b=[]
   zro=0
  for(i=zro;i<a. length;i++)
  {
      if(a[i]!=0)
      {
          b[zro]=a[i]
          zro++
      }
   }
  for(i=zro;i<a. length;i++)
  {
      b[i]=0
  }
console. log(a, b)