'use strict';

// Create a constructor for creating Aircrafts,
// and one for creating Carriers,
// based on the specification in the python exam: https://github.com/greenfox-academy/zerda-exam-python-retake


function Aircrafts (type) {
  this.type = type;
  this.ammo = 0;
  this.damageCount = 0;
  this.setWeapons();

}

Aircrafts.prototype.setWeapons = function () {

  if (this.type === "F16") {
    this.maxAmmo = 8;
    this.baseDamage = 30;
  } else if (this.type === "F35") {
    this.maxAmmo = 12;
    this.baseDamage = 50;
  }

};

Aircrafts.prototype.fight = function () {
  this.damageCount = 0;
  var damageThisRound = this.ammo * this.baseDamage;
  this.damageCount = damageThisRound;
  this.ammo = 0;
  return damageThisRound;
};

Aircrafts.prototype.refill = function (amount) {
  if (this.ammo + amount >= this.maxAmmo) {
    this.ammo = this.maxAmmo;
  } else {
    this.ammo += amount;
  }
  if (this.ammo + amount > this.maxAmmo) {
    return amount - this.ammo;
  } else {
    return 0;
  }
};

Aircrafts.prototype.getStatus = function () {
  return ("Type: " + this.type + ", Ammo: " + this.ammo + ", Base Damage: " + this.baseDamage + ", All Damage: " + this.damageCount);
};


function Carriers (totalAmmo) {
  this.aircraftList = [];
  this.totalAmmo = totalAmmo;
  this.healthPoints = 3000;
  this.totalDamage = 0;

}

Carriers.prototype.addAircaft = function (aircraft) {
  this.aircraftList.push(aircraft);
};

Carriers.prototype.fillAll = function () {
  this.aircraftList.forEach( function(element) {
    console.log(this.totalAmmo, element.refill(this.totalAmmo));
    this.totalAmmo = element.refill(this.totalAmmo);
  }.bind(this));

};
Carriers.prototype.fightAll = function () {
  this.aircraftList.forEach(function(element){
  this.totalDamage += element.fight();
}, this);
return this.totalDamage;

};
Carriers.prototype.statusReport = function () {
  var aircrafts = this.aircraftList.map(function (e) {
    return e.getStatus();

  });

  return "Aircraft count: " + this.aircraftList.length + ", Ammo Storage: " + this.totalAmmo + ", Total damage: " + this.totalDamage + ", Health Remaining: " + this.healthPoints + "\nAircrafts:\n" + aircrafts.join('\n');
};


var carrier1 = new Carriers(1555);

var aircraft1_f16 = new Aircrafts("F16");
carrier1.addAircaft(aircraft1_f16);
aircraft1_f16.refill(10);
// console.log(aircraft1_f16.getStatus());
aircraft1_f16.fight();
// console.log(aircraft1_f16.getStatus());
aircraft1_f16.refill(2);
// console.log(aircraft1_f16.getStatus());
aircraft1_f16.fight();
// console.log(aircraft1_f16.getStatus());


var aircraft1_f35 = new Aircrafts("F35");
carrier1.addAircaft(aircraft1_f35);

carrier1.fillAll();
carrier1.fightAll();
console.log(carrier1.statusReport());
