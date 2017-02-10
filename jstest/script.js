'use strict';

const scrollToKingdom = {

  getCoords: function (selector) {
    let element = document.querySelector(selector);
    let x = (element.offsetLeft-(window.innerWidth-element.clientWidth)/2);
    let y = (element.offsetTop-(window.innerHeight-element.clientHeight)/2);
    return {
      x: x,
      y: y
    }
  },

  toNode: function (selector) {
    let coords = this.getCoords(selector);
    window.scroll({top: coords.y, left: coords.x, behavior: 'smooth'});
  }
};

const button = document.querySelector('.button');

button.addEventListener('click', function() {
  scrollToKingdom.toNode('#k1');
});
