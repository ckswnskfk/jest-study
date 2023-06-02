import sum from './sum';

test('1 더하기 2는 3이니?', () => {
  expect(sum(1, 2)).toBe(3);
});
