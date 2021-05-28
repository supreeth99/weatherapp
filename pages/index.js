import React, { Component } from "react";
import Header from './components/header';
import Layout from './components/layout';
import Body from './components/info';
class WeatherIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: {}
    };
  }

  // componentDidMount() {
    
  //   fetch("https://api.openweathermap.org/data/2.5/weather?q=Bangalore&appid=b5b0475c91ae54e97e596206b2dd0700")
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         const data = result;
  //         this.setState({
  //           isLoaded: true,
  //           items: data
  //         });
  //       },
  //       // Note: it's important to handle errors here
  //       // instead of a catch() block so that we don't swallow
  //       // exceptions from actual bugs in components.
  //       (error) => {
  //         this.setState({
  //           isLoaded: true,
  //           error
  //         });
  //       }
  //     )
  //     console.log(this.state.items);
  // }

  render() {
      return (
          <div>
          {/* <Header /> */}
             <Body/>
             </div>
      // <div>
      //  { JSON.stringify(this.state.items) }
      // </div>
      );
    }
  }

export default WeatherIndex;