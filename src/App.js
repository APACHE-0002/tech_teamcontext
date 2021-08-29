import React from 'react';
import './styles.css'

import Counter from "./components/Counter";
import Mirror from "./components/Mirror";

import CountProvider from "./context/Count";

export default function App() {
  //para habilitar a leitura e gravaçao de dados pelos componentes
  //eles precisam ter um provider um nivel acima

  //os componentes em um nivel inferior são o {children}
  return (
    <CountProvider>
        <Counter />

        <hr/>

        <Mirror /> 
    </CountProvider>

  );
}
