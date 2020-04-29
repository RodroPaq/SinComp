import React from 'react';
import Header from './components/Header';
import { useFetch } from './components/HookFetch';

function App() {
	
	
	var pathArray = window.location.pathname.split('/');

  
   const [dataEmpresa] = useFetch(
      "http://vhali.com.ar/api/pedidos/local/de-niro-1" //+ pathArray[1]
   );

    const [data] = useFetch(
      "http://vhali.com.ar/api/pedidos/menu/de-niro-1" //+ pathArray[1]
    );
	
	
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
