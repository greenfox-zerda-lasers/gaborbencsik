'use strict';

// function invocation

function cica(neve) {
  this.valami = 2;
  this.neve = neve
  console.log(this);
}

// cica();

// global object nem strict modeban
// undefined strict mode\

// method invocation

const kanape = {
  allat: cica
  // allat: function cica2 () {
  //   console.log(this);
  // }
}

// kanape.allat();

// this: kanape

// constructor invocation

const mici = new cica('Mici cica');
const feri = new cica('Feri cica');

// indirect invocation

function macska (neve) {
  console.log(this);
}

macska.call('barmi', 'mici');
macska.apply('barmi', ['feri']);

// this amit átadunk paraméterként


// bind

const lali = macska.bind('barmiiiiiii');
lali();
