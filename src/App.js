import React, {Component} from 'react';
import LocationList from './components/WeatherLocation/LocationList';
import './App.css';

const cities =[
  'Buenos Aires, ar',
  'Ciudad de México, mex',
  'Bogota, col',
  'Washington, us',
  'Madrid, es',
  'Lima,pe',
]

class App extends Component {
  handleSelectedLocation= city =>{
    console.log(`handleSelectedLocation ${city}`);
  }
  render(){
    return (
      <div className="App">
      <LocationList 
          cities={cities}
          onSelectedLocation={this.handleSelectedLocation}
          />
      </div>
    );
  }
}

export default App;
