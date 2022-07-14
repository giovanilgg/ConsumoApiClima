import React from "react";
import Formulario from "./Formulario";
import "../styles/MainStyle.css";
import Resultado from "./Resultado";
import useClima from "../hooks/useClima";
import Spinner from "./Spinner";
const AppClima = () => {
  const { resultado, spinner, mensaje } = useClima();

  return (
    <>
      <main>
        <Formulario></Formulario>
        {spinner ? (
          <Spinner />
        ) : resultado?.name ? (
          <Resultado></Resultado>
        ) : mensaje ? (
          <p className="mensaje">Lo sentimos,no se encontraron resultados</p>
        ) : (
          <p className="mensaje">No hay busquedas por el momento</p>
        )}
      </main>
    </>
  );
};

export default AppClima;
