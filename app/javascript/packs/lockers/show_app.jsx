// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Lockers from './components/lockers'

class ShowApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }

  render() {
    return (
      <div className="wrapper">
        <Lockers locker_state={this.state.locker_state} />
        <div>{this.state.number}</div>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ShowApp />,
    document.body.appendChild(document.createElement('div')),
  )
})