import React, { Component } from 'react';
import CardList from '../Card/CardList';
import SearchBox from '../Card/SearchBox';
//import Scroll from '../Card/Scroll';
import 'tachyons';
import data from '../robots'

class List extends Component{
   
    constructor() {
        super()
        this.state = {
          searchfield: ''
        }
      }

     
      onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
      }

      render(){
        const {  searchfield } = this.state;
        const filteredRobots = data.filter(data =>{
            return data.name.toLowerCase().includes(searchfield.toLowerCase());
          })
          
        return !data.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <SearchBox searchChange={this.onSearchChange}/>
         
            <CardList data={filteredRobots} />
         
        </div>
      );
      }

}

export default List;