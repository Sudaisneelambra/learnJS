let digits=[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,4]


// let sum=''
// let final=[]
// let rev=[]
// let rem=0
// let copy=0

// for(i=0;i<a.length;i++)
// {
//     sum=sum+a[i]
    
// }
// console.log(sum);
// console.log(typeof sum);

// let man= +sum



// console.log(man);

// console.log(typeof man);

// man=man+1

// // console.log(man);

// while(man!=0 && man>0) 
// {   
//     rem=man%10  
//     final.push(rem) 
//     man = parseInt(man / 10)
// }
// console.log(final);

// for(i=final.length-1;i>=0;i--)
// {
//     rev.push(final[i])
    
// }
// return rev


// console.log(man);
// console.log(final);
// console.log(rev);

// let digits=[9,9,9,9,9]



console.log(digits);

incrArr(digits)

function incrArr(digits){
    for(let i = digits.length - 1; i >= 0; i--) {
        if(digits[i] === 9) {
            digits[i] = 0
        }
        else {
            digits[i] += 1
            return digits
        }
    }
    
    return [1, ...digits]
}

console.log(digits);


// incrArr(digits)

// const sin = arr()
//  function arr(){
//     return 10
// }
// console.log(sin)
// console.log(arr())


count  = 0
function anon(){
    
    if(count === 1){
        return count
    }else{
        count++
       return anon()
    }
}
console.log("main",anon())