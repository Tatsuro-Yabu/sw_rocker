// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Locker from './locker'

class Lockers extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  renderLocker(i) {
    return <Locker value={i} />;
  }

  render() {
    var divStyle = {
      color: 'red',
    };
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderLocker(0)}
          {this.renderLocker(1)}
          {this.renderLocker(2)}
        </div>
        <div className="board-row">
          {this.renderLocker(3)}
          {this.renderLocker(4)}
          {this.renderLocker(5)}
        </div>
        <div className="board-row">
          {this.renderLocker(6)}
          {this.renderLocker(7)}
          {this.renderLocker(8)}
        </div>
        <div style={divStyle}>{this.props.locker_state}</div>
      </div>
    );
  }
}

export default Lockers
