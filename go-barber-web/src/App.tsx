import React from 'react';
import GlobalStyle from './styles/global';
import Router from './routes';
import { BrowserRouter } from 'react-router-dom';
import AppProvider from './hooks';


const App: React.FC = () => (
  <BrowserRouter>
    <AppProvider>
      <Router />
    </AppProvider>

    <GlobalStyle/>
  </BrowserRouter>
)

export default App;
