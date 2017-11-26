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
        "locker_status_one": "",
        "locker_status_two": "",
        "locker_status_three": "",
        "locker_status_four": ""
      }
    };
    this.fetchData = this.fetchData.bind(this)
    setInterval(this.fetchData, 3000);
  }

  fetchData() {
    console.log("fetch data called");

    fetch(REQUEST_URL)
      .then((response) => response.json())
    .then((responseData) => {
      let locker_state = Object.assign({}, this.state.locker_state);
      locker_state.locker_status_one = responseData[0]['status']
      locker_state.locker_status_two = responseData[1]['status']
      locker_state.locker_status_three = responseData[2]['status']
      locker_state.locker_status_four = responseData[3]['status']
      this.setState({locker_state})
    })
  }

  componentWillUnmount() {
    clearInterval(this.countdown);
  }

  // componentDidMount() {
  //   this.countdown = setInterval(this.timer, 1000);
  // }

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

  render() {
    return (
      <div className="wrapper">
        <Lockers locker_state={this.state} />
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
