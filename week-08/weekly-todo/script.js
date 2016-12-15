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

  function postTask () {
    console.log('clicked');
    this.ajax.sendPostRequest();
    this.ajax.sendGetRequest(this.renderList.bind(this));
  }

  function deleteTask () {
    console.log('deleted');
    this.ajax.sendDeleteRequest();
    this.ajax.sendGetRequest(this.renderList.bind(this));
  }

  function changeTaskStatus (event) {
    console.log(event);
    console.log('changed');
    changeCheckboxUi(event);
    this.ajax.sendGetRequest(this.renderList.bind(this));
  }

//     UI

  var button = document.querySelector('button');
  var input = document.querySelector('.input');
  var trash = document.querySelectorAll('.ion-ios-trash-outline');
  var checkbox = document.querySelectorAll('.checkbox');
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
    button.addEventListener('click', postTask);
    trash.forEach(function (e) {
      e.addEventListener('click', deleteTask);
    });
    checkbox.forEach(function (e) {
      e.addEventListener('click', changeTaskStatus);
    });
  };

  var changeCheckboxUi = function (event) {  /*                                     ez hogy lenne this-es??  */
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
    request.setRequestHeader("Content-type", "applicaion/json");
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

  this.sendPostRequest = function () {
    getRequest('POST', "todos", app.input.value, callback);
  };

  var sendDeleteRequest = function () {
    getRequest('DELETE', "todos"+data.id, null);
  };

  // var sendPutRequest = function () {
  //   getRequest('PUT',"todos"+data.id, );
  // };




}


var todo = new App ();
todo.init()
