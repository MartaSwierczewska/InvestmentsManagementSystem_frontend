import React from 'react';
import 'react-svg-donuts/dist/index.css';

export default class Statistics extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            labels: ['house1', 'house2', 'house3', 'house4'],
            data: [20, 45, 28, 80],
        };
    }

    render(){
        return(
            <div></div>
        )
    }
}