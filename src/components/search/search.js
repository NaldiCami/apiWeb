import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate"; // Importa o componente de seleção assíncrona
import { geoApiOptions, GEO_API_URL } from "../../api"; // Importa as opções e URL da API de geolocalização

// Define o componente Search que recebe a função onSearchChange como propriedade
const Search = ({ onSearchChange }) => {
  // Define o estado local para armazenar o valor da pesquisa
  const [search, setSearch] = useState(null);

  // Função para carregar as opções de cidades assincronamente
  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, // URL da API com o valor de entrada fornecido
      geoApiOptions // Opções para a solicitação fetch
    )
      .then((response) => response.json()) // Converte a resposta para JSON
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`, // Valor da cidade (latitude e longitude)
              label: `${city.name}, ${city.countryCode}`, // Rótulo da cidade (nome e código do país)
            };
          }),
        };
      });
  };

  // Função para lidar com a mudança de valor de pesquisa
  const handleOnChange = (searchData) => {
    setSearch(searchData); // Atualiza o estado local com o novo valor de pesquisa
    onSearchChange(searchData); // Chama a função onSearchChange fornecida como propriedade, passando o novo valor de pesquisa
  };

  // Retorna o componente AsyncPaginate para a entrada de pesquisa
  return (
    <AsyncPaginate
      placeholder="Search for city" // Texto exibido quando o campo de pesquisa está vazio
      debounceTimeout={600} // Tempo de espera após o usuário parar de digitar antes de realizar a pesquisa
      value={search} // Valor atual do campo de pesquisa, controlado pelo estado local
      onChange={handleOnChange} // Função chamada quando o valor do campo de pesquisa muda
      loadOptions={loadOptions} // Função para carregar as opções de pesquisa conforme o usuário digita
    />
  );
};

export default Search; // Exporta o componente Search
