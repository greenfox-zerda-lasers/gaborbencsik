// Let's crowdsource a list of good movies supplied by you.
//
// Check the spreadsheet here:
//
// https://docs.google.com/spreadsheets/d/1DsBUc4dZhp3_Sgn4IW2P0tnJB7bmIdV6BSYuKts15bU/edit#gid=0
//
// You'll have to send data to this spreadsheet:
//
// API endpoint: https://sheetsu.com/apis/v1.0/7654fbe24554
//
// By requesting the above URL it will return the contents of the spreadsheet.
//
// Read the documentation on how to post data: https://sheetsu.com/docs/beta#post
//
//  - Create a list of the submitted movies with all the data returned by the API
//  - Create a form that sends data to Sheetsu (use your own code, don't use the jQuery example)
//  - If the request was successful, reset the form and display a success message
//  - If the request failed, display the error



var request = new XMLHttpRequest();
var movieData;

request.open('GET', 'https://sheetsu.com/apis/v1.0/7654fbe24554', true);
request.send(null);

request.onreadystatechange = function () {

  if (request.readyState === XMLHttpRequest.DONE) {
    movieData = JSON.parse(request.response);
    showMovies(movieData);
    console.log(movieData);
  }
};

function createListContainer () {
  var listContainer = document.createElement('ul');
  return listContainer;
}

function createList (name) {
  var listItem = document.createElement('li');
  listItem.innerHTML = name;
  return listItem;
}

function renderList () {
  var container = createListContainer();

  movieData.forEach(function(movie){
    container.appendChild(createList(movie));
  });
  document.body.appendChild(container);

}
