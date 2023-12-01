import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard.jsx";
import Noticias from "./pages/page_noticias/page_noticias.jsx";
import Negocios from "./pages/page_negocios/page_negocios.jsx";
import Previsao from "./pages/page_previsao/page_previsao.jsx";
import Atividades from "./pages/page_atividades/page_atividades.jsx";


function Rotas() {
    return <BrowserRouter>
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/negocios" element={<Negocios />} />
            <Route path="/previsao" element={<Previsao />} />
            <Route path="/atividades" element={<Atividades />} />
        </Routes>
    </BrowserRouter>
}

export default Rotas;