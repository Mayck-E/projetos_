function Indicador(props){
    return <div className="card bg-transparent text-light border-light">
        <div className="card-header">
            {props.titulo}
        </div>
        <div className="card-body text-center text-reset">
            <h5 className="card-title">{props.valor}</h5>
            <p className="card-text">{props.rodape}</p>
        </div>
    </div>
    
}

export default Indicador;