import React, { Component } from 'react'
import HomeLayout from './HomeLayout'

class Error extends Component {
  render() {
    return (
      <HomeLayout>
        <div>
            <h1>Error 404 Not Found</h1>
        </div>
      </HomeLayout>
    )
  }
}

export default Error