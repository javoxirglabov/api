const btn1 = document.querySelector('#btn-1')
const btn2 = document.querySelector('#btn-2')
const num1 = document.querySelector('#num-1')
const num2 = document.querySelector('#num-2')
const score1 = document.querySelector('#score-1')
const score2 = document.querySelector('#score-2')

let summ1 = []
let summ2= []
btn1.addEventListener('click', () => {
	RandomNum = Math.round(Math.random() * 10)
	num1.innerHTML = RandomNum
	let res = 0
	summ1.push(RandomNum)
	

	for (let i = 0; i < summ1.length; i++) {
		res += summ1[i]
		score1.innerHTML = res
		if (res >= 100) {
			score1.innerHTML = 'winner'

			
		}
	}
})

btn2.addEventListener('click', () => {
	RandomNum = Math.round(Math.random() * 10)
	num2.innerHTML = RandomNum
	let res = 0
	summ2.push(RandomNum)
	

	for (let i = 0; i < summ2.length; i++) {
		res += summ2[i]
		score2.innerHTML = res
		if (res >= 100) {
			score2.innerHTML = 'winner'

			
		}
	}
})
