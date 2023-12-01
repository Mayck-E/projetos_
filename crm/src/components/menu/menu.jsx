import React from "react"; //importado o react
import { Link, NavLink } from "react-router-dom"; //importando do react-router-dom o LINK
import logo from"../../assets/logo.png"; //importando a logo
import "./menu.css" // importando a folha de estilos

// função do objeto com o atributo props
function Menu(props){

    //constante para mudar a cor dos links
    const linkBlue = "nav-link align-middle px-0"
    const linkBlack = "nav-link align-middle px-0 link-secondary"

    // retorna o HTML
        return <>
            <div className="d-flex flex-collumn align-itens-center align-itens-sm-start px-3 pt-2 text-white min-vh-100">

            <a href="/" className="d-flex align-itens-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-5 d-nome d-sm-inline">
                    <img src={logo} className="img-logo" />
                </span>
                </a>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-itens-sm-start" id="menu">

                    <li className="nav-item">
                        <Link to="/dashboard" className={props.page === "dashboard" ? linkBlue : linkBlack}>
                            <i className="fs-4 bi bi-bar-chart"></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/negocios" className={props.page === "negocio" ? linkBlue : linkBlack}>
                            <i className="=fs-4 bi bi-wallet2"></i> <span className="ms-1 d-none d-sm-inline">Negócios</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/noticias" className={props.page === "noticias" ? linkBlue : linkBlack}>
                            <i className="=fs-4 bi bi-wallet2"></i> <span className="ms-1 d-none d-sm-inline">Notícias</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/previsao" className={props.page === "previsao" ? linkBlue : linkBlack}>
                            <i className="=fs-4 bi bi-wallet2"></i> <span className="ms-1 d-none d-sm-inline">Previsão</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/atividades" className={props.page === "atividades" ? linkBlue : linkBlack}>
                            <i className="=fs-4 bi bi-wallet2"></i> <span className="ms-1 d-none d-sm-inline">Atividades</span>
                        </Link>
                    </li>

                </ul>
            </div>
        </>
}


// deixa publico a função MENU
export default Menu;