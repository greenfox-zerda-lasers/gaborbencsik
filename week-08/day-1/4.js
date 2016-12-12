'use strict';

// Create a constructor for creating Aircrafts,
// and one for creating Carriers,
// based on the specification in the python exam: https://github.com/greenfox-academy/zerda-exam-python-retake


function Aircrafts (name, type) {
  this.type = type;
  this.name = name;
  this.ammo = 0;
  this.maxAmmo = 0;
  this.baseDamage = 0;

  if (this.type === "F16") {
    this.maxAmmo = 8;
    this.baseDamage = 30;
  } else if (this.type === "F35") {
    this.maxAmmo = 12;
    this.baseDamage = 50;
  }

}

Aircrafts.prototype.fight = function () {
  
};
Aircrafts.prototype.refill = function () {

};
Aircrafts.prototype.getStatus = function () {
  return "Type: " + this.type + ", Ammo: " + this.ammo + ", Base Damage: " + this.baseDamage + ", All Damage: " + "???";
};


function Carriers () {

}

Carriers.prototype.add_aircaft = function () {

};
Carriers.prototype.fillAll = function () {

};
Carriers.prototype.fightAll = function () {

};
Carriers.prototype.statusReport = function () {

};
