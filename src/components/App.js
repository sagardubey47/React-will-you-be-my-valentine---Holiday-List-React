import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.cityList = [{ name: 'Goa', country: 'India',key:'location1' },
    { name: 'Amsterdam', country: 'Netherlands',key:'location2' },
    { name: 'New York', country: 'USA',key:'location3' },
    { name: 'Darjeeling', country: 'India',key:'location4' },
    { name: 'Tokyo', country: 'Japan',key:'location5' },
    { name: 'Lonavala', country: 'India',key:'location6' }
    ]
    this.result = this.cityList.filter(word => word.country == 'India');
  }
  


  render() {
    return (
      <div id="main">
        <ol>
        {this.result.map((x)=>(
          <li key={x.key} >{x.name}</li>
        ))}
        </ol>
      </div>
    )
  }
}


export default App;