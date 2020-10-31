// function* gen() {
// 	console.log("a")
// }

// const g = gen()

function* gen(i) {
	yield i + 10
	yield i
	return 25
}

const g = gen(5)

console.log(g.next())
console.log(g.next())
console.log(g.next())
