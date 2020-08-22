import React from 'react'

const Ninjas = ({ninjas, deleteNinja}) => {
    const ninjasList = ninjas.map(i => {
        return (
            <div className="ninja" key={ i.id }>
              <div>Name: { i.name }</div>
              <div>Age: { i.age }</div>
              <button onClick={ ()=>{ deleteNinja(i.id)} }>Delete ninja</button>
            </div>
        )
    });
    return (
        <div className="ninja-list">
          { ninjasList }
        </div>
    )
}

export default Ninjas