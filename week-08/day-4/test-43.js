var test = require('tape').test;
var filterOddNumbers = require('./e43.js');

test('filter list', function (t) {
    var actual = filterOddNumbers([2,3,4,3]);
    var expected = [2,4];

    t.deepEqual(actual, expected);
    t.end();
});

test('filter string list', function (t) {
    var actual = filterOddNumbers(['s','t','r','r']);
    var expected = [];

    t.deepEqual(actual, expected);
    t.end();
});

test('filter one number', function (t) {
    var actual = filterOddNumbers(3);
    var expected = [];

    t.deepEqual(actual, expected);
    t.end();
});

test('filter one number', function (t) {
    var actual = filterOddNumbers(2);
    var expected = [2];

    t.deepEqual(actual, expected);
    t.end();
});
