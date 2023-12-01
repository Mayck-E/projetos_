import React, { useState, useEffect } from "react";
import axios from "axios";

// consntante Previsao para fazer a conexao com a API e retorna os dados em paragrafos HTML
const Previsao = () => {
    const [previsao, setPrevisao] = useState(null);
    const apiKey = "c1546a14357ae0b10c01b1d480a16012"; // Substitua pelo seu próprio chave da API

    useEffect(() => {
        // Substitua a cidade e o país conforme necessário
        const cidade = "votuporanga";
        const pais = "brasil";

        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cidade},${pais}&appid=${apiKey}`;

        axios
            .get(apiUrl)
            .then((response) => {
                setPrevisao(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar previsão do tempo:", error);
            });
    }, []);

    if (!previsao) {
        return <div>Carregando...</div>;
    }

    const paraCelcius = previsao.main.temp - 273.15;
    const arredondar = Math.round(paraCelcius);


    //01 array com palavras traduzidas e outras com as palavras em ingles
    //02 percorrer ela até encontrar a palavra usada
    const palavrasIngles = ['broken clouds', 'overcast clouds', 'scattered clouds', 'light rain', 'clear sky'];
    const palavrasTraduzidas = ['Nuvens Quebradas', 'Nuvens Nubladas', 'Nuvens Dispersas', 'Chuva Leve', 'Céu Limpo']
    let resultadoPalavra

    for (let i = 0; i < palavrasIngles.length; i++) {
        if (palavrasIngles[i] === previsao.weather[0].description) {
            resultadoPalavra = palavrasTraduzidas[i];
        }
        console.log(previsao.weather[0].description)
    }

    return(
        <div>
            
        <h2>Previsão do Tempo</h2>
        <p>Cidade: {previsao.name}</p>
        <p>Temperatura: {arredondar} °C</p>
        <p>Condição: {resultadoPalavra}</p>
        </div>
    );

};

// exporta a pravisao
export default Previsao;