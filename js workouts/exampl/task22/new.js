let n=5
for(i=1;i<=n;i++)
{
      let sin=""
    for(j=1;j<=i;j++)
    {
        if(j%2==1)
        {
            sin=sin+"*>"
        }
        else
       {
            sin=sin+"*"
        }
    }
    console.log(sin)

}
for (i = n - 1; i >= 1; i--) {
      let sin = "";
      for ( j = 1; j <= i; j++) 
      {
          if (j % 2 == 1) 
          {
              sin = sin + "*>";
          } 
          else
           {
              sin = sin + "*";
          }
      }
      console.log(sin);

}