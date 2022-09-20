import { Outlet } from 'react-router-dom';
import { Header } from './components/Header/Header';
// import {Helmet} from "react-helmet";

function App() {
  return (
    <>
  
    <Header/>
    <Outlet/>
    </>
  );
}

export default App;
