var x=123

let copy=x
    var sum=0
    while(copy>0)
        {
            let rem=copy%10;
            sum=sum*10+rem 
            copy=~~(copy/10)
        }
    
        if(sum==x)
        console.log(true);
    else
    console.log(false);
