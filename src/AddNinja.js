import React, {Component} from 'react'

class AddNinja extends Component {
    state = {
        name: null,
        age: null
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
    }
    render () {
        return(
          <div>
              <form onSubmit={}>
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" onChange={this.handleChange}/>

                  <label htmlFor="age">Age:</label>
                  <input type="text" id="age" onChange={this.handleChange}/>

                  <button>Submit</button>
              </form>
          </div>
        );
    }
}

export default AddNinja