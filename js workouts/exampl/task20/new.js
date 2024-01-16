let n=10
// let str="*"

for(i=1;i<=n;i++)
{
    // let sin=" "

    for(j=1;j<=n;j++)
    {
        if(i==1 || i==n ||j==1 ||j==n)
        {
          document.write("* ")
        }
        else{
            document.write("&nbsp &nbsp")
        }
    }
    document.write('<br>')

}

