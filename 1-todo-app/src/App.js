import { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

// Arreglo con los todo
const initialTodos = [
    {
        id: 1,
        title: 'Todo #1',
        description: 'Des del Todo #1',
        completed: false,
    },
    {
        id: 2,
        title: 'Todo #2',
        description: 'Des del Todo #2',
        completed: false,    
    },
    {
        id: 3,
        title: 'Todo #3',
        description: 'Des del Todo #3',
        completed: false,    
    }

]

const App = () => {
    // Dentro de un componente se pueden cargar y utilizar solo un Hooks
    // Lo hemos declarado en la parte más alta para compartir la info. entre componentes
    const [todos, setTodos] = useState(initialTodos); 

    // Eliminar todo, y la declarameos aquí en el padre para los hijos
    const todoDelete = (todoId) => {
        // Recuerdo que no podemos montar el estado, por lo hacemos una copia estado de los Todo, filtrando tener un ID diferente al cargado en el argumento
        const changedTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(changedTodos);
    }

    // El intermitente entre el estado completado y no completado
    const todoToogleCompleted = (todoId) => {
        const changedTodos = todos.map(todo => {
            const todoEdit = {
                // Un objeto con la iteracion que estamos recorriendo
                ...todo,
                // El completd sera un objeto con lo contrario
                completed: !todo.completed
            }

            if(todo.id === todoId) {
                return todoEdit
            }

            else {
                return todo
            }
        })

        setTodos(changedTodos);
    }

  return (
    <div className="container mt-4">
        <div className="row">
            <div className="col-8">
                {/* Enviamos la propiedades al TodoList */}
                <TodoList 
                    todos={todos}
                    todoDelete={todoDelete}
                    todoToogleCompleted={todoToogleCompleted}
                />
            </div>
            <div className="col-4">
                <TodoForm />
            </div>
        </div>
    </div>
  )
}

export default App