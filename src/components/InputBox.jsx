
const InputBox = ({
  handleDisplayPendingTodo,
  ClearhandleCompletedTodo,
  filter,
  setFilter,
  handleAddInputTodo,
  setSingleTodo,
  singleTodo
}) => {
  return (
    <>
      <form className="inputbox-section-1" onSubmit={handleAddInputTodo}>
        <input
          type="text"
          placeholder="Add your todo list. . ."
          onChange={(e) => setSingleTodo(e.target.value)}
          value={singleTodo}
        />

        <button type="submit">Add</button>
      </form>

      <section className="inputbox-section-2">
        <button onClick={() => setFilter("All")}
        style={{backgroundColor : filter === 'All' ? 'lightsalmon' : ''}}
        > 
        All</button>
        <button onClick={() => setFilter("Pending")}
        style={{backgroundColor : filter === 'Pending' ? 'lightsalmon' : ''}}
        > 
        Pending Task</button>

        <button onClick={() => setFilter("Completed")}
        style={{backgroundColor : filter === 'Completed' ? 'lightsalmon' : ''}}
        > 
        Completed Task </button>

        <button 
        onClick={ClearhandleCompletedTodo}
        className="clearButton"
        >
          Clear All Completed Task
        </button>
      </section>

      <section className="inputbox-section-3">
        <p>Pending Task : {handleDisplayPendingTodo()}</p>
      </section>
    </>
  );
};

export default InputBox;
