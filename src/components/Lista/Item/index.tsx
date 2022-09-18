import style from "../Lista.module.scss";
function Item({ tarefa, tempo }: { tarefa: string; tempo: string }) {
  return (
    <li className={style.item}>
      <h3 className={style.h3}>{tarefa}</h3>
      <span className={style.span}>{tempo}</span>
    </li>
  );
}

export default Item;
