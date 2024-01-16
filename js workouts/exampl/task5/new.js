
let a=[2,5,7,5,6,7]

let b=[]

for(i=0;i<a.length;i++)
{
    if(a[i]%2==0)
    {
        if(a[i-1]==null && a.length!=1)
        {
            let c=0+a[i+1]
            b.push(c)
        }
        else if(a[i+1]==null && a.length!=1)
        {
            let c=a[i-1]+0
            b.push(c)
        }
       else if(a[i-1]==null && a[i+1]==null)
       {
            console.log("its a single number array");
       }
       else if(a.length!=1)
       {
           let c=a[i-1]+a[i+1]
           b.push(c)
       }
    }
}

console.log(b);

