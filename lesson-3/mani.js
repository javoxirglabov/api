// // prototype yani yangi method arraylarga qoshish  , prototype ozi arrayni yashirin xossasi

// // Array.prototype.summArr = function (){
// // 	let count = 0
// // 	this.forEach(item=>{
// // 		if(item%2==0){
// // 			count+=item
// // 		}
// // 	})
// // 	return count
// // }

// // console.log(arr.summArr(
// // ---

// let a = 1332
// let b = a.toString().split('').reverse().join('')
// console.log(b);
// if (a== b) {
// 	console.log("dw");
// }

// // function findPolindrome(numbers) {
// // let numbers = a.toString().split('').reverse().join('')

// // if (numbers) {
	
// // }
// // }


// // Number.prototype.findPolindrome = function(){

// // }


function Palindrome(num) { 

  let numToStringArray = num.toString().split('');
  let reversedArray = numToStringArray.reverse();


  if (num.toString().length<2) {
     return "It's a palindrome"
  }
  else { 
        for (let i = 0; i<numToStringArray; i++) {    
           if (numToStringArray[i] !== reversedArray[i]) {
             return "It's not a palindrome"
             }
            else {
                 return "It's a palindrome"
                 }
             }
        } 
}

Palindrome('212')