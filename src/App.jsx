import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import InputBox from "./components/InputBox";
import TodoListBox from "./components/TodoListBox";


function App() {
  const [allTodos, setAllTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });
  const [singleTodo, setSingleTodo] = useState("");
  const [edit, setEdit] = useState(0);
  const [filter, setFilter] = useState("All");

  // local storage : getting the data stored inside the local storage

  useEffect(() => {
    const storeTodos = localStorage.getItem("todos");
    if (storeTodos) {
      setAllTodos(JSON.parse(storeTodos));
    }
  }, []);

  // local Storage : adding the new todos to the local storage

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(allTodos));
  }, [allTodos]);

  const handleAddInputTodo = (e) => {
    e.preventDefault();

    if (edit) {
      const updatedTodos = allTodos.map((todo) => {
        if (todo.id === edit) {
          return { ...todo, task: singleTodo };
        }
        return todo;
      });
      setAllTodos(updatedTodos);
      setEdit(0);
    } else if (singleTodo !== "") {
      const newTodo = {
        id: Date.now().toString(),
        task: singleTodo,
        isCompleted: false,
      };
      setAllTodos([...allTodos, newTodo]);
    }
    setSingleTodo("");
  };

  const handleFilter = () => {
    if (filter === "Pending") {
      return allTodos.filter((todo) => todo.isCompleted === false);
    } else if (filter === "Completed") {
      return allTodos.filter((todo) => todo.isCompleted === true);
    } else {
      return allTodos;
    }
  };

  const handleDisplayPendingTodo = () => {
    const pending = allTodos.filter((e) => !e.isCompleted);
    return pending.length;
  };

  const ClearhandleCompletedTodo = () => {
    const clearCompletedTodo = allTodos.filter((e) => !e.isCompleted);
    setAllTodos(clearCompletedTodo);
  };

  const handleDeleteTodo = (id) => {
    const deleteTodo = allTodos.filter((todo) => todo.id !== id);
    setAllTodos(deleteTodo);
  };

  const handleEditTodo = (id) => {
    const editTodo = allTodos.find((todo) => todo.id === id);
    setSingleTodo(editTodo.task);
    setEdit(id);
  };

  const toggleCompleted = (id) => {
    const filterCompleted = allTodos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });
    setAllTodos(filterCompleted);
  };

  return (
    <div className="container">

      <Header />

      <section className="container-todo">

        <div className="input-box">
          <InputBox 
          handleDisplayPendingTodo={handleDisplayPendingTodo}
          ClearhandleCompletedTodo={ClearhandleCompletedTodo} 
          filter={filter}
          setFilter={setFilter}
          handleAddInputTodo={handleAddInputTodo}
          setSingleTodo={setSingleTodo}
          singleTodo={singleTodo}
          />
        </div>

        <TodoListBox 
            handleFilter={handleFilter}
            toggleCompleted ={toggleCompleted}
            handleEditTodo={handleEditTodo}
            handleDeleteTodo={handleDeleteTodo}
            />

      </section>
    </div>
  );
}

export default App;
