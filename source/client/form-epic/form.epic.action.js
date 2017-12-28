const GET_DATA_VIA_EPIC = 'GET_DATA_VIA_EPIC'
const HAS_DATA_VIA_EPIC = 'HAS_DATA_VIA_EPIC'

const getData = (url) => ({
  type: GET_DATA_VIA_EPIC,
  payload: url
})

const hasData = (data) => ({
  type: HAS_DATA_VIA_EPIC,
  payload: data
})

export {
  GET_DATA_VIA_EPIC,
  HAS_DATA_VIA_EPIC,
  getData,
  hasData
}
