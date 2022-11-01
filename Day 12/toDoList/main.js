const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');
const spn = document.querySelector('span');
const listElements = document.getElementsByClassName('task');
const searchInput = document.querySelector('.search')
 
 
let toDoList = [];
const generate = () => {
    toDoList.forEach((toDoElement, key) => {
        toDoElement.dataset.key = key;
        ul.appendChild(toDoElement);
    })
}
const removeTask = (e) => {
    e.target.parentNode.remove();
    const index = e.target.parentNode.dataset.key;
    toDoList.splice(index, 1)
    generate();
    spn.textContent = toDoList.length;
}
 
const addTask = (e) => {
    e.preventDefault();
    const titleTask = input.value;
    if (titleTask === "") return;
    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = `${titleTask}<button>Usuń</button>`;
    toDoList.push(task)
    generate();
    input.value = ""
    spn.textContent = toDoList.length;
    task.querySelector('button').addEventListener('click', removeTask)
}
const searchTask = (e) => {
    const searchText = e.target.value.toLowerCase();
    let tasks = [...listElements]
    tasks = tasks.filter(li => li.textContent.toLowerCase().includes(searchText));
    ul.textContent = "";
    tasks.forEach(li => ul.appendChild(li));
    if (searchText === "") {
        spn.textContent = toDoList.length
        generate();
    } else {
        spn.textContent = tasks.length;
    }
}
 
 
 
 
 
form.addEventListener('submit', addTask)
searchInput.addEventListener('input', searchTask)
