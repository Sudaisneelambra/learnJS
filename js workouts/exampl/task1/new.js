let a=[2,6,7,8,6,9,6,9,9]
let b=[]

// for(i=0,j=0,c=a.length-1;i<a.length/2;i++,j=j+2,c--)
// {
//     b[j]=a[i]
//     b[j+1]=a[c]
// }



// for(i=0,c=a.length-1;i<a.length/2;i++,c--)
// {
//     b[i*2]=a[i*1]
//     b[i*2+1]=a[c]
// }


// for(i=0;i<a.length/2;i++)
// {
//     b[i*2]=a[i]
//     b[i*2+1]=a[a.length-(i+1)]
// }


// for(i=0;i<a.length/2;i++)
// {
//     b[b.length]=a[i]

//     console.log(a[i]);

//     b[b.length]=a[a.length-(i+1)]

//     console.log(a[a.length-(i+1)]);
// }


for(i=0;i<a.length/2;i++)
{
    b[b.length]=a[i]
    
    if(!(i===parseInt(a.length/2) && a.length%2==1))  {
        b[b.length]=a[a.length-(i+1)]
    }
}


console.log(a);
console.log(b);