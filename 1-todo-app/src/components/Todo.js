import React from 'react'

// Destructuramos (props) de una vez  
const Todo = ({todo, todoDelete}) => {

     

    return (
        <div className="card mt-2">
            <div className="card-body">
                <h3 className="card-title text-right">
                    {todo.title}
                </h3>
                <button className="btn btn-sm btn-outline-success ml-2">
                    Terminar
                </button>
                <p className="card-text text-right">
                    {todo.description}
                </p>
                <hr />
                <div className="d-flex justify-content-start">
                    <button className="btn btn-sm btn-outline-primary mr-3">Editar</button>
                    <button 
                        onClick={() => todoDelete(todo.id)}
                        className="btn btn-sm btn-outline-danger mr-2"
                    >
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Todo