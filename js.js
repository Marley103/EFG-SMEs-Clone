const ps = document.querySelectorAll('.para7 span')
const psArr = Array.from(ps)
console.log(ps)
console.log(psArr)

psArr.forEach((el) => {
    el.addEventListener('click', myFunc)
})

function myFunc(event) {
    console.log(event.target.parentElement.parentElement)
    event.target.parentElement.parentElement.classList.toggle('expand')
}


