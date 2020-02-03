import { ExtendClient } from '../src/client';

const ee = new ExtendClient();

describe('Event Emitter test', () => {
  const spy = jest
    .spyOn(ee, 'emit')
    .mockImplementation((name: string, ...args: any): any => {
      return ['*', name, args];
    });
  test('emit hey', () => {
    ee.emit('hey', 'this is hey');
    expect(spy).toHaveBeenCalledWith('hey', 'this is hey');
  });
  test('re emit', () => {
    expect(ee.emit('yah', 'catch me?')).toEqual(['*', 'yah', ['catch me?']]);
  });
});
