import React, { Component } from 'react';
import Fish from './Fish';
import MockData from './MockData';
// import _ from 'lodash';

class FishList extends Component {
    render() {
        
        return (
            <div>
               <Fish MockData= { MockData }/>
            </div>
        );
    }
}

export default FishList;