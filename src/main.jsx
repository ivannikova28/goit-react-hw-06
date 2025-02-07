import ReactDOM from 'react-dom/client'

import './index.css'

import "modern-normalize";

import App from './components/App/App';


import { Provider } from 'react-redux'
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/es/integration/react';


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
      </PersistGate>
    </Provider>
)
