import React, { useState, useEffect } from "react";
import axios from "axios";
import Menu from "../../components/menu/menu";
import Busca from "../../components/busca/busca";

const Previsao = () => {
    const [previsao, setPrevisao] = useState(null);
    const apiKey = "c1546a14357ae0b10c01b1d480a16012"; // Substitua pelo seu próprio chave da API

    useEffect(() => {
        // Substitua a cidade e o país conforme necessário
        const cidade = "London";
        const pais = "uk";

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

    let converter = previsao.main.temp-273.15;
    let arredondar = Math.round(converter);


//01 ideia para tradução: criar array com palavras traduzidas e outras com as palavras em ingles
//02 percorrer ela até encontrar a palavra usada


    

    return (
        <div>
            <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
                    <Menu page="previsao" />
                </div>

                <div className="col py-3 me-3">
                    <div className="mb-5">
                        <Busca texto="Busca por Negócios" />
                    </div>

                    <div className="">  
            <h2>Previsão do Tempo</h2>
            <p>Cidade: {previsao.name}</p>
            <p>Temperatura: {arredondar} °C</p>
            <p>Condição: {previsao.weather[0].description}</p></div></div></div></div>
        </div>
    );
};

export default Previsao;