import React from 'react';

import {Cards, Chart, CountryPicker} from './components'; //shorthand
import styles from './App.module.css';
import {fetchData} from './api' //no need to include index.js
import covid_image from './images/logo.png'

class App extends React.Component {

    state = {
        data: {},
        country: '',
    }

   async componentDidMount() {
        const fetchedData = await fetchData();
        
        this.setState({data: fetchedData});
    }
    
    handleCountryChange = async (country) => {
        //fetch the data
        //set the state
        const fetchedData = await fetchData(country);
        this.setState({data: fetchedData, country: country});
        
    }
    render(){
        return(
            <div className={styles.container}>
                <img  src={covid_image} classname={styles.image} alt="Covid-19 Logo"/>
                <Cards data = {this.state.data}/>
                <CountryPicker handleCountryChange = {this.handleCountryChange}/>
                <Chart data={this.state.data} country={this.state.country}/>
            </div>
        )
    }
}

export default App;