document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  submitTask(form)
});

function handleNewTask(newTask) {
  const li = document.createElement('li')
  const btn = document.createElement('button')

  btn.addEventListener('click', (e) => {
    e.target.parentNode.remove()
  })
  
  btn.textContent = 'x'
  li.textContent = `${newTask}  `
  document.querySelector('ul').appendChild(li).appendChild(btn)  
}

function submitTask(element) {
  element.addEventListener('submit', (e) => {
    e.preventDefault()
    const newTask = event.target['new-task-description'].value
    handleNewTask(newTask)
    element.reset()
  })
}