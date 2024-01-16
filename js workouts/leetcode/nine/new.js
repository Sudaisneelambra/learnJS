var lengthOfLastWord = function(s) {
    let man=s.split(" ") 
    console.log(man);

    var king = man.filter(function(value) {
        return value !== "";
      });
    console.log(king);

    sin=king[(king.length-1)]
    console.log(sin);



    wrd=sin.split("")
    console.log(wrd);
    let count=0

    for(let i=0;i<wrd.length;i++)
    {
        count++
    }
    return count
 };

console.log(lengthOfLastWord("sudais anuz   "));