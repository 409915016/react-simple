import React from 'react'

const Ninjas = ({ninjas}) => {
    const ninjasList = ninjas.map(i => {
        return (
          <div className="ninja" key={ i.id }>
              <div>Name: { i.name }</div>
              <div>Age: { i.age }</div>
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