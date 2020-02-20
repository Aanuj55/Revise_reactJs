import React, { Component } from "react";
import "./styles.css";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  increament() {
    this.setState({ count: this.state.count + 1 }, () => {
      /* //by this way we are working on current state of object:not recommended
                                                           //instead of that use arrow function which like
                                                           // this.setState( (prevState,props)=> ({
                                                              count:prevState+1
                                                                }) */
      console.log("callback", this.state.count);
    });
    console.log(this.state.count); //It shows previous value of count because calls are asynchronous as
    //it is called before setState is called to handle situations
    //when you want to some code to run after setstate then pass a
    // second parameter callback function in setstate
    //ReactJs group multiple state calls into one call hence calling
    // five times increament method is not worth and give output 1 instead
    //of 5
  }
  Reset() {
    this.setState({ count: 0 });
    console.log(this.state.count);
  }
  render() {
    return (
      <div>
        <h2>Count-{this.state.count}</h2>
        <button onClick={() => this.increament()}>UpMe</button>
        <button onClick={() => this.Reset()}>ResetMe</button>
      </div>
    );
  }
}
export default Counter;
