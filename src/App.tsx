import React from 'react';
import Routes from './routes';
import {Provider} from 'react-redux';
import store from './Store/Modules';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
