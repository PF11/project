import React, { Component } from 'react';
import axios from 'axios';

class Person extends Component {
    constructor(){
super();
this.state = {

    persons : [],
} ;
    }
componentDidMount() {
    
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(res => {
      const persons = res.data;
      this.setState({ persons });
    console.log('response',res)
    })

    }
    render() { 
        return ( 
<div className="container2">
<ul>
        { this.state.persons.map(person => <li>{person.name}</li>)}
      </ul>
</div>

         );
    }
}
 
export default Person;