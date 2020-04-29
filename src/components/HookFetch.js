import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  

async function fetchUrl() {
    fetch(url)
    .then(response => {
      return response.json()
    })
    .then((data) => {      
      setData(data);
      setLoading(false);
    })
    // .catch((error) => {
    //   setError(error)
    // })


  }

  useEffect((url) => {
    
    fetchUrl();
  }, []);
  return [data, loading];
}
export { useFetch };