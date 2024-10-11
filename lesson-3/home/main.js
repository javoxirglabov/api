// // Quyidagi ko’rinishda object lardan tuzilgan array berildi. Agar read property true bo’lsa o’sha kitob o’qigan deb chiqarsin, aks holda o’qilmagan deb chiqarsin
// const books = [
// 	{ title: 'Halqa', author: 'Akrom Malik', read: false },
// 	{ title: 'Dunyoning shlari', author: '“O’tkir Hoshimov', read: true },
// 	{ title: 'Iymon', author: 'Shayx Muhammad Sodiq Muhammad Yusuf', read: true },
// ]
// // 1. Akrom Malik ning Halqa kitobi o’qilmagan
// // 2. O’tkir Hoshimov ning Dunyoning ishlari kitobi o’qilgan
// // 3. Shayx Muhammad Sodiq Muhammad Yusuf hazratlarining Iymon kitobi o’qilgan

// for (let i of books) {
// 	// console.log(i.read)
// 	if (i.read == true) {
// 		console.log(i.author + ':' + ' oqilgan')
// 	}else{
// 		console.log(i.author + ':' + ' oqilmagan')
// 	}
// }
// -------------------
// 42 chi misol

// let arr = ['laptop', 'phone', 'electrocar', 'airplane']
// let obj = {}
// for (let i in arr) {
// 	obj[arr[i]] = arr[i].length
// }
// console.log(obj);
// -------------------
// // 43
// // Qiymatlari sonlardan iborat bo’lgan object berilgan. Qiymatlarini n martaga ochiruvchi dastur tuzing
// // Input: n = 3,  const obj = {a: 2, b: 3, c: 4}
// // Output: const res = {a: 6, b: 9, c: 12}

// let obj = {a:3,b:4,c:5,d:6}
// let result  ={}
// //  n -> ixtiyoriy son kiriting
// let n = 4

// for(let i in obj){
// 	result[i]= obj[i]*n}
// 	console.log(result);
// -------------------
// 44
function daraja(n) {
	let result = [];
	for (let i = 1; i <= n; i++) {
			result.push(2 ** i); }
	return result;
}

console.log(daraja(5)); 
// -------------------
// 45
// Arraydagi bir xil so’zlar sonini hosil qiluvchi obyekt yarating
// Input: const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
// Output: {dog: 2, chicken: 3, cat: 1, rabbit: 1}
// let animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];


// const res = animals.reduce((acc, animal) => {
//     acc[animal] = (acc[animal] || 0) + 1;
//     return acc;
// }, {});

// console.log(res);



// 46
// Array elementlari kvadratlaridan hosil bo’lgan array hosil qiling.
// Input: [1, 2, 3, 4, 5]
// Output: [1, 4, 9, 16, 25]

// let arr = [1, 2, 3, 4, 5]
// newArr = arr.map((item)=> Math.pow(item, 2))
// console.log(newArr);
// -------------------
// 47
// Arraydagi musbat sonlar yig’indisini hisoblang. (filter va reduce)
Input: [1, -4, 12, 0, -3, 29, -150]
Output: 42

// let item = [1, -4, 12, 0, -3, 29, -150]

// let sumNumbers = item.filter(num => num > 0).reduce((acc, num) => acc + num, 0)
// console.log(sumNumbers)
// -------------------
// // 48
// // Stringdagi so’zlarning bosh harflarini oling. (split, map, join)
// // Input: 'George Raymond Richard Martin'
// // Output: 'GRRM'

// let str ='George Raymond Richard Martin'

// let arr = str.split(' ')
// let arrMap= arr.map((x) => x.charAt(0));
// let newStr = arrMap.join("")
// console.log(newStr);
// -------------------
// 49

// Arraydagi eng yosh va eng qarilarni topib, ularni yoshlarini farqini toping. (sort).
// Input: [
// {name: 'John', age: 13},
// {name: 'Mark', age: 56},
// {name: 'Rachel', age: 45},
// {name: 'Nate', age: 67},
// {name: 'Jeniffer', age: 65}
// ];
// Output: 54

// let arr = [
// 	{ name: 'John', age: 13 },
// 	{ name: 'Mark', age: 56 },
// 	{ name: 'Rachel', age: 45 },
// 	{ name: 'Nate', age: 67 },
// 	{ name: 'Jeniffer', age: 65 },
// ]
// let newArr = []
// for (i of arr) {
// 	newArr.push(i.age)
// }
// newArr.sort()
// res = newArr.at(-1) - newArr[0]
// console.log(res)
// -------------------