const FETCH_PROMISE_DATA_REQUEST = 'FETCH_PROMISE_DATA_REQUEST'
const FETCH_PROMISE_DATA_SUCCESS = 'FETCH_PROMISE_DATA_SUCCESS'
const FETCH_PROMISE_DATA_FAILURE = 'FETCH_PROMISE_DATA_FAILURE'

const fetchPromiseDataSuccess = (data) => {
  const action = {
    type: FETCH_PROMISE_DATA_SUCCESS,
    payload: data
  }
  return action
}

const fetchPromiseDataFailure = (error) => {
  const action = {
    type: FETCH_PROMISE_DATA_FAILURE,
    payload: error
  }
  return action
}

const fetchPromiseDataRequest = (url, dispatch) => {
  const action = {
    type: FETCH_PROMISE_DATA_REQUEST,
    payload: fetch(url)
      .then((response) => response.json())
      .then(({ name, detail }) => dispatch(fetchPromiseDataSuccess(name || detail)))
      .catch((error) => dispatch(fetchPromiseDataFailure(error.toString())))
  }
  return action
}

const actionTypes = {
  FETCH_PROMISE_DATA_REQUEST,
  FETCH_PROMISE_DATA_SUCCESS,
  FETCH_PROMISE_DATA_FAILURE
}

const actionCreators = {
  fetchPromiseDataRequest,
  fetchPromiseDataSuccess,
  fetchPromiseDataFailure
}

export {
  actionTypes,
  actionCreators
}
