// 51 CHI MISOL
// let arr = [1, 2, 3, 4, 5, 6, 67]

// if (arr.length % 2 == 0) {
// 	console.log(
// 		(arr[Math.floor(arr.length / 2 - 1)] + arr[Math.floor(arr.length / 2)]) /
// 			2 +
// 			" bu sonlarning o'rta arifmetiki"
// 	)
// 	console.log(
// 		arr[Math.floor(arr.length / 2 - 1)] + " bular arrayni o/'ratsidagi malumot "
// 	)
// 	console.log(
// 		arr[Math.floor(arr.length / 2)] + " bular arrayni o/'ratsidagi malumot "
// 	)
// } else {
// 	console.log(
// 		arr[Math.floor(arr.length / 2)] + " bu arrayni o/'ratsidagi malumot "
// 	)
// }
//  52
let products = [
	{ id: 6, name: 'Smarthpone', price: 12000, rating: 4.5, discount: 20 },
	{ id: 2, name: 'Acer', price: 12000, rating: 4.3, discount: 10 },
	{ id: 1, name: 'Mac book', price: 17000, rating: 4.7, discount: 40 },
	{ id: 4, name: 'HP', price: 21000, rating: 4.1, discount: 16 },
]

for(let i of products){
	console.log(i.id);
}