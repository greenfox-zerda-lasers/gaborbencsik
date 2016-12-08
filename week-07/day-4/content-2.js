var paragraphContent = document.querySelectorAll('p');

paragraphContent.forEach(function (listItem, index, array) {
  listItem.textContent = array[array.length-1].textContent;
});
