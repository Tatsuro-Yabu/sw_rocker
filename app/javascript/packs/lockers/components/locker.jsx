// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class Locker extends React.Component {
  render() {
    if(this.props.locker_state == "lost"){
      return (
        <button className={"locker-" + this.props.locker_number + ' ' + this.props.locker_state} onClick={() => this.setState({value: 'X'})} >
          <div className="totte"></div>
          {/*{this.props.locker_number}*/}
          {/*{this.props.locker_state}*/}
        </button>
      );
    } else {
      return (
        <button className={"locker-" + this.props.locker_number} onClick={() => this.setState({value: 'X'})} >
          <div className="totte"></div>
          {/*{this.props.locker_number}*/}
          {/*{this.props.locker_state}*/}
        </button>
      );
    }
  }
}

export default Locker
