import { useRoutes } from 'react-router-dom';
import router from './pages/router';
import { RecoilRoot } from 'recoil';
import './App.css';

function App() {
  const element = useRoutes(router);

  return (
    <>
      <RecoilRoot>
        <div className="App">{element}</div>
      </RecoilRoot>
    </>
  );
}

export default App;
