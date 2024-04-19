import Main from './src/app';
import {Provider} from 'react-redux';
import {Store, persistor} from './src/utils/Store';
import {PersistGate} from 'redux-persist/integration/react';
const App = () => {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
};

export default App;
