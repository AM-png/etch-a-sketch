let container = document.querySelector('.container')

let button = document.createElement('button')
button.textContent = 'Click for prompt'
document.querySelector('body').insertBefore(button, container)
document.querySelector('body').style.cssText = "display:flex; flex-direction: column; align-items: center; margin: 20px"

document.querySelector('button').addEventListener('click', () => {
    button = prompt("input numbre of squares from 1 - 100")
    for (let i = 1; i <= button && i < 101; i++) {
        let column = document.createElement('div')
        for (let j = 1; j <= button && j < 101; j++) {
            let row = document.createElement('div')
            row.style.cssText = "background: honeydew; height: 15px; width: 15px"
            container.style.cssText = "margin: 20px auto; display:flex; flex-wrap: wrap; border: 1px solid black; box-shadow: 0 0 5px #888888"
            column.appendChild(row)
        }
        container.appendChild(column)
    }
    document.querySelectorAll('div').forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = "coral"
        })
    })
})