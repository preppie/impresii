import React from "react";
import Impresie from "./impresie";

const ListaImpresii = (props) => {
  const lista = props.listaImpresii.map((item) => (
    <Impresie titlu={item.titlu} text={item.text} key={item.idem} />
  ));
  return lista;
};

export default ListaImpresii;
