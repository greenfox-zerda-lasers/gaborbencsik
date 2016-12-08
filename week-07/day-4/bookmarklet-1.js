// var bookmarkletItem = document.querySelector('a');
// var h1ToModify = document.querySelectorAll('h1');
//
// function modifyContent () {
//   h1ToModify.forEach(function(elem) {
//     elem.textContent = 'Green Fox Academy Conquers the World';
//   });
// }
//
// bookmarkletItem.setAttribute('href', "javascript:modifyContent()");

document.querySelector('body a').setAttribute("href", "javascript:var bookmarkletItem = document.querySelector('a'); var h1ToModify = document.querySelectorAll('h1'); h1ToModify.forEach(function(elem) { elem.textContent = 'Green Fox Academy Conquers the World'; });");
