import Busca from "../../components/busca/busca";
import Tarefas from "../../components/tarefas/tarefas.jsx";
import Menu from "../../components/menu/menu.jsx"

function Page_Tarefas() {
    return <>
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
                    <Menu page="noticias" />
                </div>

                <div className="col py-3 me-3">
                    <div className="mb-5">
                        <Busca texto="Busca por Negócios" />
                    </div>


                    <div className="d-flex justify-content-between mb-3">
                        <div className="">
                            <Tarefas />
                        </div>
                    </div>


                    <div className="row">

                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Page_Tarefas;