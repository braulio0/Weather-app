import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import {Grid, Row, Col} from 'react-flexbox-grid';
import LocationList from './components/LocationList';
import ForcastExteded from './components/ForcastExtended';
import './App.css';

const cities =[
  'Buenos Aires, ar',
  'Ciudad de México, mex',
  'Bogota, col',
  'Washington, us',
  'Madrid, es',
  'Lima,pe',
  'Beirut, lbn',
  'San Petersburgo, rus'
]

class App extends Component {
  constructor(){
    super();
    this.state={city:null};
  }
  handleSelectedLocation= city =>{
    this.setState({city,});
    console.log(`handleSelectedLocation ${city}`);
  }
  render(){
    const {city}=this.state;
    return (
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='title' color = 'inherit'>
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
          
        </Row>
        <Row>
          <Col xs={12} md={6}>
              <LocationList 
              cities={cities}
              onSelectedLocation={this.handleSelectedLocation}
              />
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
            <div className="detail">
              {
                !city ?
                 <h1> No se seleccionó ciudad </h1> :
                 <ForcastExteded city={city}/>
              }
             
            </div>

            </Paper>

          </Col>
        </Row>
     
      </Grid>
    );
  }
}

export default App;
