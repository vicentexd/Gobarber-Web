import React from 'react';

import GlobalStyled from './styles/global';
import SignIn from './pages/Signin';
import SignUp from './pages/SignUp';

import ToastContainer from './components/ToastContainer';
import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
  <>
    <GlobalStyled />

    <AuthProvider>
      <SignIn />
    </AuthProvider>

    <ToastContainer />
  </>
);

export default App;
