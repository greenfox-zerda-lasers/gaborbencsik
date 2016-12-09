var container = document.querySelector('.container');
var navigation = document.querySelector('.navigation');
var slides = document.querySelectorAll('.container .item').length;
var current = 0;

navigation.addEventListener('click', navigate);

function navigate(event) {
  event.preventDefault();
  var next = current;
  var target = event.target;
  if (target.nodeType === 1 && target.tagName === 'BUTTON') {
    if (target.classList.contains('prev')) {
      if (current > 0) {
        next -= 1;
      }
    } else if (target.classList.contains('next')) {
      if (current < slides - 1) {
        next += 1;
      }
    } else {
      next = parseInt(target.dataset.slide);
    }
    offset(next);
    current = next;
  }
}

function offset(index) {
  container.style.textIndent = index * -100 + '%';
}
