import React, { useState } from "react";
import edit from "../../assets/editar.gif"
import del from "../../assets/lixo.gif"
import "./tarefas.css"

const Tarefas = () => {
    const [tarefas, setTarefas] = useState([]);
    const [novaTarefa, setNovaTarefa] = useState("");
    const [editando, setEditando] = useState(null);
    const [textoEditado, setTextoEditado] = useState("");

    const adicionarTarefa = () => {
        if (novaTarefa.trim() !== "") {
            setTarefas([...tarefas, { id: Date.now(), texto: novaTarefa }]);
            setNovaTarefa("");
        }
    };

    const removerTarefa = (id) => {
        setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
        // If removing an item that is being edited, cancel the edit
        if (editando === id) {
            cancelarEdicao();
        }
    };

    const iniciarEdicao = (id, texto) => {
        setEditando(id);
        setTextoEditado(texto);
    };

    const salvarEdicao = () => {
        setTarefas((prevTarefas) =>
            prevTarefas.map((tarefa) =>
                tarefa.id === editando ? { ...tarefa, texto: textoEditado } : tarefa
            )
        );
        cancelarEdicao();
    };

    const cancelarEdicao = () => {
        setEditando(null);
        setTextoEditado("");
    };

    const excluirtudo = () => {
        setTarefas([]);
    }

    return (
        <div>
            <h1>Lista de Tarefas</h1>

            <div>
                <input
                    type="text"
                    value={novaTarefa}
                    onChange={(e) => setNovaTarefa(e.target.value)}
                />
                <button onClick={adicionarTarefa}>Adicionar Tarefa</button>
            </div>
            <br /><br />
            <ul>
                {tarefas.map((tarefa) => (
                    <li key={tarefa.id}>
                        {editando === tarefa.id ? (
                            <>
                                <input
                                    type="text"
                                    value={textoEditado}
                                    onChange={(e) => setTextoEditado(e.target.value)}
                                />
                                <button onClick={salvarEdicao}>Salvar</button>
                                <button onClick={cancelarEdicao}>Cancelar</button>
                            </>
                        ) : (
                            <>
                                {tarefa.texto}
                                <img onClick={() => iniciarEdicao(tarefa.id, tarefa.texto)} src={edit} className="imgs-crud" />

                                <img onClick={() => removerTarefa(tarefa.id)} src={del} className="imgs-crud" />
                            </>
                        )}
                    </li>
                ))}
            </ul>

            {
        tarefas.length > 0 &&
        <button onClick={excluirtudo} >
            Excluir tudo</button>
    }
        </div>

        
    );
};

export default Tarefas;