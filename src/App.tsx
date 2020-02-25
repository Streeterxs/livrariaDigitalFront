import React from 'react';
import logo from './logo.svg';
import {Layout as Layout} from './Components';
import Routes from './Routes';
import './App.scss';

import { Router } from 'react-router-dom';

function App() {
  return (
    <Layout>
      <div>
        <Routes></Routes>
      </div>
    </Layout>
  );
}

export default App;
