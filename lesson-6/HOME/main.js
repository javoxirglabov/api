function getElement(selector, parent = document) {
	return parent.querySelector(selector)
}
const logName = document.querySelector('#name-log')
const logSurName = document.querySelector('#name-sur-log')
const form = document.querySelector('.login')
const regPanel = document.querySelector('.box')
const p = document.querySelector('#p')
const p1 = document.querySelector('#p1')
const blur = document.querySelector('.blur')
const userName = document.querySelector('#user-name')
const chats = document.querySelector('.chats')
const template = document.querySelector('template')

let malumotlar = [
	{
		id: 'chat1',
		fullName: 'kamala Harris',
		img: './Images/woman.png',
	},
	{
		id: 'chat2',
		fullName: 'Jo Bayden',
		img: './Images/man.png',
	},
	{
		id: 'chat3',
		fullName: 'Donald Tramp',
		img: './Images/man.png',
	},
	{
		id: 'chat4',
		fullName: 'Uinston Cherchil',
		img: './Images/man.png',
	},
	{
		id: 'chat5',
		fullName: 'Vladimir Zelinskiy',
		img: './Images/man.png',
	},
	{
		id: 'chat6',
		fullName: 'Laylo',
		img: './Images/woman.png',
	},
	{
		id: 'chat7',
		fullName: 'Vladirmir Putin',
		img: './Images/man.png',
	},
	{
		id: 'chat8',
		fullName: 'Barak Obama',
		img: './Images/man.png',
	},
	{
		id: 'chat9',
		fullName: 'Odil Axmedon',
		img: './Images/man.png',
	},
	{
		id: 'chat10',
		fullName: 'Jorj Bush',
		img: './Images/man.png',
	},
	{
		id: 'chat11',
		fullName: 'Elizavetta',
		img: './Images/woman.png',
	},
	{
		id: 'chat12',
		fullName: 'Garri potter',
		img: './Images/man.png',
	},
]

let newObj = { name: '', surName: '' }
form.addEventListener('submit', e => {
	e.preventDefault()
	newObj.name = logName.value
	newObj.surName = logSurName.value

	regPanel.classList.remove('show')
	blur.classList.remove('show')
	blur.remove()
	userName.innerHTML = newObj.name + ' ' + newObj.surName
})

chats.innerHTML = malumotlar
	.map(user =>
			`<div class="chat" id="${user.id} ">
	<img src="${user.img}" alt="image" class="chat_logo" />
	<p class="chat_name">${user.fullName}</p>
	</div>
	`
	).join('')

const chat = document.querySelector('.chat')
const navOthers = document.querySelector('.nav__others')

chat.addEventListener('click', () => {
	let createLogo = document.createElement('img')
	createLogo.src = "./Images/woman.png"
	console.log(createLogo);
	let newLogo = document.querySelector
	navOthers.append(newLogo)
	console.log(navOthers)
})
