// função do objeto indicador
function Indicador(props){
    // retornando o HTML
    return <div className="card bg-transparent text-light border-light">
        <div className="card-header">
            {props.titulo} {/*usando as informações passadas pela função*/}
        </div>
        <div className="card-body text-center text-reset">
            <h5 className="card-title">{props.valor}</h5>
            <p className="card-text">{props.rodape}</p>
        </div>
    </div>
    
}

// deixando o a função publica
export default Indicador;