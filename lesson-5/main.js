const tel  =document.querySelector(".tel")
const btn  =document.querySelector(".btn")

const tel_numbers = [
	"+998 99 402 68 60",
	"+998 95 004 74 44",
	"+998 95 002 10 22",
	"+998 94 005 03 55",
	"+998 99 140 82 88",
	"+998 93 947 33 20"
]

function randomTel() {
	offset++
	btn.setAttribute("dislabled" , true)
	let interval = setInterval(()=>{
		let randomNumber = Math.floor(Math.random() * tel_numbers.length)
		tel.innerHTML = tel_numbers[randomNumber]
	}, 100)
	setTimeout(()=>{
		clearInterval(interval)
	}, 2000)
}