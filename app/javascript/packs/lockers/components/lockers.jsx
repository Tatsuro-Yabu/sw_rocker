// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Locker from './locker'
// import request from 'superagent';

// let request = require('superagent');
var request = require('superagent');

const url = {
  req: 'http://localhost:3000/wp-json/wp/v2/posts'
}

class Lockers extends React.Component {

  receive() {
    request
    .get('https://user.mamorio.jp/mamorios.json?auth_token=APQifvzffAh-p97tAf5d'.req) //リクエストするurl
    .end((err, res) => {
      if(err) {
        console.log(err)
      } else {
        this.setState({
          body: res.body,
          loader: false
        })
      }
    });
  }

  renderLocker(i) {
    return <Locker locker_number={i} />;
  }

  render() {
    return (
      <div className="locker-container">
          {this.renderLocker(1)}
          {this.renderLocker(2)}
          {this.renderLocker(3)}
          {this.renderLocker(4)}
          <div className="display">
            <div className="status-text">
              空
            </div>
          </div>
      </div>
    );
  }
}

export default Lockers
