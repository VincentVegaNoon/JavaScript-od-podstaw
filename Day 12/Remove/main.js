const removeTask = (e) => {
    // e.target.parentNode.remove();
    // console.log(e.target.parentNode)
    // e.target.parentNode.style.textDecoration = "line-through";
    // e.target.remove()
    const index = e.target.dataset.key;
    document.querySelector(`li[data-key="${index}"]`).remove()
}

document.querySelectorAll('button[data-key]').forEach(item => item.addEventListener('click', removeTask))

// const arr = [34,219,109,2934,12,10,29];
// const oddNumbers = arr.filter((number)=> (number % 2));
// const evenNumbers = arr.filter((number)=> !(number % 2));

// const double = arr.map(number => number * 2);
// const people = arr.map(number => number + " osob");

// //forEach
// arr.forEach((number, index) => arr[index] = number * 2)