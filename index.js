const input = document.querySelector('#todo-input')
const list = document.querySelector('#todo-list')

const addToDo = () => {
    const todo = input.value
    if(todo === ''){
        alert('You may not add an empty string.')
        return
    }
    const li = document.createElement('li')
    li.innerHTML = todo
    const closeButton = document.createElement('button')
    closeButton.innerHTML = 'remove'
    closeButton.onclick = closeFunc
    li.appendChild(closeButton)
    list.appendChild(li)
}

function closeFunc() {
    const li = this.parentElement
    li.remove()
}

