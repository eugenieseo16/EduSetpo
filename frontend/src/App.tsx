import { useRoutes } from 'react-router-dom';
import router from './pages/router';
import './App.css';

import { RecoilRoot } from 'recoil';
// import { UserController } from './components/userController';

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
