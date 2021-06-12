const board = document.querySelector('#board')
const colors = ['#aa98a9', '#f6768e', '#0a4500','#1a153f','#8e44ad', '#30626b', '#e67e22', '#adff2f']
const SQUARES_NUMBER = 500;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', setColor)
    square.addEventListener('mouseleave', removeColor)

    

    board.append(square)
}

function setColor (e){
    const element = e.target
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor (e){
    const element = e.target
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}