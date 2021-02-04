import React, { Fragment, useEffect, useState } from "react";

const ListTodos = () => {

    const [todos, setTodos] = useState([])

    //delete todo function
    const deleteTodo = async () => {
        try{

        } catch (err) {
            console.error(err.message)
        }
    }

    const getTodos = async () => {
        try {

            const response = await fetch("http://localhost:5000/todos");
            const jsonData = await response.json();

            //console.log(jsonData);
            setTodos(jsonData);

        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getTodos();
    }, []);

    //console.log(todos);

    return (
        <Fragment>
          {" "}
          <table className="table mt-5 text-center">
           <thead>
            <tr>
              <th>Description</th>
             <th>Edit</th>
             <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
                <td>.......</td>
                <td>button</td>
                <td>button</td>
                </tr>    
            */}

            {todos.map(todo => (
                <tr key={todo.todo_id}>
                    <td>
                        {todo.description}
                    </td>
                    <td>
                        <button>
                            Edit
                        </button>
                    </td>
                    <td>
                        <button 
                          className="btn btn-danger"
                          onClick={() => deleteTodo(todo.todo_id)}
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            ))}
              
          </tbody>
         </table>
      </Fragment>
    )
};

export default ListTodos;