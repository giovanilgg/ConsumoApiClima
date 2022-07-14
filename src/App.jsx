import AppClima from "./components/AppClima";
import "./App.css";
import { ClimaProvider } from "./context/ClimaProvider";
import logo from "../assets/clima2.png";

function App() {
  return (
    <ClimaProvider>
      <div className="container">
        <header className="headerClima">
          <h1>Busca el clima de tu ciudad favorita!!</h1>
          <img src={logo} alt="logoClima" width="80" height="80" />
        </header>
        <AppClima></AppClima>;
      </div>
    </ClimaProvider>
  );
}

export default App;
