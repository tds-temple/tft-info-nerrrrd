//NPM
import React, { Component } from 'react'
import axios from 'axios'

//Components
import FormField from '../formField'
import Button from '../../button'

class CreateResourceForm extends Component {
  state = {
    name: '',
    address: ''
  }

  formChangeHandler = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value})
  }

  formSubmitHandler = e => {
    const { name, address } = this.state
    axios.post('/api/resources/create', { name, address })
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
    e.preventDefault()
  }

  render() {
    const { name, address } = this.state
    return (
      <form>
        <FormField
          label='Name:'
          name='name'
          value={name}
          changed={this.formChangeHandler}/>
        <FormField
          label='Address:'
          name='address'
          value={address}
          changed={this.formChangeHandler}/>
        <Button 
          label='Submit'
          clicked={this.formSubmitHandler}/>
      </form>
    )
  }
}

export default CreateResourceForm