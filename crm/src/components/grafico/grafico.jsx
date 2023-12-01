// importando o google charts para o arquivo
import { Chart } from "react-google-charts";

// função do objeto GRAFICO
function Grafico(props) {
    // constande array com as informações de mes e valor
    const dados = [
        ["Mês", "Valor"],
        ["Janeiro", 1000],
        ["02", 1170],
        ["03", 660],
        ["04", 1030],
        ["05", 500],
        ["06", 300],
        ["07", 800],
        ["08", 1500],
        ["09", 2000],
        ["10", 3000],
        ["11", 2500],
        ["12", 1000],
    ];

    // constante definindo as opções de legenda
    const options = {
        legend: props.legenda ? {} : { position: "none" }
    }

    // usando os dados informados no Dashboard pela função <grafico>
    return <div className="card bg-light-subtle">
        <div className="card-header">
            {props.titulo}
        </div>
        <div className="card-boby text-center ">
            <Chart chartType={props.chartType}
                data={dados}
                width="100%"
                height="350px"
                options={options}
                legendToggle={true} />
        </div>
    </div>

}

export default Grafico;