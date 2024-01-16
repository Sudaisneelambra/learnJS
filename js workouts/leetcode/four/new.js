function sqr(para){
    let sin = 0;
    while((sin * sin) <= para) 
    {
        sin++;
      
    }
    return sin - 1;
}

console.log(sqr(15));