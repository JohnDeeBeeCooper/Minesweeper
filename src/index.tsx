import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from 'store';
import App from './App';

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);
createRoot(document.getElementById('root')!).render(app)
