import "./negocios.css";

function Negocio() {
    return <>

        <div className=" p-4 rounded-4 border">
            <div className="d-flex justify-content-between mb-3">
                <div className="d-inline-flex">
                    <h2>Negocios...</h2>

                    <div className="form-control ms-4">
                        <select name="etapa" id="etapa">
                            <option value="0">Etapa</option>
                            <option value="Prospecção">Prospecção</option>
                            <option value="Proposta">Proposta</option>
                        </select>
                    </div>
                </div>

                <button className="btn btn-primary ms-4 ms-2"><i class="bi bi-plus-lg me-2"></i>Novo Negócio</button>
            </div>
        </div>


    </>
}

export default Negocio;