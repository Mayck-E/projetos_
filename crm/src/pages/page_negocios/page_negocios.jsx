import Busca from "../../components/busca/busca";
import Menu from "../../components/menu/menu";
import Negocios from "../../components/negocios/negocios";


function Negocio() {
    return <>
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
                    <Menu page="negocio" />
                </div>

                <div className="col py-3 me-3">
                    <div className="mb-5">
                        <Busca texto="Busca por Negócios" />
                    </div>

                    <div className="row">
                        <Negocios/>

                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Negocio;