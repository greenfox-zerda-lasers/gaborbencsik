// open függvény
// ajax (osztály) objektum -> CRUD (Create, read, update and delete)
//
//
//
//
//

// window.addEventListener('load', );



var request = new XMLHttpRequest();
var todoList = [];

var button = document.querySelector('button');
var trash = document.querySelectorAll('.ion-ios-trash-outline');
var checkbox = document.querySelectorAll('.checkbox');

button.addEventListener('click', postTask);

trash.forEach(function (e, i) {
  trash[i].addEventListener('click', deleteTask);
});

checkbox.forEach(function (e, i) {
  checkbox[i].addEventListener('click', changeTaskStatus);
});


function postTask () {
  console.log('clicked');
}

function deleteTask () {
  console.log('deleted');
}

function changeTaskStatus () {
  console.log('changed');

}


// request.open('GET', 'https://mysterious-dusk-8248.herokuapp.com/todos', true);
// request.send(null);

request.onreadystatechange = function (response) {
  console.log(response);
  var todoData;
  if (request.readyState === XMLHttpRequest.DONE) {
    todoData = JSON.parse(request.response);
    // getTaskList(todoData)
    console.log(todoData);
  }
};

// function getTaskList (todo) {
//   todo.response
// }



var post = new XMLHttpRequest();
