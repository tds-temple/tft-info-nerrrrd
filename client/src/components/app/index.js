//NPM
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

//Components
import CreateResourceForm from '../forms/createResource'

//Actions
import {
  initializeSuppliers
} from '../../store/actions/suppliers'

import {
  initializeResources
} from '../../store/actions/resources'

import {
  initializeUsers
} from '../../store/actions/users'

class App extends Component {
  componentDidMount() {
    const { initSuppliers, initResources, initUsers } = this.props
    initSuppliers()
    initResources()
    initUsers()
  }

  render() {
    return (
      <Fragment>
        <CreateResourceForm/>
      </Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initSuppliers: () => dispatch(initializeSuppliers()),
    initResources: () => dispatch(initializeResources()),
    initUsers: () => dispatch(initializeUsers())
  }
}

export default connect(null, mapDispatchToProps)(App)