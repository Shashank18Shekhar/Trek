import React, { Component } from 'react';
import CardList1 from '../Card/CardList1';
import SearchBox from '../Card/SearchBox';
import Scroll from '../Card/Scroll';
import 'tachyons';
import data1 from '../data1'

class List1 extends Component{
   
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
        const filteredRobots = data1.filter(data1 =>{
            return data1.name.toLowerCase().includes(searchfield.toLowerCase());
          })
          
        return !data1.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <SearchBox searchChange={this.onSearchChange}/>
         
            <CardList1 data1={filteredRobots} />
         
        </div>
      );
      }

}

export default List1;