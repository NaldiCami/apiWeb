import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"; // Importa os componentes necessários do pacote react-accessible-accordion
import "./forecast.css"; // Importa o estilo CSS para este componente

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']; // Array com os nomes dos dias da semana

const Forecast = ({ data }) => {
  // Obtém o dia da semana atual
  const dayInAWeek = new Date().getDay();
  // Gera uma lista de dias da semana para a previsão começando a partir do dia atual
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
  
  return (
    <> {/* Fragmento vazio */}
      <label className="title">Daily</label> {/* Título para a seção de previsão diária */}
      {/* Componente Accordion para exibir os detalhes da previsão para cada dia */}
      <Accordion allowZeroExpanded> {/* Permite que nenhum item do acordeão esteja expandido inicialmente */}
        {/* Mapeia os dados da previsão para os próximos 7 dias */}
        {data.list.splice(0, 7).map((item, idx) => ( // Utiliza apenas os primeiros 7 elementos da lista de dados da previsão
          <AccordionItem key={idx}> {/* Item do acordeão para cada dia da previsão */}
            <AccordionItemHeading> {/* Cabeçalho do item do acordeão */}
              <AccordionItemButton> {/* Botão para expandir/collapsar o painel de detalhes */}
                <div className="daily-item"> {/* Container para os detalhes do dia da previsão */}
                  <img src={`icons/${item.weather[0].icon}.png`} className="icon-small" alt="weather" /> {/* Ícone do clima para o dia */}
                  <label className="day">{forecastDays[idx]}</label> {/* Dia da semana */}
                  <label className="description">{item.weather[0].description}</label> {/* Descrição do clima */}
                  <label className="min-max">{Math.round(item.main.temp_max)}°C /{Math.round(item.main.temp_min)}°C</label> {/* Temperatura máxima e mínima */}
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel> {/* Painel de detalhes do dia da previsão, expandido quando o usuário clica no botão do acordeão */}
              <div className="daily-details-grid"> {/* Grid para os detalhes do clima */}
                {/* Detalhes adicionais da previsão */}
                <div className="daily-details-grid-item">
                  <label>Pressure:</label>
                  <label>{item.main.pressure}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Humidity:</label>
                  <label>{item.main.humidity}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Clouds:</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Wind speed:</label>
                  <label>{item.wind.speed} m/s</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Sea level:</label>
                  <label>{item.main.sea_level}m</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Feels like:</label>
                  <label>{item.main.feels_like}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast; // Exporta o componente Forecast
