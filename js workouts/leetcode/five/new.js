s="sudais man"
function pal(s) {
    let a=[]
    a=s.split('')
    console.log(a);

    m=[]
    console.log(a.length);

    for(i=a.length-1;i<=0;i--)
    {
        
        if(a[i]=='s')
        {
            m.push(a[i])
        }

    }

};

pal(s)

console.log(pal(s));