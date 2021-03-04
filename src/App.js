import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/header";
import Formulario from "./components/Formulario";
import ListadoNoticias from "./components/ListadoNoticias";

function App() {
  const [categoria, guardarCategoria] = useState("");

  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `http://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=285a6887cebd460a8fec1a9512b4b890`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      guardarNoticias(noticias.articles);
    };

    consultarAPI();
  }, [categoria]);
  return (
    <Fragment>
      <Header titulo="Buscador de Noticias" />
      <div>
        <Formulario guardarCategoria={guardarCategoria} />
        <ListadoNoticias noticias={noticias} />
      </div>
    </Fragment>
  );
}

export default App;
