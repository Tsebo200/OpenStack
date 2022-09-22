import { Outlet } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { LandingPage } from './components/Pages/LandingPage/LandingPage';
// import {Helmet} from "react-helmet";

function App() {
  return (
    <>
    <Header/>
    <LandingPage/>
    <Outlet/>
    </>
  );
}

export default App;
