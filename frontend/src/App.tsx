import { useRoutes } from "react-router-dom";
import router from "./pages/router";
import "./App.css";

function App() {
  const element = useRoutes(router);

  return <div>{element}</div>;
}

export default App;
