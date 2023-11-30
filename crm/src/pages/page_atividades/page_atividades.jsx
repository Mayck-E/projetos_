import Atividades from "../../components/atividades/atividades"
import Busca from "../../components/busca/busca"
import Menu from "../../components/menu/menu"


function Page_Atividades() {
    return <>
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
                    <Menu page="atividades" />
                </div>

                <div className="col py-3 me-3">
                    <div className="mb-5">
                        <Busca texto="Busca por Negócios" />
                    </div>

                    <div className="row">
                        <Atividades/>

                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Page_Atividades;