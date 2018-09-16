//NPM
import React, { Component } from 'react'

//Components
import FormField from '../formField'
import Button from '../../button'

class CreateUserForm extends Component {
  state = {
    bio: '',
    email: '',
    facebook: '',
    favorites: [],
    linkedIn: '',
    location: '',
    name: '',
    notes: [],
    phone: '',
    twitter: '',
    url: '',
    username: ''
  }

  formChangeHandler = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value })
  }

  formSubmitHandler = e => {
    e.preventDefault()
  }

  render() {
    return (
      <form>
        <FormField/>
        <Button
          label='Submit'
          clicked={this.formSubmitHandler}/>
      </form>
    )
  }
}

export default CreateUserForm