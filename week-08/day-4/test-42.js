var test = require('tape').test;
var factorial = require('./e42.js');

test('factorial 5', function (t) {
    var actual = factorial(5);
    var expected = 120;

    t.equal(actual, expected);
    t.end();
});

test('factorial string', function (t) {
    var actual = factorial('string');
    var expected = 1;

    t.equal(actual, expected);
    t.end();
});

test('factorial list', function (t) {
    var actual = factorial([2, 3]);
    var expected = 1;

    t.equal(actual, expected);
    t.end();
});

test('factorial boolean', function (t) {
    var actual = factorial(true);
    var expected = 1;

    t.equal(actual, expected);
    t.end();
});
