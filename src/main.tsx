import ReactDOM from 'react-dom/client';
import './index.scss';
import WrappedApp from '@components/Layout/App/App';
import { Provider } from 'react-redux';
import { store } from '@/services/redux/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <WrappedApp />
  </Provider>
);
