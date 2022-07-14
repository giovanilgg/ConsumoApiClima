import React from "react";
import useClima from "../hooks/useClima";
import "../styles/CardStyles.css";
import imagenClima from "../../assets/clima.png";
const Resultado = () => {
  const { resultado } = useClima();
  const conversion = 273.15;
  const { temp, temp_max, temp_min } = resultado.main;

  return (
    <div className="card">
      <img className="card_imagen" src={imagenClima} alt="ImagenClima" />
      <div className="card_informacion">
        <h3>
          La temperatura actual en{" "}
          <span className="card_informacion_span">{resultado.name}</span> es de:
        </h3>
        <p className="card_informacion_temperatura">
          {parseInt(temp - conversion)} <span>&#x2103;</span>
        </p>
        <div className="card_informacion_min_max">
          <div>
            <p>Temp minima:</p>
            <p>
              {parseInt(temp_min - conversion)} <span>&#x2103;</span>
            </p>
          </div>
          <div>
            <p>Temp maxima:</p>
            <p>
              {parseInt(temp_max - conversion)} <span>&#x2103;</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resultado;
