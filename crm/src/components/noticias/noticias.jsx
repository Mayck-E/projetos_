import React, { useState, useEffect } from "react";
import axios from "axios";


function Noticias() {
    const [noticias, setNoticias] = useState([]);
    const apiKey = "09606344e84e43fbaaca0127c520f976";
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=br&apiKey=${apiKey}`;



    useEffect(() => {
        axios
            .get(apiUrl)
            .then((response) => {
                setNoticias(response.data.articles);
            })
            .catch((error) => {
                console.error("Erro ao buscar notícias:", error);
            });
    }, []);


    return <>
        {noticias.map((noticia, index) => (
            <li key={index}>
                <a href={noticia.url} target="_blank" rel="noopener noreferrer">
                    {noticia.title}
                </a>
            </li>
        ))}

    </>

}

export default Noticias;