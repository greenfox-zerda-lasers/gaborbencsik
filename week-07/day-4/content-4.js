var listItems = document.querySelectorAll('li');
var dataList = ['apple', 'banana', 'cat', 'dog'];

listItems.forEach(function (item, index) {
  item.textContent = dataList[index];
});
