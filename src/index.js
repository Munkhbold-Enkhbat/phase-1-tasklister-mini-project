document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  // form.appendChild(selectTag())
  handleTask(form)
});

function createNewTask(newTask) {
  const li = document.createElement('li')
  const btn = document.createElement('button')

  deleteTask(btn)

  btn.textContent = 'X'
  li.textContent = `${newTask}  `
  document.querySelector('ul').appendChild(li).appendChild(btn)  
}

function deleteTask(element) {
  element.addEventListener('click', (e) => {
    e.target.parentNode.remove()
  })
}

function handleTask(element) {
  element.addEventListener('submit', (e) => {
    e.preventDefault()
    const newTask = e.target['new-task-description'].value
    createNewTask(newTask)
    element.reset()
  })
}

// function selectTag() {
//   const select = document.createElement('select')
//   const colors = ['', 'red', 'yellow', 'green']
//   for(let color of colors) {
//     let option = document.createElement('option')
//     option.textContent = color
//     option.style = `background-color:${color}`
//     select.appendChild(option)
//   }
//   return select
// }