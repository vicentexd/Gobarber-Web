import React from 'react';

import GlobalStyled from './styles/global';
import SignIn from './pages/Signin';
import SignUp from './pages/SignUp';

import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => (
  <>
    <GlobalStyled />

    <AuthProvider>
      <SignIn />
    </AuthProvider>
  </>
);

export default App;
