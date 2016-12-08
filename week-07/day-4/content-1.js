// 1

var headingContent = document.querySelector('h1');
alert(headingContent.innerHTML);

// 2

var firstParagraphContent = document.querySelector('p');
console.log(firstParagraphContent.innerHTML);

// 3

var paragraphContent = document.querySelectorAll('p');
alert(paragraphContent[1].innerHTML);

// 4

var replaceHeadingContent = document.querySelector('h1');
replaceHeadingContent.innerHTML = "New content";

// 5

paragraphContent[2].innerHTML = paragraphContent[0].innerHTML;

//
