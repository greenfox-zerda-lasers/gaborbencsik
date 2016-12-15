// open függvény
// ajax (osztály) objektum -> CRUD (Create, read, update and delete)
//
//
//
//
//


function App () {

  this.init = function () {
    this.ajax = new Ajax ();
    console.log(this);
    this.ajax.sendGetRequest(this.renderList.bind(this));
    // window.addEventListener('load', this.addEvents);
    this.addEvents();

  };

  this.postTask = function postTask () {
    console.log('clicked');
    console.log(this);
    this.ajax.sendPostRequest(this.input.value);

  };

  this.deleteTask = function (event) {
    console.log(event);
    console.log('deleted');
    this.ajax.sendDeleteRequest(event.target.previousElementSibling.id);
    // document.parentNode.removeChild(event.target);

  };

  this.changeTaskStatus = function (event) {
    console.log(event);
    console.log('changed');
    changeCheckboxUi(event);
    // this.ajax.sendGetRequest(this.renderList.bind(this));
  };

//     UI

  var button = document.querySelector('button');
  this.input = document.querySelector('.input');
  this.trash = document.querySelectorAll('.ion-ios-trash-outline');
  this.checkbox = document.querySelectorAll('.checkbox');
  var listContainer = document.querySelector('.todo-list');
  var taskText = document.querySelectorAll('span');

  this.renderList = function(data) {

    data.forEach(function(item) {
      this.createList(item.text,item.id, item.completed);
    }.bind(this));
  };

  this.createList = function(text, id, completed) {
    var listItem = document.createElement('li');
    listContainer.appendChild(listItem);
    listItem.classList.add("todo-item");
    var span = document.createElement('span');
    listItem.appendChild(span);
    span.classList.add("task-name");
    span.innerHTML = text;
    span.setAttribute('id', id);
    span.dataset.completed = completed;
    var trashI = document.createElement('i');
    listItem.appendChild(trashI);
    trashI.classList.add("ion-ios-trash-outline");
    console.log(this);
    trashI.addEventListener('click', this.deleteTask.bind(this));

    var checkboxI = document.createElement('i');
    listItem.appendChild(checkboxI);
    checkboxI.classList.add("checkbox");

    if (completed == true) {
      checkboxI.classList.add("ion-checkmark-circled");
    } else if (completed == false) {
      checkboxI.classList.add("ion-ios-circle-outline");
    }

  };

  this.addEvents = function () {
    // window.addEventListener('load', );
    button.addEventListener('click', this.postTask.bind(this));
    this.trash.forEach(function (e) {
      e.addEventListener('click', this.deleteTask);
    });
    this.checkbox.forEach(function (e) {
      e.addEventListener('click', changeTaskStatus);
    });
  };

  var changeCheckboxUi = function (event) {  /*                           Nem tudom, hogy ez végül fog-e kelleni  */
    // if (taskText.dataset.completed === false) {
    //   event.target.classList.remove("ion-checkmark-circled");
    //   event.target.classList.add("ion-ios-circle-outline");
    // } else if (taskText.dataset.completed === true) {
    //   event.target.classList.remove("ion-ios-circle-outline");
    //   event.target.classList.add("ion-checkmark-circled");
    // }
    if (event.target.classList.contains("ion-ios-circle-outline")) {
      event.target.classList.remove("ion-ios-circle-outline");
      event.target.classList.add("ion-checkmark-circled");
    } else if (event.target.classList.contains("ion-checkmark-circled")) {
      event.target.classList.remove("ion-checkmark-circled");
      event.target.classList.add("ion-ios-circle-outline");
    }
  };
}

function Ajax () {

  var request = new XMLHttpRequest();

  var getRequest = function(method, resource, data, callback) {
    var request = new XMLHttpRequest();
    request.open(method,'https://mysterious-dusk-8248.herokuapp.com/'+ resource, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.send(data);

    request.onreadystatechange = function (response) {
      var todoData;
      if (request.readyState === XMLHttpRequest.DONE) {
        todoData = JSON.parse(request.response);
        callback(todoData);
      }
    };
  };

  this.sendGetRequest = function(callback) {
    getRequest('GET', "todos", null, callback);
  };

  this.sendPostRequest = function (input, callback) {
    console.log(input);
    getRequest('POST', "todos", JSON.stringify({text: input}), callback);
  };

  this.sendDeleteRequest = function (id) {
    getRequest('DELETE', "todos/"+id, null);
  };

  // var sendPutRequest = function () {
  //   getRequest('PUT',"todos"+data.id, );
  // };




}


var todo = new App ();
todo.init()
