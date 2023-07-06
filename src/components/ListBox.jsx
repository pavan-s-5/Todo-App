
import { MdDeleteSweep } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

const ListBox = ({e, toggleCompleted, handleEditTodo, handleDeleteTodo }) => {
  return (
    <section className="list-todo">
      <div className="list-todo-div-1">
        <input
          type="checkbox"
          checked={e.isCompleted}
          onChange={() => toggleCompleted(e.id)}
        />

        <button onClick={() => handleEditTodo(e.id)}>
          <FiEdit />
        </button>

        <button onClick={() => handleDeleteTodo(e.id)}>
          <MdDeleteSweep />
        </button>
      </div>

      <div className="list-todo-div-2">
        <p>{e.task}</p>
      </div>
    </section>
  );
};


export default ListBox;
