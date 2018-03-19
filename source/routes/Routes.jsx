import Application from '../client/application/application'
import ClockContainer, { loadData as loadClockData } from '../client/clock/clock.container'
import InputContainer, { loadData as loadInputData } from '../client/input/input.container'
import EpicContainer, { loadData as loadEpicData } from '../client/form-epic/form.epic.container'
import SagaContainer, { loadData as loadSagaData } from '../client/form-saga/form.saga.container'
import ThunkContainer, { loadData as loadThunkData } from '../client/form-thunk/form.thunk.container'

const Routes = [
  { path: '/', exact: true, component: Application },
  { path: '/clock', component: ClockContainer, loadData: loadClockData },
  { path: '/input', component: InputContainer, loadData: loadInputData },
  { path: '/epic', component: EpicContainer, loadData: loadEpicData },
  { path: '/saga', component: SagaContainer, loadData: loadSagaData },
  { path: '/thunk', component: ThunkContainer, loadData: loadThunkData },
]

export default Routes
