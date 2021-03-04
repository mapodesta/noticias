import React from "react";
import Noticias from "./Noticias";
const ListadoNoticias = ({ noticias }) => {
  return (
    <div className="row">
      {noticias.map((noticia) => (
        <Noticias noticia={noticia} key={noticia.url} />
      ))}
    </div>
  );
};

export default ListadoNoticias;
