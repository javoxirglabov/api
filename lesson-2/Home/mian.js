// //// 30 chi misol

// let numbers = +prompt("raqamlarni kiriting").toString().split("").reverse().join("")

// console.log(numbers);

// // // 31 chi misol

// let arr = ['laptop', 'phone', 'electrocar', 'airplane']
// let obj = {}
// for (let i in arr) {
// 	obj[arr[i]] = arr[i].length
// }
// console.log(obj);

// 32 chi misol
// Gapdagi eng uzun va eng qisqa so’zlarni aniqlab {minWord: “…”, maxWord: “….”} qiymat qaytaruvchi
//minManWord() nomli function yarating
// Input: “Men dasturlash kursida o’qiyman”
// Output: {minWord: “Men”, maxWord: “dasturlash”}

// function LongShortWord(text) {
// 	let minMaxWords = {
// 		minWord: '',
// 		maxWord: '',
// 	}
// 	let words = text.split(' ')
// 	let longWord = ''
// 	let shortWord = words[0]

// 	for (let word of words) {
// 		if (word.length > longWord.length) {
// 			longWord = word
// 		} else if (word.length < shortWord.length) {
// 			shortWord = word
// 		}
// 	}

// 	minMaxWords.maxWord = longWord
// 	minMaxWords.minWord = shortWord
// 	console.log(minMaxWords)
// 	return minMaxWords
// }
// LongShortWord('Lorem ipsum dolor sit amet, consectetur adipisicing')

// 33 chi misol
// n natural soni berilgan 2 sonining dastlabki n ta darajasidan tashkil topgan arrayni qaytaruvchi
//getLevel(n) nomli function tuzing
// n: 4
// result : [2,4,8,16] 2 ning 1-darajasidan boshlanishi kerak va 4-darajasigacha
// n: 5
// result: [2,4,8,16,32] 2 ning 5-darajasi 32 bo’ganligi uchun 32 da tugayapti

// // function getLevelN(nums) {
// function findDegree(n, deg) {
// 	let arr = []
// 	let num = 1
// 	for (let i = 0; i < deg; ++i) {
// 		arr.push((num = num * n))
// 	}
// 	return  console.log(arr);
// }
// findDegree(3, 3)

// 34 sentence da berilgan uzunligi kalta sozni topish kerak

// function findShortWord(sentence) {
// 	let words = sentence.split(' ')
// 	let shortWord = words[0]

// 	for (let word of words) {
// 		word.length < shortWord.length ?shortWord=word:""
// 	}
// 	console.log(shortWord);
// 	return shortWord
// }
// findShortWord("Lorem ipsum dolor sit amet, consectetur adipisicing.")

// 35
// Qiymatlari sonlardan iborat bo’lgan object berilgan. Qiymatlarini n martaga ochiruvchi dastur tuzing
// Input: n = 3,  const obj = {a: 2, b: 3, c: 4}
// Output: const res = {a: 6, b: 9, c: 12}

// let obj = {a:3,b:4,c:5,d:6}
// let result  ={}
// //  n -> ixtiyoriy son kiriting
// let n = 3

// for(let i in obj){
// 	result[i]= obj[i]*n}
// 	console.log(result);


// // 37
let numbers = [1, 3, 4, 5, 11]
let summ = 0
for (let i of numbers) {
	summ += i
}
console.log(summ)
let newStr = summ.toString()
console.log(newStr)
let newArr = newStr.split('')
console.log(newArr)

