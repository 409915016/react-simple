import React from 'react'

const Todos = ({todos, deleteTodo}) =>{

    const todoList = todos.length ? 
    (
        todos.map(i =>{
            return (
                <div className="collection-item" key={i.id}>
                    <span onClick={()=>{deleteTodo(i.id)}}>{ i.content }</span>
                </div>
            )
        })
    ) : 
    
    (<p className="center">Nothing</p>)

    return (
    <div className="todos collection">
        { todoList }
    </div>
    )
}

export default Todos