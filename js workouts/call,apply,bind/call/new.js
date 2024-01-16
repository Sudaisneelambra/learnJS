function x(place,work)
{
    console.log(`name is ${this.name} and class is ${this.class} and now he lives at ${place} he works at ${work}`)
}

let one={
    name:"sudais",
    class:10
}
x.call(one,"masanugudi","gundalpett")

