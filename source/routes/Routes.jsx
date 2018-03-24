import Application from '../client/application/application'
import ThunkContainer, { loadData as loadThunkData } from '../client/form-thunk/form.thunk.container'
import SagaContainer, { loadData as loadSagaData } from '../client/form-saga/form.saga.container'
import EpicContainer, { loadData as loadEpicData } from '../client/form-epic/form.epic.container'

const Routes = [
  { path: '/', exact: true, component: Application },
  { path: '/thunk', component: ThunkContainer, loadData: loadThunkData },
  { path: '/saga', component: SagaContainer, loadData: loadSagaData },
  { path: '/epic', component: EpicContainer, loadData: loadEpicData },
]

export default Routes
