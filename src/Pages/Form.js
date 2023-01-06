import React, { Component } from 'react'

export class Form extends Component {
 
    constructor(props) {
      super(props)
    
      this.state = {
         username:" ",
      }
    }

    handleForm = event =>{
        this.setState({
            username:event.target.value,
        })
       }

       formSubmitHandle= event =>
       {
           alert(`${this.state.username}`)
       }

    render() {
        
 
 
    return (
      <div>
        <form onSubmit={this.formSubmitHandle}>
            <input type='text' value={this.state.username}  onChange={this.handleForm} />
            <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default Form