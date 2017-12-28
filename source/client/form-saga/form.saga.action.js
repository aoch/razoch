const GET_DATA_VIA_SAGA = 'GET_DATA_VIA_SAGA'
const HAS_DATA_VIA_SAGA = 'HAS_DATA_VIA_SAGA'

const getData = (url) => ({
  type: GET_DATA_VIA_SAGA,
  payload: url
})

const hasData = (data) => ({
  type: HAS_DATA_VIA_SAGA,
  payload: data
})

export {
  GET_DATA_VIA_SAGA,
  HAS_DATA_VIA_SAGA,
  getData,
  hasData
}
