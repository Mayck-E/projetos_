import "./busca.css"; // importando o css do busca

//  função do elemento busca, retorna o HTML
function Busca(props){
    return <div className="input-group">
        {/* input de texto */}
        <input type="text" className="form-control busca" placeholder={props.texto} />
        {/* botão de pesquisa */}
        <button className="btn btn-primary" type="button" id="button-addon2">Buscar</button>
    </div>
}

export default Busca;