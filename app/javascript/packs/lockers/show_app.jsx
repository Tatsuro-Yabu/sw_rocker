// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Lockers from './components/lockers'

const REQUEST_URL = 'https://user.mamorio.jp/mamorios.json?auth_token=APQifvzffAh-p97tAf5d'


class ShowApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      locker_state: {
        1: "verified",
        2: "lost",
        3: "lost",
        4: "verified"
      }
    };
    this.timer = this.timer.bind(this);
    
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
    .then((responseData) => {
      // debugger
      this.setState({
        locker_state: {
          1: responseData[0]['status'],
          2: responseData[1]['status'],
          3: responseData[2]['status'],
          4: responseData[3]['status'],
        },
      })
    })
  }

  componentWillUnmount() {
    clearInterval(this.countdown);
  }

  componentDidMount() {
    this.countdown = setInterval(this.timer, 1000);
  }

  extractLockerStatus(responseData){
    // TODO: extract status
    // {
      //   1: "verified",
      //   2: "lost",
      //   3: "lost",
      //   4: "verified"
      // }
    return status
  }

  timer() {
    this.setState({ number: this.state.number + 1 });
  }

  render() {
    return (
      <div className="wrapper">
        <Lockers locker_state={this.state.number} />
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
