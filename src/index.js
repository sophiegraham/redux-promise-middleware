const isPromise = payload => true
export default ({ dispatch }) => next => action => {
  if (action.payload || !isPromise(payload) return next(action);
  store.dispatch({ type: LOAD_START });
  action.payload
    .then err => {

    }
    .catch err=> {

    }
};