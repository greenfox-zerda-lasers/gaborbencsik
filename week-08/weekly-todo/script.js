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
    this.addButtonEvent();

  };

  this.postTask = function postTask () {
    console.log('clicked');
    console.log(this);
    var validInput = this.input.value;
    if (validInput.length === 0) {
      validInput = "No task name";
    }
    listContainer.innerHTML = "";
    this.ajax.sendPostRequest(validInput, function (){this.ajax.sendGetRequest(this.renderList.bind(this));}.bind(this));
    this.input.value = "";

  };

  this.deleteTask = function (event) {
    console.log(event);
    console.log('deleted');
    listContainer.innerHTML = "";
    this.ajax.sendDeleteRequest(event.target.previousElementSibling.id, function (){this.ajax.sendGetRequest(this.renderList.bind(this));}.bind(this));

  };

  this.changeTaskStatus = function (event) {
    console.log(event);
    console.log('changed');
    console.log(event.target.parentNode.dataset.completed);
    listContainer.innerHTML = "";
    this.ajax.sendPutRequest(event.target.parentNode.id, event.target.parentNode.textContent, event.target.parentNode.dataset.completed, function (){this.ajax.sendGetRequest(this.renderList.bind(this));}.bind(this));

  };

//     UI

  var button = document.querySelector('button');
  this.input = document.querySelector('.input');
  this.trash = document.querySelectorAll('.ion-ios-trash-outline');
  this.checkbox = document.querySelectorAll('.checkbox');
  var listContainer = document.querySelector('.todo-list');
  var taskText = document.querySelectorAll('span');

  this.renderList = function(data) {
    listContainer.classList.remove("is-loaded");
    data.forEach(function(item) {
      this.createList(item.text,item.id, item.completed);
    }.bind(this));
    setTimeout(function() {
      listContainer.classList.add("is-loaded");
    }, 0);
  };

  this.createList = function(text, id, completed) {
    var listItem = document.createElement('li');
    listContainer.appendChild(listItem);
    listItem.classList.add("todo-item");
    listItem.setAttribute('id', id);
    listItem.dataset.completed = completed;

    var span = document.createElement('span');
    listItem.appendChild(span);
    span.classList.add("task-name");
    span.innerHTML = text;
    span.setAttribute('id', id);
    span.dataset.completed = completed;
    var trashI = document.createElement('i');
    listItem.appendChild(trashI);
    trashI.classList.add("ion-ios-trash-outline");

    trashI.addEventListener('click', this.deleteTask.bind(this));
    trashI.style.cursor = "pointer";

    var checkboxI = document.createElement('i');
    listItem.appendChild(checkboxI);
    checkboxI.classList.add("checkbox");
    checkboxI.addEventListener('click', this.changeTaskStatus.bind(this));
    checkboxI.style.cursor = "pointer";

    if (completed == true) {
      checkboxI.classList.add("ion-checkmark-circled");
    } else if (completed == false) {
      checkboxI.classList.add("ion-ios-circle-outline");
    }
  };

  this.addButtonEvent = function () {
    this.input.addEventListener('keyup', function (e) {
      console.log(e.code);
      if (e.code == "Enter") {
        this.postTask.bind(this)();
      }
    }.bind(this));
    button.addEventListener('click', this.postTask.bind(this));
    button.style.cursor = "pointer";
  };

  //    Validation

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
    getRequest('POST', "todos", JSON.stringify({"text": input}), callback);
  };

  this.sendDeleteRequest = function (id, callback) {
    getRequest('DELETE', "todos/"+id, null, callback);
  };

  this.sendPutRequest = function (id, input, completed, callback) {
    getRequest('PUT',"todos/"+id, JSON.stringify({"text": input, "completed": !JSON.parse(completed)}), callback);
  };

  // this.sendDeleteAllTaskRequest = function (id, callback) {
  //
  //   getRequest('DELETE', "todos/"+id, null, callback);
  // };

}

var todo = new App ();
todo.init()
