import ExamplePlugin from '../src';

const instance = new ExamplePlugin();

test('it has a name', () => {
  expect(typeof instance.options[0]).toBe('string');
});

test('it has a menu item function', () => {
  expect(typeof instance.options[1]).toBe('function');
});

test('it does not have a condition', () => {
  expect(instance.options[2]).toBeNull();
});

test('it has a shortcut', () => {
  expect(typeof instance.options[3]).toBe('object');
});