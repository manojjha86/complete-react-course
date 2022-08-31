import React, { useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import Demo from './components/ReducerDemo/Demo';
import AuthContext from './components/Context/AuthContext';

function App() {
  let ctx = useContext(AuthContext)
  return (
      <>
        <MainHeader />
        <main>
          {!ctx.isLoggedIn && <Login />}
          {ctx.isLoggedIn && <Home />}
        </main>
      </>
  );
}

export default App;
