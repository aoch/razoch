// import { Observable } from 'rxjs'

const GET_DATA = 'get_data'
const UPDATE_DATA = 'update_data'

const updateData = (data) => {
  const action = {
    type: UPDATE_DATA,
    payload: data
  }
  return action
}

const getData = () => {
  const action = {
    type: GET_DATA
  }
  return action
}

export {
  UPDATE_DATA,
  updateData,
  GET_DATA,
  getData
}
