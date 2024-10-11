// let arr = [5,-3,4,-2,-1]
// console.log(arr.filter(i=>i>0));
// {

// function foo(arr){
// return arr
// }
// console.log( foo([5,-3,4,-2,-1]))
// }




{

	function foo(obj) {
		for(let i in obj){
			obj[i].reduce((a,bц)=>a=b,0)
		}
		return obj
	}

	console.log( foo({a:5,b:3}));
	console.log( foo({a:5,b:3,c:1}));
}