import ExamplePlugin from '../src';

const instance = new ExamplePlugin();

test('it has a name', () => {
  expect(typeof instance.options.title).toBe('string');
});

test('it has a menu item function', () => {
  expect(typeof instance.options.action).toBe('function');
});

test('it has a windows shortcut', () => {
  expect(typeof instance.options.shortcut.windows).toBe('object');
});

test('it has a mac shortcut', () => {
  expect(typeof instance.options.shortcut.mac).toBe('object');
});