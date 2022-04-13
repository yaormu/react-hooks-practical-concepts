import React from "react";
import Todo from "./Todo";

/* En vez de crear una lista por cada uno
const todo1 = {
    title: 'Todo #1',
    description: 'Des del Todo #1',
    completed: false,
}
*/

// Recibimos las propiedades del padre
const TodoList = ({todos, todoDelete, todoToogleCompleted}) => {
    
    return (
        <div>
            <h1 className="text-right">Soy TodoList</h1>
            {/* FORMA DE LLAMAR INDIVIDUALMENTE <Todo todo={todo1}/> */}
            {
                todos.map(todito => (
                    <
                        Todo todo={todito} 
                        key={todito.id} 
                        todoDelete={todoDelete}
                        todoToogleCompleted={todoToogleCompleted}
                    />
                ))
            }
        </div>
    ); 
};

export default TodoList;
