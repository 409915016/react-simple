import React, {Component} from 'react'
import Ninjas             from './Ninjas'
import AddNinja           from './AddNinja'

class App extends Component {
    state = {
        ninjas: [
            {id: 1, name: 'Mather', age: 26},
            {id: 2, name: 'Yoshi', age: 20}
        ]
    }
    addNinja = (ninja) => {
        ninja.id = Math.random()
        let ninjas = [...this.state.ninjas, ninja]
        this.setState({
            ninjas: ninjas
        })
    }
    componentDidMount(){
     
    }
    componentDidUpdate(prevProps, prevState){
        console.log(prevProps)
        console.log(prevState)
    }

    deleteNinja = (id) =>{
        let ninjas = this.state.ninjas.filter(ninja =>{
            return ninja.id !== id
        })
        this.setState({
            ninjas: ninjas
        })

    }
    render () {
        return (
          <div className="App">
              <Ninjas 
              deleteNinja={this.deleteNinja}
              ninjas={ this.state.ninjas }/>
              <AddNinja addNinja={this.addNinja}/>
          </div>
        );
    }
}


export default App;
