const test = require('ava');
const utils = require('./utilities/utils');

test('getDataFormat [should] return a string formated as MOUNTH DAY YEAR [when] ISO date is given', (t) => {
    const date = '2009-02-26T13:14:22.000Z'
    const formattedDate = utils.getDataFormat(date);
    const spected = 'FEBRUARY 26 2009';
    t.is(formattedDate, spected, `formatted date should be ${spected}`);
});

test('getNumberOfPages [should] return the number of possible pages [when] total results and max by page are given ', (t) => {
    const possiblePages = utils.getNumberOfPages(100, 25);
    const spected = 4;
    t.is(possiblePages, spected, `possible pages should be ${spected}`);
});
