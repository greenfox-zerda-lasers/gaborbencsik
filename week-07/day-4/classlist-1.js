var paragraphElements = document.querySelectorAll('p');


if (paragraphElements[2].classList.contains('cat')) {
  alert("YEAH CAT!");
}

if (paragraphElements[3].classList.contains('dolphin')) {
  document.querySelector('.apple').innerHTML = "pear";
}

if (paragraphElements[0].classList.contains('apple')) {
  document.querySelector('.cat').innerHTML = "dog";
}

var appleParagraph = document.querySelector('.apple');
appleParagraph.classList.add('red');

var balloonParagraph = document.querySelector('.balloon');
balloonParagraph.classList.remove('balloon');
