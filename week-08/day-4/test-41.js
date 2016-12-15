var test = require('tape').test;
var summa = require('./e41.js');

test('sum list', function (t) {
    var actual = summa([1, 2]);
    var expected = 3;

    t.equal(actual, expected);
    t.end();
});

test('sum one number', function (t) {
    var actual = summa(234);
    var expected = 234;

    t.equal(actual, expected);
    t.end();
});

test('sum string', function (t) {
    var actual = summa('string');
    var expected = 0;

    t.equal(actual, expected);
    t.end();
});

test('sum string list', function (t) {
    var actual = summa(['string', 'added']);
    var expected = 0;

    t.equal(actual, expected);
    t.end();
});
