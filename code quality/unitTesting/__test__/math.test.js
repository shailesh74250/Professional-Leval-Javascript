const math = require('../src/math');

test('Check that sqaure of 5 is 25', () => {
  expect(math.square(5)).toBe(25);
});

test('Check that 5 + 15 is 20', () => {
  expect(math.add(5, 15)).toBe(20);
});

test('Check that 15 - 5 is 10', () => {
  expect(math.subtract(15, 5)).toBe(10);
});

test('Check that 5 multiply 2 is 10', () => {
  expect(math.multiply(5, 3)).toBe(15);
});

test('Check that 2 cube is 8', () => {
  expect(math.cube(2)).toBe(8);
});
