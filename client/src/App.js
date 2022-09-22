import { Outlet } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { LandingPage } from './components/Pages/LandingPage/LandingPage';
// import {Helmet} from "react-helmet";
import './index.scss'

function App() {
  return (
    <div className="App">
      <Header/>
      <LandingPage/>
      <Outlet/>
    </div>
  );
}

export default App;
