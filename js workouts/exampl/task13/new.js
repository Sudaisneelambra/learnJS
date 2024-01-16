let n=7


let i=1
    while(i<=n)
    {
        let sin=''
        for(j=1;j<=i;j++)
        {
            sin=sin+'*'
        }

    console.log(sin);
    i=i+1

    if(i>n)
    {
        
        for(c=n;c>0;c--)
    {
        let sin=''
        for(k=c;k>0;k--)
        {
            sin=sin+'*'
        }

        console.log(sin);
    }

    }
}
