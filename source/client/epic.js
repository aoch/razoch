// import { Observable } from 'rxjs'
import { combineEpics } from 'redux-observable'

import { getDataEpic } from './form/form.epic'

const epic = combineEpics(getDataEpic)

export default epic
