import { combineEpics } from 'redux-observable'

import getDataEpic from '../client/form-epic/form.epic'

const rootEpic = combineEpics(getDataEpic)

export default rootEpic
