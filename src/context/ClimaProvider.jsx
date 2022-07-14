import { useState, createContext } from "react";
import axios from "axios";

const ClimaContext = createContext();

const ClimaProvider = ({ children }) => {
  const [spinner, setSpinner] = useState(false);
  const [mensaje, setMensaje] = useState(false);
  const [resultado, setResultado] = useState({});
  const [busqueda, setBusqueda] = useState({
    ciudad: "",
    pais: "",
  });
  const datosBusqueda = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };
  const consultarClima = async (e) => {
    setSpinner(true);
    setResultado({});
    try {
      const appId = import.meta.env.VITE_API_KEY;
      const { ciudad, pais } = e;
      const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}`;
      const { data } = await axios(url);
      const { lat, lon } = data[0];

      const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`;
      const { data: dataClima } = await axios(urlClima);

      setResultado(dataClima);
    } catch (error) {
      setMensaje(true);
    } finally {
      setSpinner(false);
    }
  };

  return (
    <ClimaContext.Provider
      value={{
        resultado,
        busqueda,
        datosBusqueda,
        consultarClima,
        spinner,
        mensaje,
      }}
    >
      {children}
    </ClimaContext.Provider>
  );
};
export { ClimaProvider };
export default ClimaContext;
