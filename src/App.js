import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import SellersPage from './pages/SellersPage';

function App() {
  return (
    <>
      <Provider store={store}>
        <SellersPage/>
      </Provider>
    </>
  );
}

export default App;