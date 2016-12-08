var button = document.querySelector('button');

function turnThePartyOn () {
  var partyDiv = document.querySelector('div');
  // if (partyDiv.classList.contains('party')) {
  //   partyDiv.classList.remove('party');
  // } else {
  // partyDiv.classList.add('party');
  // }

  partyDiv.classList.toggle('party');

}

button.addEventListener('click', turnThePartyOn);
