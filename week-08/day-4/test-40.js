var test = require('tape').test;
var appendA = require('./e40.js');

test('append a', function (t) {
    var actual = appendA('alm');
    var expected = 'alma';

    t.equal(actual, expected);
    t.end();
});

test('append number', function (t) {
    var actual = appendA(456);
    var expected = '456a';

    t.equal(actual, expected);
    t.end();
});

test('append boolen', function (t) {
    var actual = appendA(true);
    var expected = 'truea';

    t.equal(actual, expected);
    t.end();
});

test('append boolen', function (t) {
    var actual = appendA(undefined);
    var expected = 'undefineda';

    t.equal(actual, expected);
    t.end();
});
