import { merge } from 'enzyme/build/configuration'

import Adapter from 'enzyme-adapter-react-16'

merge({ adapter: new Adapter() })
