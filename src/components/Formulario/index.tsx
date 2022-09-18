import * as React from "react";
import Botao from "../Botao";
import style from "./Formulario.module.scss";
import { Itarefa } from "../../types/tarefa";

class Formulario extends React.Component<{
  setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>;
}> {
  state = {
    tarefa: "",
    tempo: "00:00",
  };

  adicionarTarefa(evento: React.FormEvent) {
    evento.preventDefault();
    this.props.setTarefas((tarefasAntigas) => [
      ...tarefasAntigas,
      { ...this.state },
    ]);
  }

  render() {
    return (
      <form
        className={style.novaTarefa}
        onSubmit={this.adicionarTarefa.bind(this)}
      >
        <div className={style.inputContainer}>
          <label className={style.label} htmlFor="tarefa">
            Adicione um estudo
          </label>
          <input
            className={style.input}
            type="text"
            name="tarefa"
            id="tarefa"
            placeholder="O que você quem estudar?"
            value={this.state.tarefa}
            onChange={(evento) =>
              this.setState({ ...this.state, tarefa: evento.target.value })
            }
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label className={style.label} htmlFor="tempo">
            Tempo
          </label>
          <input
            className={style.input}
            type="time"
            step="1"
            name="tempo"
            value={this.state.tempo}
            onChange={(evento) =>
              this.setState({ ...this.state, tempo: evento.target.value })
            }
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Botao type="submit">Adicionar</Botao>
      </form>
    );
  }
}

export default Formulario;
