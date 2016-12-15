var test = require('tape').test;
var getDouble = require('./e39.js');

test('double numbers', function (t) {
    var actual = getDouble(2);
    var expected = 4;

    t.equal(actual, expected);
    t.end();
});

test('double number as string', function (t) {
    var actual = getDouble('2');
    var expected = 4;

    t.equal(actual, expected);
    t.end();
});

test('double sring', function (t) {
    var actual = getDouble('string');
    var expected = NaN;

    t.equal(actual, expected);
    t.end();
});

test('double 0', function (t) {
    var actual = getDouble(0);
    var expected = 0;

    t.equal(actual, expected);
    t.end();
});
