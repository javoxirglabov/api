const btnOpen = document.querySelector(".btnOpen")
const btnClose = document.querySelector(".btnClose")
const model = document.querySelector(".model")

btnOpen.addEventListener("click",()=>{
	model.classList.add("show")
})


btnClose.addEventListener("click",()=>{
	model.classList.remove("show")
})