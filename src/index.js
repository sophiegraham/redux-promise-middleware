const isPromise = payload => true //check
export default ({ dispatch }) => next => action => {
  if ((action.payload || !isPromise(payload)) return next(action);
    store.dispatch({ type: 'LOAD_START' });
    action.payload
      .then(results => {

      })
      .catch (err => {

      })
  };
    store.dispatch({ type: 'LOAD_END' });
    action.payload
      .then(results => {

      })
      .catch (err => {

    })
};