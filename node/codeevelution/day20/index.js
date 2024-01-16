

function great(name){
    console.log(`hellow may dear ${name}`);
}

function higherOrder(callback){
    let name="sudais neelambra"
    callback(name)
}

higherOrder(great)