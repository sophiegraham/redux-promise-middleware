import { createStore, applyMiddleWare } from './index';
import { applyMiddleware } from 'redux';
//missing an import 

describe ('promise middleware', () => {
  const reducer = jest.fn(state);
  const store = createStore(reducer, {}, applyMiddleware(promiseMiddleware));

  it('resolves a promise then pushes payload to reducer', () => {
    const promise =  Promise.resolve('HELLO');
    store.dispatch({
      type: 'PROMISE_ACTION',
      PAYLOAD: promise
    });
    return promise.then(() => {
      expect(reducer.mock.calls).toContain([{}, { type }]);
    });
  });
  
  it('tests a successful promise', () => {
    const promise =  Promise.resolve('SUCCESSFUL!!');
    store.dispatch({
      type: 'LOAD_START',
      PAYLOAD: promise
    });
    //still need: load-end action and promise action sent
  });

  it('tests an unsuccessful promise', () => {
    const promise =  Promise.reject('UNSUCCESSFUL!!');
    store.dispatch({
      type: 'LOAD_END',
      PAYLOAD: promise
    });
    //still need: error action sent
  });
});
