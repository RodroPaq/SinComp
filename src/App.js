import React from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import { useFetch } from './components/HookFetch';

function App() {
	
	
	var pathArray = window.location.pathname.split('/');

  
   const [dataEmpresa] = useFetch(
      "https://vhali.com.ar/api/pedidos/local/de-niro-1" //+ pathArray[1]
   );

    const [data] = useFetch(
      "https://vhali.com.ar/api/pedidos/menu/de-niro-1" //+ pathArray[1]
    );
	
	
  return (
    <div className="App">
      <Header menu={data} empresa={dataEmpresa}/>
	  <Menu menu={data} />
    </div>
  );
}

export default App;
