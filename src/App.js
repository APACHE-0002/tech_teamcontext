import React, { useState } from 'react';
import { UserProvider } from './context/UserContext';
import { Dashboard } from './Dashboard';

import './styles.css'


export default function App() {

  return (
    <UserProvider>
    <div className="App">
      <header>This is our nav</header>

      <Dashboard/>
    </div>
    </UserProvider>
  );
}
