import React from "react";
import "../styles/FormularioStyles.css";
import { useState } from "react";
import useClima from "../hooks/useClima";
const Formulario = () => {
  const { busqueda, datosBusqueda, consultarClima } = useClima();
  const { ciudad, pais } = busqueda;
  const [alerta, setAlerta] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(busqueda).includes("")) {
      setAlerta("Todos los campos son obligatorios");

      return;
    }
    consultarClima(busqueda);
    setAlerta("");
  };

  return (
    <div>
      {alerta && <p className="alerta">{alerta}</p>}
      <form className="Formulario" onSubmit={handleSubmit}>
        <div className="Formulario_Campo">
          <label className="Formulario_Campo_Label" htmlFor="ciudad">
            Ciudad
          </label>
          <input
            className="Formulario_Campo_Input"
            type="text"
            name="ciudad"
            onChange={datosBusqueda}
            value={ciudad}
          />
        </div>
        <div className="Formulario_Campo">
          <label className="Formulario_Campo_Label" htmlFor="pais">
            Pais
          </label>
          <select
            value={pais}
            onChange={datosBusqueda}
            className="Formulario_Campo_Input"
            name="pais"
            id="pais"
          >
            <option value="">--Seleccione un pais--</option>
            <option value="US">Estados Unidos</option>
            <option value="MX">México</option>
            <option value="NO">Noruega</option>
            <option value="AR">Argentina</option>
            <option value="FR">Francia</option>
            <option value="BR">Brasil</option>
            <option value="CN">China</option>
            <option value="AU">Australia</option>
            <option value="CO">Colombia</option>
            <option value="BE">Belgica</option>
            <option value="CR">Costa Rica </option>
            <option value="JP">Japon </option>
            <option value="ES">España</option>
            <option value="PE">Peru</option>
          </select>
        </div>
        <input
          className="FormularioBtnSubmit"
          type="submit"
          value="Consultar Clima"
        />
      </form>
    </div>
  );
};

export default Formulario;
