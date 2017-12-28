const GET_DATA_VIA_OBSERVABLE = 'GET_DATA_VIA_OBSERVABLE'
const HAS_DATA_VIA_OBSERVABLE = 'HAS_DATA_VIA_OBSERVABLE'

const getData = (url) => ({
  type: GET_DATA_VIA_OBSERVABLE,
  payload: url
})

const hasData = (data) => ({
  type: HAS_DATA_VIA_OBSERVABLE,
  payload: data
})

export {
  GET_DATA_VIA_OBSERVABLE,
  HAS_DATA_VIA_OBSERVABLE,
  getData,
  hasData
}
