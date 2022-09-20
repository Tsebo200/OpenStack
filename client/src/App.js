import { Outlet } from 'react-router-dom';
import { Header } from './components/Header/Header';
import {Helmet} from "react-helmet";

function App() {
  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>OpenStack</title>
      <link rel="canonical" href="http://mysite.com/example" />
      <meta name="description" content="A Developer's Q and A platform for The Open Window, similar to that of StackOverflow." />
    </Helmet>
    <Header/>
    <Outlet/>
    </>
  );
}

export default App;
