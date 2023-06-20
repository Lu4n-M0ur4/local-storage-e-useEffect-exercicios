import { useEffect, useState } from "react";
import { DivContainer, InputsContainer, ListaDeTarefas, Tarefa } from "./style";

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [valorDoInput, setValorDoInput] = useState("");
  const [filtro, setFiltro] = useState("");

  // useEffect() => {
  //   () => {

  //   },
  //   []
  // };

  // useEffect() => {
  //   () => {

  //   },
  //   []
  // };

  const pegarValorDoInput = (event) => {
    setValorDoInput(event.target.value);
  };

  const criarTarefa = () => {
    let novaTarefa = {
      id: Date.now(),
      texto: valorDoInput,
      completa: false,
    };

    valorDoInput.length && setTarefas([...tarefas, novaTarefa]);
    setValorDoInput("");
  };

  const selecionarTarefa = (id) => {
    tarefas.map((item) => {
      if (item.id === id) {
        if (item.completa == false) {
          item.completa = true;
          setTarefas([...tarefas]);
        }
      }
    });
  };

  const pegarValorDoSelect = (event) => {
    setFiltro(event.target.value);
  };

  const listaFiltrada = tarefas.filter((tarefa) => {
    switch (filtro) {
      case "pendentes":
        return !tarefa.completa;
      case "completas":
        return tarefa.completa;
      default:
        return true;
    }
  });
 
  return (
    <DivContainer>
      <h1>Lista de tarefas</h1>
      <InputsContainer>
        <input value={valorDoInput} onChange={pegarValorDoInput} />
        <button onClick={criarTarefa}>Adicionar</button>
      </InputsContainer>
      <br />

      <InputsContainer>
        <label>Filtro</label>
        <select value={filtro} onChange={pegarValorDoSelect}>
          <option value="">Nenhum</option>
          <option value="pendentes">Pendentes</option>
          <option value="completas">Completas</option>
        </select>
      </InputsContainer>
      <ListaDeTarefas>
        {listaFiltrada.map((tarefa) => {
          return (
            <Tarefa
              completa={tarefa.completa}
              onClick={() => selecionarTarefa(tarefa.id)}
            >
              {tarefa.texto}
            </Tarefa>
          );
        })}
      </ListaDeTarefas>
    </DivContainer>
  );
}

export default App;
