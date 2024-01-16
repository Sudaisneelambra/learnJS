let n=11
for(i=1;i<=n;i++)
{
    let sin=''
    kin=''
    for(j=1;j<=n;j++)
    {
        if(i==1 || i==n || j==1 ||j==n)
        {
            sin=sin+'*'
        }
        else if(parseInt(((n/2)+1))==i || parseInt(((n/2)+1))==j){
            sin=sin+'#'
        }
        else {
            sin=sin+'-'
        }
    }
    console. log(sin)
}