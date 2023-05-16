import { useRoutes } from 'react-router-dom';
import router from './pages/router';
import { useRecoilValue } from 'recoil';
import { loadingState } from './atoms/loading.atom';
import { Loading } from './components/loading/Loading';
import './App.css';

import { RecoilRoot } from 'recoil';

function App() {
  const element = useRoutes(router);
  const isLoading = useRecoilValue(loadingState);

  return (
    <>
      {isLoading && <Loading />}
      <div className="App">{element}</div>
    </>
  );
}

export default App;
