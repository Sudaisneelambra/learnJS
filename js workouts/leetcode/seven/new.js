
var mergeTwoLists = function(list1, list2) {


    let a=[]
    let b=[]

    if (list1 === null) {
        return list2;
    }

    if (list2 === null) {
        return list1;
    }

    for(i=0;i<list1.length;i++)
    {
        b.push(list1[i])
        console.log(b);
      
    }
    for(i=0;i<list2.length;i++)
    {
        b.push(list2[i])
      
    }

    console.log(b);
    

    var len = b.length;
    var swapped;

    do {
        swapped = false;

        for (var i = 0; i < len - 1; i++) {
            if (b[i] > b[i + 1]) {
                var temp = b[i];
                b[i] = b[i + 1];
                b[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    

    return b
    
};

console.log(mergeTwoLists([1,2,1,0,6,3,1],[3,6]));

// console.log(mergeTwoLists([1,2,4],[1,3,4]));


