import { Itarefa } from "../../types/tarefa";
import Item from "./Item";
import style from "./Lista.module.scss";

function Lista({ tarefas }: { tarefas: Itarefa[] }) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos dos dia</h2>
      <ul>
        {tarefas.map(({ tarefa, tempo }, index) => (
          <Item key={index} tarefa={tarefa} tempo={tempo} />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
