import React from "react";
import "./current-weather.css"; // Importa o estilo CSS para este componente

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather"> {/* Contêiner principal para as informações meteorológicas */}
      <div className="top"> {/* Parte superior do contêiner, contendo o nome da cidade, descrição do clima e ícone do clima */}
        <div>
          <p className="city">{data.city}</p> {/* Nome da cidade */}
          <p className="weather-description">{data.weather[0].description}</p> {/* Descrição do clima */}
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${data.weather[0].icon}.png`} // Ícone do clima
        />
      </div>
      <div className="bottom"> {/* Parte inferior do contêiner, contendo temperatura e detalhes adicionais */}
        <p className="temperature">{Math.round(data.main.temp)}°C</p> {/* Temperatura atual */}
        <div className="details"> {/* Contêiner para os detalhes meteorológicos */}
          <div className="parameter-row"> {/* Linha para cada parâmetro meteorológico */}
            <span className="parameter-label">Details</span> {/* Rótulo para os detalhes */}
          </div>
          <div className="parameter-row"> {/* Linha para a sensação térmica */}
            <span className="parameter-label">Feels like</span> {/* Rótulo para a sensação térmica */}
            <span className="parameter-value">
              {Math.round(data.main.feels_like)}°C {/* Valor da sensação térmica */}
            </span>
          </div>
          <div className="parameter-row"> {/* Linha para a velocidade do vento */}
            <span className="parameter-label">Wind</span> {/* Rótulo para a velocidade do vento */}
            <span className="parameter-value">{data.wind.speed} m/s</span> {/* Valor da velocidade do vento */}
          </div>
          <div className="parameter-row"> {/* Linha para a umidade */}
            <span className="parameter-label">Humidity</span> {/* Rótulo para a umidade */}
            <span className="parameter-value">{data.main.humidity}%</span> {/* Valor da umidade */}
          </div>
          <div className="parameter-row"> {/* Linha para a pressão atmosférica */}
            <span className="parameter-label">Pressure</span> {/* Rótulo para a pressão atmosférica */}
            <span className="parameter-value">{data.main.pressure} hPa</span> {/* Valor da pressão atmosférica */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather; // Exporta o componente CurrentWeather
