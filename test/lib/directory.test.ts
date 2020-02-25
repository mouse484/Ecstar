import path from 'path';

import directory from '../../src/lib/directory';

describe('get path', () => {
  test('path test 1', () => {
    expect(directory.getPath('test')).toBe(path.resolve(__dirname, 'test'));
  });
  test('path test 2', () => {
    expect(directory.getPath('abc')).toBe(path.resolve(__dirname, 'abc'));
  });
});

describe('is directory', () => {
  test('true', () => {
    expect(directory.is(__dirname)).toBeTruthy();
  });
  test('false', () => {
    expect(directory.is(__filename)).toBeFalsy();
  });
});
