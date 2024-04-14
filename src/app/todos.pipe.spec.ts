import { TodosPipe } from './todos/todos.pipe';

describe('TodosPipe', () => {
  it('create an instance', () => {
    const pipe = new TodosPipe();
    expect(pipe).toBeTruthy();
  });
});
