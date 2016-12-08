var paragraphContent = document.querySelector('p');
var paragraphContent2 = document.querySelectorAll('p');
console.log(paragraphContent);
var output1 = document.querySelector('.output1');
var output2 = document.querySelector('.output2');

// output1.textContent = paragraphContent.textContent;
output1.textContent = paragraphContent2[0].textContent;
// output2.innerHTML = paragraphContent.innerHTML;
output2.innerHTML = paragraphContent2[0].innerHTML;
