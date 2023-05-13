import { useRoutes } from 'react-router-dom';
import router from './pages/router';
import './App.css';

import { RecoilRoot } from 'recoil';
import { UserController } from './components/userController';

function App() {
  const element = useRoutes(router);

  return (
    <div className="App">
      {element}

      <RecoilRoot>
        <UserController />
      </RecoilRoot>
    </div>
  );
}

export default App;
