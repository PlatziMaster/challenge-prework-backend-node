import { createBrowseHistory } from 'history';
import initialState from '../initialState.json';


const store = createStore(initialState);
const history = createBrowseHistory();

const ProviderMock = props => (

  <Provider store={store}>
    <Router history={history}>
      {props.children}
    </Router>
  </Provider>
);

export default ProviderMock;