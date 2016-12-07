'use strict';

// create a student object
// that has a method `addgrade`, that takes a grade from 1 to 5
// an other method `getAverage`, that returns the average of the grades

var student = {
  grades : [],
  addGrade : function(grade) {
    this.grades.push(grade);
    return grade + ' added to grades';
  },
  getAverage : function(grades) {
    return 'The avarage is: ' + this.grades.reduce(function (acc, item){
      return acc + item;
    }) / this.grades.length;
  }
}

console.log(student.addGrade(3));
console.log(student.addGrade(4));
console.log(student.addGrade(4));
console.log(student.getAverage());
