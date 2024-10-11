const display1 = document.querySelector('.card1')
const display2 = document.querySelector('.card2')
const display3 = document.querySelector('.card3')
const btn = document.querySelector('.btn')

let arr = ['tosh', 'qaychi', "qog'oz"]

function donDonZiki(params) {
	let arrRandom1 = Math.floor(Math.random() * arr.length)
	let arrRandom2 = Math.floor(Math.random() * arr.length)
	display1.innerHTML = arr[arrRandom1]
	display2.innerHTML = arr[arrRandom2]
	if (arr[arrRandom1] == 'tosh' && arr[arrRandom2] == 'qaychi') {
		display3.innerHTML = ' tosh yuttdi'
	} else if (arr[arrRandom1] == 'tosh' && arr[arrRandom2] == "qog'oz") {
		display3.innerHTML = " qog'oz yuttdi"
	} else if (arr[arrRandom1] == 'tosh' && arr[arrRandom2] == 'tosh') {
		display3.innerHTML = ' durrang'
	}

	if (arr[arrRandom1] == 'qaychi' && arr[arrRandom2] == 'qaychi') {
		display3.innerHTML = ' durrang'
	} else if (arr[arrRandom1] == 'qaychi' && arr[arrRandom2] == "qog'oz") {
		display3.innerHTML = ' qaychi yuttdi'
	} else if (arr[arrRandom1] == 'qaychi' && arr[arrRandom2] == 'tosh') {
		display3.innerHTML = ' tosh yuttdi'
	}

	if (arr[arrRandom1] == "qog'oz" && arr[arrRandom2] == 'qaychi') {
		display3.innerHTML = ' qaychi yuttdi'
	} else if (arr[arrRandom1] == "qog'oz" && arr[arrRandom2] == "qog'oz") {
		display3.innerHTML = ' durrang'
	} else if (arr[arrRandom1] == "qog'oz" && arr[arrRandom2] == 'tosh') {
		display3.innerHTML = " qog'oz yuttdi"
	}
}
