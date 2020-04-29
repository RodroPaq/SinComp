import React,{Fragment} from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import { useFetch } from './components/HookFetch';

function App() {
	
	
	var pathArray = window.location.pathname.split('/');

  
   const [dataEmpresa] = useFetch(
      "https://vhali.com.ar/api/pedidos/local/" + pathArray[1]
   );

    const [data] = useFetch(
      "https://vhali.com.ar/api/pedidos/menu/" + pathArray[1]
    );
	
	
  return (
    <Fragment>
      <Header menu={data} empresa={dataEmpresa}/>
	  <Menu menu={data} />
    </Fragment>
  );
}

export default App;
