function createCounter(n) {

	let b=n
	function counter(){

			return b++
	

}

return counter

}
let man=createCounter(10)
console.log(man)

console.log(man())
console.log(man())
console.log(man())