// class based component

import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.state = {
      userInfo: {
        name: "dummy",
        location : "dummy"
      }
    }
  }

 async componentDidMount(){
     const response = await fetch('https://api.github.com/users/quickshifter8461')
     const data = await response.json()
     console.log(data)
     this.setState({
      userInfo: data
     })
  }

  render() {
    const {name, location} = this.state.userInfo
    const { count } = this.state;
    return (
      <div className="card admin">
        <div className="card-body">
          <h1>count: {count}</h1>
          <button
            onClick={() => {
              this.setState({
                count: count + 1,
              });
            }}
          >
            Increment
          </button>
          <h2 className="card-title">User Name: {name}</h2>
          <h3 className="card-text">User Location: {location}</h3>
        </div>
      </div>
    );
  }
}

export default UserClass;
