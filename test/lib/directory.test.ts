import directory from '../../src/lib/directory';

describe('get path', () => {
  test('node .', () => {
    process.argv[1] = 'get/path';
    expect(directory.getPath('test')).toBe('get/path/test');
  });
  test('node file.ts', () => {
    process.argv[1] = 'path/file.ts';
    expect(directory.getPath('test')).toBe('path/test');
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
