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

    render () {
        return (
          <div className="App">
              <Ninjas ninjas={ this.state.ninjas }/>
              <AddNinja />
          </div>
        );
    }
}


export default App;
