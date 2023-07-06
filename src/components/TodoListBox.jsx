import React from "react";
import { GiNotebook } from "react-icons/gi";
import ListBox from '../components/ListBox'

const TodoListBox = ({ handleFilter, toggleCompleted, handleEditTodo, handleDeleteTodo}) => {
  return (
    <div className="list-box">
      {handleFilter().length > 0 ? (
        handleFilter().map((e) => (
            <ListBox
            key={e.id}
            e={e}
            toggleCompleted={toggleCompleted}
            handleEditTodo={handleEditTodo}   
            handleDeleteTodo={handleDeleteTodo}
          />
        ))
      ) : (
        <p className="NoTask"> No Tasks to Show <GiNotebook /> </p>
      )}
    </div>
  );
};

export default TodoListBox;
