const input = document.querySelector('.input')
const addBtn = document.querySelector('.add-btn')
const removeBtn = document.querySelector('.remove-btn')
const ul = document.querySelector('ul')
const body = document.querySelector('body')


// LocalStorage and sessionStorage
// JSON.parse мурдагы абалына алып келип берет
// JSON.stringify

// localStorage.setItem('task', JSON.stringify([{id:1, title:'go to school'},
//     { id:2, title:'go to office',isDone: false}]))

function view(){
    const tasks = JSON.parse(localStorage.getItem('task')) || []
    let allList = ''
    tasks.map(el => {
        allList += `<li class="list-group-item">${el.title}</li>`
    })
    ul.innerHTML = allList
}

addBtn.addEventListener('click',()=>{
    let tasks = JSON.parse(localStorage.getItem('task')) || []
    const newList = {
        id:tasks.length ? tasks[tasks.length -1].id + 1 : 1,
        title: input.value,
        isDone: false
    }
    tasks = [...tasks,newList]
    localStorage.setItem('task',JSON.stringify(tasks))
    view()
})

view()











// addBtn.addEventListener('click', () => {
//    addList()
//     body.style.background = randomColor()
// })
//
// body.addEventListener('click',()=>{
//   addBtn.background = randomColor()
// })
//
// function  randomColor(){
//     let color = '#'
//     for (let i = 0; i < 6; i++){
//         color += Math.round(Math.random()*10)
//     }
//     return color
// }
//
// removeBtn.addEventListener('click',() => {
//     ul.innerHTML = ''
// })
//
// input.addEventListener('keydown', (e) =>{
//     switch (e.key){
//         case 'Enter' : addList()
//     }
// })
// // input.addEventListener('keydown',()=>{
// //     if ()
// // })
// function addList (){
//     if (input.value !== "") {
//         let newList =`<li class="list-group-item d-flex justify-content-between">${input.value}
//         <button class="del-btn btn-danger">delete</button></li>`
//         input.value = ''
//         ul.innerHTML += newList
//     }
//     // prompt()
// }
// ul.addEventListener('click',(event)=>{
//     if (event.target.classList.contains('del-btn')){
//         event.target.parentNode.remove()
//     }
// })

